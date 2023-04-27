/* eslint-disable no-console */
import axios from 'axios';
import { toast } from 'react-toastify';
import { saveUserBooks } from '../actions/book';
// import { fetchFavoriteRecipes } from '../actions/recipes';
import {
  CREATE_USER_IN_API,
  deleteUser,
  DELETE_USER_IN_API,
  fetchUserInfo, FETCH_USER_INFO, removeInput, saveAuthData,
  SaveUserInfo, SUBMIT_LOGIN, updateUser, UPDATE_USER_IN_API, UPDATE_USER_PASSWORD_IN_API,
} from '../actions/user';

const usersMiddleware = (store) => (next) => (action) => {
  // console.log('authMiddleware, on a reçu une action', action);
  switch (action.type) {
    case SUBMIT_LOGIN:
      axios.post(
        // url
        // 'http://laurent-finana.vpnuser.lan:8000/api/login_check',
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
          if (error.request.status === 401) {
            toast.warning('identifiants invalide');
          }
          toast.warning('Une erreur est survenue veuillez réessayer');
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
          // console.log(response.data);
          localStorage.setItem('pseudo', response.data.alias);
          localStorage.setItem('bibliotheque', JSON.stringify(response.data.libraries));
          localStorage.setItem('email', response.data.email);
          store.dispatch(SaveUserInfo(
            response.data.alias,
            response.data.avatar,
            response.data.email,
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
      console.log(store.getState().user.avatar);
      if (Object.keys(store.getState().user.formErrors).length !== 0) {
        return;
      }
      axios.post(
        // URL
        'http://sandy-bouzid.vpnuser.lan:8000/api/users',
        // options (notamment les headers)
        {
          alias: store.getState().user.alias,
          email: store.getState().user.emailInscription,
          password: store.getState().user.passwordInscription,
          avatar: URL.createObjectURL(store.getState().user.avatar),
        },
      )
        .then((response) => {
          console.log(response.data);
          toast.success('Inscription réussie, veuillez vous connecter avec vos identifiants !');

          store.dispatch(removeInput());
        })
        .catch((error) => {
          console.log(error);
          toast.warning('Une erreur est survenue veuillez réessayer');
        });
      break;
    case DELETE_USER_IN_API:
      axios.delete(
        // URL
        'http://sandy-bouzid.vpnuser.lan:8000/api/users',
        // options (notamment les headers)
        {
          headers: {
            // nom du header: valeur
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        },
      )
        .then((response) => {
          // console.log(response.data);
          toast.success('Votre profil a bien été supprimé');
          store.dispatch(deleteUser());
        })
        .catch((error) => {
          console.log(error);
          toast.warning('Une erreur est survenu veuillez réessayer');
        });
      break;
    case UPDATE_USER_IN_API:
      axios.put(
        // URL
        'http://sandy-bouzid.vpnuser.lan:8000/api/users',
        // options (notamment les headers)
        {
          alias: store.getState().user.alias,
          email: store.getState().user.email,
          avatar: store.getState().user.avatar,
        },
        {
          headers: {
            // nom du header: valeur
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        },
      )
        .then((response) => {
          // console.log(response.data);
          toast.success('Votre profil a bien été mis à jour');
          store.dispatch(fetchUserInfo());
          store.dispatch(updateUser());
        })
        .catch((error) => {
          console.log(error);
          toast.warning('Une erreur c\'est produite');
        });
      break;
    case UPDATE_USER_PASSWORD_IN_API:
      axios.put(
        // URL
        'http://sandy-bouzid.vpnuser.lan:8000/api/users/password',
        // options (notamment les headers)
        {
          password: store.getState().user.password,
          alias: store.getState().user.alias,
          email: store.getState().user.email,
        },
        {
          headers: {
            // nom du header: valeur
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        },
      )
        .then((response) => {
          // console.log(response.data);
          store.dispatch(updateUser());
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
