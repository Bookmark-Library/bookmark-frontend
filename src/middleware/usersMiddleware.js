/* eslint-disable no-console */
import axios from 'axios';
import { saveUserBooks } from '../actions/book';
// import { fetchFavoriteRecipes } from '../actions/recipes';
import {
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
        'http://sandy-bouzid.vpnuser.lan:8000/api/users',
        // options (notamment les headers)
        {
          headers: {
            // nom du header: valeur
            Authorization: `Bearer ${store.getState().user.token}`,
          },
        },
      )
        .then((response) => {
          // console.log(response.data);
          localStorage.setItem('pseudo', response.data.alias);
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
    default:
  }

  next(action);
};

export default usersMiddleware;
