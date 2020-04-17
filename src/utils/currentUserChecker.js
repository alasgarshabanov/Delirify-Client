import { useEffect, useContext } from 'react';
import useFetch from '../hooks/useFetch.hook';
import useLocalStorage from '../hooks/useLocalStorage.hook';
import { CurrentUserContext } from '../contexts/currentUser.context';

const CurrentUserChecker = ({children}) => {
    const [{response}, doFetch] = useFetch('/user');
    const [token] = useLocalStorage('token');
    const [, setCurrentUserState] = useContext(CurrentUserContext);

    useEffect(() => {
        if (!token) {
            setCurrentUserState(state => ({...state, isLoggedIn: false}));
            return;
        }

        doFetch();
        setCurrentUserState(state => ({
            ...state,
            isLoading: true
        }));
    }, [token, setCurrentUserState, doFetch]);

    useEffect(() => {
        if (!response) return;

        setCurrentUserState(state => ({
            ...state,
            isLoggedIn: true,
            isLoading: false,
            currentUser: response.user
        }))
    }, [response, setCurrentUserState]);

    return children;
}

export default CurrentUserChecker;