/* eslint-disable no-console */
import axios from "axios";
import { toast } from "react-toastify";
import { saveUserBooks } from "../actions/book";
// import { fetchFavoriteRecipes } from '../actions/recipes';
import {
  CREATE_USER_IN_API,
  deleteUser,
  DELETE_USER_IN_API,
  fetchUserInfo,
  FETCH_USER_INFO,
  removeInput,
  saveAuthData,
  SaveUserInfo,
  SUBMIT_LOGIN,
  updateUser,
  UPDATE_USER_AVATAR_IN_API,
  UPDATE_USER_IN_API,
  UPDATE_USER_PASSWORD_IN_API,
} from "../actions/user";

const usersMiddleware = (store) => (next) => (action) => {
  // const url =
  //   "http://gelabalekenny-server.eddi.cloud/projet-02-marque-page-back/public/api/";
  const url = 'http://localhost:8000/api/';

  switch (action.type) {
    case SUBMIT_LOGIN:
      axios
        .post(
          `${url}login_check`,
          // données
          {
            username: store.getState().user.email,
            password: store.getState().user.password,
          }
        )
        .then((response) => {
          // eslint-disable-next-line no-console
          // console.log(response.data);
          store.dispatch(saveAuthData(response.data.token));

          // on ajoute le token dans le localstorage
          localStorage.setItem("token", response.data.token);

          // on dispatch une action, pour qu'un middleware aille chercher les infos
          // de l'utilisateur authentifié
          store.dispatch(fetchUserInfo());
          toast.success("Connexion réussie");
          setTimeout(() => {
            window.location.href = "/bibliotheque";
          }, 1000);
        })
        .catch((error) => {
          // le serveur nous retourne 401 si les identifiants ne sont pas bons
          // eslint-disable-next-line no-console
          if (error.request.status === 401) {
            toast.warning("Identifiants invalides");
          }
          toast.warning("Une erreur est survenue, veuillez réessayer");
          console.warn(error);
        });
      break;
    case FETCH_USER_INFO:
      axios
        .get(
          // URL
          `${url}secure/libraries`,
          // options (notamment les headers)
          {
            headers: {
              // nom du header: valeur
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        )
        .then((response) => {
          // console.log(response.data);
          localStorage.setItem("pseudo", response.data.alias);
          localStorage.setItem(
            "bibliotheque",
            JSON.stringify(response.data.libraries)
          );
          localStorage.setItem("email", response.data.email);
          store.dispatch(
            SaveUserInfo(
              response.data.alias,
              response.data.avatar,
              response.data.email
            )
          );
          store.dispatch(saveUserBooks(response.data.libraries));
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.log(error);
        });
      break;
    case CREATE_USER_IN_API:
      if (Object.keys(store.getState().user.formErrors).length !== 0) {
        return;
      }
      axios
        .post(
          // URL
          `${url}users`,
          // options (notamment les headers)
          {
            alias: store.getState().user.alias,
            email: store.getState().user.emailInscription,
            password: store.getState().user.passwordInscription,
            avatar: store.getState().user.avatar,
          }
        )
        .then((response) => {
          console.log(response.data);
          toast.success(
            "Inscription réussie, veuillez vous connecter avec vos identifiants !"
          );
          toast.success("Rendez-vous sur votre profil pour ajouter un avatar");

          store.dispatch(removeInput());
          setTimeout(() => {
            window.location.href = "/";
          }, 2000);
        })
        .catch((error) => {
          console.log(error);
          toast.warning("Une erreur est survenue, veuillez réessayer");
        });
      break;
    case DELETE_USER_IN_API:
      axios
        .delete(
          // URL
          `${url}secure/users`,
          // options (notamment les headers)
          {
            headers: {
              // nom du header: valeur
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        )
        .then((response) => {
          // console.log(response.data);
          toast.success("Votre profil a bien été supprimé");
          store.dispatch(deleteUser());
        })
        .catch((error) => {
          console.log(error);
          toast.warning("Une erreur est survenue, veuillez réessayer");
        });
      break;
    case UPDATE_USER_IN_API:
      axios
        .put(
          // URL
          `${url}secure/users`,
          // options (notamment les headers)
          {
            alias: store.getState().user.alias,
            email: store.getState().user.email,
            avatar: store.getState().user.avatar,
          },
          {
            headers: {
              // nom du header: valeur
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        )
        .then((response) => {
          // console.log(response.data);
          toast.success("Votre profil a bien été mis à jour");
          store.dispatch(fetchUserInfo());
          store.dispatch(updateUser());
        })
        .catch((error) => {
          console.log(error);
          toast.warning("Une erreur s'est produite");
        });
      break;
    case UPDATE_USER_PASSWORD_IN_API:
      axios
        .put(
          // URL
          `${url}secure/users/password`,
          // options (notamment les headers)
          {
            password: store.getState().user.password,
            password_check: store.getState().user.passwordCheck,
            alias: store.getState().user.alias,
            email: store.getState().user.email,
          },
          {
            headers: {
              // nom du header: valeur
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        )
        .then((response) => {
          // console.log(response.data);
          store.dispatch(updateUser());
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    case UPDATE_USER_AVATAR_IN_API:
      {
        console.log(store.getState().user.file);
        const formData = new FormData();
        formData.append("file", store.getState().user.file);
        formData.append("name", store.getState().user.file.name);
        axios
          .post(
            // URL
            `${url}secure/users/avatar`,
            formData,
            // options (notamment les headers)
            {
              headers: {
                // nom du header: valeur
                "content-type": "multipart/form-data",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            }
          )
          .then((response) => {
            // console.log(response.data);
            store.dispatch(updateUser());
            store.dispatch(fetchUserInfo);
          })
          .catch((error) => {
            console.log(error);
          });
      }
      break;
    default:
  }

  next(action);
};

export default usersMiddleware;
