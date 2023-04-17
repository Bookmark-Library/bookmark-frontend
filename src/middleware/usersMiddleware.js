import axios from 'axios';
import { fetchFavoriteBooks } from '../actions/book';
// import { fetchFavoriteRecipes } from '../actions/recipes';
import { saveAuthData, SUBMIT_LOGIN } from '../actions/user';

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
          console.log(response);
          store.dispatch(saveAuthData(response.data.token));
          // on dispatch une action, pour qu'un middleware aille chercher les livre préférées
          // de l'utilisateur authentifié
          // store.dispatch(fetchFavoriteBooks());
        })
        .catch((error) => {
          // le serveur nous retourne 401 si les identifiants ne sont pas bons
          console.warn(error);
        });
      break;
    default:
  }

  next(action);
};

export default usersMiddleware;
