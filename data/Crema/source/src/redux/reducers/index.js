import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
import Settings from './Setting';
import MailApp from './MailApp';
import Common from './Common';
import Editors from './Editors';
import ToDoApp from './ToDoApp';
import Dashboard from './Dashboard';
import Gallery from './Gallery';
import UserList from './UserList';
import FirebaseAuth from './FirebaseAuth';
import AWSCognito from './AWSCognito';
import Ecommerce from './Ecommerce';
import ContactApp from './ContactApp';
import ScrumboardApp from './ScrumboardApp';
import Auth0 from './Auth0';
import JWTAuth from './JWTAuth';

export default history =>
  combineReducers({
    router: connectRouter(history),
    settings: Settings,
    firebaseAuth: FirebaseAuth,
    awsCognito: AWSCognito,
    auth0User: Auth0,
    jwtAuth: JWTAuth,
    mailApp: MailApp,
    dashboard: Dashboard,
    common: Common,
    editors: Editors,
    todoApp: ToDoApp,
    gallery: Gallery,
    userList: UserList,
    ecommerce: Ecommerce,
    contactApp: ContactApp,
    scrumboardApp: ScrumboardApp,
  });
