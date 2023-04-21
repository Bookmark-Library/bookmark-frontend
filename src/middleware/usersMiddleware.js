/* eslint-disable no-console */
import axios from 'axios';
import { removeInput, saveUserBooks } from '../actions/book';
// import { fetchFavoriteRecipes } from '../actions/recipes';
import {
  CREATE_USER_IN_API,
  fetchUserInfo, FETCH_USER_INFO, saveAuthData, SaveUserInfo, SUBMIT_LOGIN,
} from '../actions/user';

const usersMiddleware = (store) => (next) => (action) => {
  // console.log('authMiddleware, on a reçu une action', action);
  switch (action.type) {
    case SUBMIT_LOGIN:
      axios.post(
        // url
        'http://sandy-bouzid.vpnuser.lan:8000/api/login_check',
        // données
        {
          username: store.getState().user.email,
          password: store.getState().user.password,
        },
      )
        .then((response) => {
          // eslint-disable-next-line no-console
          // console.log(response.data);
          store.dispatch(saveAuthData(response.data.token));

          // on ajoute le token dans le localstorage
          localStorage.setItem('token', response.data.token);

          // on dispatch une action, pour qu'un middleware aille chercher les infos
          // de l'utilisateur authentifié
          store.dispatch(fetchUserInfo());
        })
        .catch((error) => {
          // le serveur nous retourne 401 si les identifiants ne sont pas bons
          // eslint-disable-next-line no-console
          console.warn(error);
        });
      break;
    case FETCH_USER_INFO:
      axios.get(
        // URL
        'http://sandy-bouzid.vpnuser.lan:8000/api/libraries',
        // options (notamment les headers)
        {
          headers: {
            // nom du header: valeur
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        },
      )
        .then((response) => {
          console.log(response.data);
          localStorage.setItem('pseudo', response.data.alias);
          localStorage.setItem('bibliotheque', JSON.stringify(response.data.libraries));
          store.dispatch(SaveUserInfo(
            response.data.alias,
            response.data.avatar,
          ));
          store.dispatch(saveUserBooks(
            response.data.libraries,
          ));
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.log(error);
        });
      break;
    case CREATE_USER_IN_API:
      axios.post(
        // URL
        'http://sandy-bouzid.vpnuser.lan:8000/api/users',
        // options (notamment les headers)
        {
          alias: store.getState().user.alias,
          email: store.getState().user.email,
          password: store.getState().user.password,
          avatar: store.getState().user.avatar,
        },
      )
        .then((response) => {
          console.log(response.data);
          store.dispatch(removeInput());
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    default:
  }

  next(action);
};

export default usersMiddleware;
