import { useEffect, useContext } from 'react';
import jwtDecoder from 'jwt-decode';
import axios from 'axios';
import moment, { unix } from "moment";
import useFetch from '../hooks/useFetch.hook';
import useLocalStorage from '../hooks/useLocalStorage.hook';
import { CurrentUserContext, currentUserActions } from '../contexts/providers/currentUser.context';

const CurrentUserChecker = ({ children }) => {
    const [{response}, doFetch] = useFetch();
    const [token] = useLocalStorage('token');
    const [, dispatch] = useContext(CurrentUserContext);

    useEffect(() => {
        window.moment = moment;
        const jwtT = jwtDecoder('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1ODkxNjAxODksIm5iZiI6MTU4OTE2MDE4OSwianRpIjoiMGI4ZWNjMGMtOWI5NS00NGMwLTgzMTctNGZmM2NmZGQ3MzUzIiwiZXhwIjoxNTg5MTYwMzY5LCJpZGVudGl0eSI6ImIwNWZkNDNhLTYyNTItNDNmOC05ZTQzLTRlNTg2N2FhNGY2MiIsImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.Uy_SezdMmdXMUqkUSZNeXTc6bdKbKAalQyw-3lHfIX0');
        if (moment(moment.now()).isAfter(moment.unix(jwtT.exp))) {
            axios.get("/t/refresh")
              .then((res) => {
                  console.log('log', res)
              })
              .catch(err => {
                localStorage.removeItem('token');
                console.log('Er > ', err);
              })
        }

        if (!token) {
            dispatch({ type: currentUserActions.SET_UNAUTHORIZED });
            return;
        }

        const jwt = jwtDecoder(token)
        if (moment(moment.now()).isAfter(moment.unix(jwt.exp))) {
            axios.get("/t/refresh")
              .then((res) => {
                  console.log('log', res)
              })
              .catch(err => {
                  console.log('Er > ', err);
              })
        }

        doFetch();
        dispatch({ type: 'LOADING'});
    }, [token, dispatch, doFetch]);

    useEffect(() => {
        if (!response) return;

        // const { accessToken } = response.data;
        // const decode = jwtDecoder(accessToken);


        dispatch({ type: currentUserActions.SET_AUTHORIZED, payload: response.user})
    }, [response, dispatch]);

    return children;
};

export default CurrentUserChecker;
