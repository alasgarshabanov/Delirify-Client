import { useEffect, useContext } from 'react';
import useFetch from '../hooks/useFetch.hook';
import useLocalStorage from '../hooks/useLocalStorage.hook';
import { CurrentUserContext } from '../contexts/currentUser.context';

const CurrentUserChecker = ({children}) => {
    const [{response}, doFetch] = useFetch('/user');
    const [token] = useLocalStorage('token');
    const [, dispatch] = useContext(CurrentUserContext);

    useEffect(() => {
        if (!token) {
            dispatch({ type: 'SET_UNAUTHORIZED'});
            return;
        }

        doFetch();
        dispatch({ type: 'LOADING'});
    }, [token, dispatch, doFetch]);

    useEffect(() => {
        if (!response) return;

        dispatch({ type: 'SET_AUTHORIZED', payload: response.user})
    }, [response, dispatch]);

    return children;
};

export default CurrentUserChecker;
