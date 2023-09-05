# Upload profil user image with REACT - REDUCER - MIDDLEWARE


## ACTIONS

```JS

export const UPLOAD_FILE = 'UPLOAD_FILE';
export const UPDATE_USER_AVATAR_IN_API = 'UPDATE_USER_AVATAR_IN_API';
export const UPDATE_USER = 'UPDATE_USER';

export const uploadFile = (file) => ({
  type: 'UPLOAD_FILE',
  file: file,
});
export const updateUserAvatardInApi = () => ({
  type: UPDATE_USER_AVATAR_IN_API,
});
export const updateUser = (alias, avatar, email, password, passwordCheck) => ({
  type: UPDATE_USER,
  alias: alias,
  avatar: avatar,
  email: email,
  password: password,
  passwordCheck: passwordCheck,
});


```

## REDUCER

```JS

export const initialState = {
  file: '',
  avatar: '',
  
};


const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case UPLOAD_FILE:
      return {
        ...state,
        file: action.file,
      };
      case UPDATE_USER:
      return {
        ...state,
        alias: action.alias,
        avatar: action.avatar,
        email: action.email,
        password: action.password,
        passwordCheck: action.passwordCheck,
      };
        
    default:
      return state;
  }
};

```

## MIDDLEWARE

```JS

const usersMiddleware = (store) => (next) => (action) => {
     switch (action.type) {
        case UPDATE_USER_AVATAR_IN_API:
      {
        console.log(store.getState().user.file);
        const formData = new FormData();
        formData.append('file', store.getState().user.file);
        formData.append('name', store.getState().user.file.name);
        axios.post(
          // URL
          'http://votre url', formData,

          {
            headers: {
              'content-type': 'multipart/form-data',
              Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
          },
        )
          .then((response) => {
            store.dispatch(updateUser());
          })
          .catch((error) => {
            console.log(error);
          });
      }
      break;
      case UPDATE_USER_IN_API:
      axios.put(
        'http://votre url',
        {
          alias: store.getState().user.alias,
          email: store.getState().user.email,
          avatar: store.getState().user.avatar,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        },
      )
        .then((response) => {
          toast.success('Votre profil a bien été mis à jour');
          store.dispatch(fetchUserInfo());
          store.dispatch(updateUser());
        })
        .catch((error) => {
          console.log(error);
          toast.warning('Une erreur c\'est produite');
        });
      break;
    default:
  }

  next(action);
};

```

## VUE

```JS

const handleChange = (e) => {
    const selectedFile = e.target.files[0];
    // console.log(selectedFile);
    dispatch(uploadFile(selectedFile));
  };
  const url = 'http://votre url';
  const image = '/chemin dossier du Back';
  const avatar = useSelector((state) => state.user.avatar);


<input className="form-control form-control-sm" name="avatar" id="name" type="file" onChange={(e) => handleChange(e)} />

<img src={`${url}${image}/${avatar}`} className="img-thumbnail img-fluid mx-auto d-block" alt="..." />

```
