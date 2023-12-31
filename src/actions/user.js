export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";
// change of one of the fields of the settings form
export const CHANGE_SETTINGS_FIELD = "CHANGE_SETTINGS_FIELD";
// send authentication info to API
export const SUBMIT_LOGIN = "SUBMIT_LOGIN";
// Save authentication info in state
export const SAVE_AUTH_DATA = "SAVE_AUTH_DATA";
export const SUBMIT_LOGOUT = "SUBMIT_LOGOUT";
export const FETCH_USER_INFO = "FETCH_USER_INFO";
export const SAVE_USER_INFO = "SAVE_USER_INFO";
export const SET_TOKEN_IN_STORAGE = "SET_TOKEN_IN_STORAGE";
// Create user
export const CREATE_USER_IN_API = "CREATE_USER_IN_API";
export const DELETE_USER_IN_API = "DELETE_USER_IN_API";
export const UPDATE_USER_IN_API = "UPDATE_USER_IN_API";
export const UPDATE_USER_PASSWORD_IN_API = "UPDATE_USER_PASSWORD_IN_API";
export const UPDATE_USER_AVATAR_IN_API = "UPDATE_USER_AVATAR_IN_API";
export const REMOVE_INPUT = "REMOVE_INPUT";
export const UPLOAD_FILE = "UPLOAD_FILE";
export const PREVIEW_AVATAR = "PREVIEW_AVATAR";

// delete user in state and local storage
export const DELETE_USER = "DELETE_USER";
// update user in state and local storage
export const UPDATE_USER = "UPDATE_USER";
// Errors
export const UPDATE_FORM_ERRORS = "UPDATE_FORM_ERRORS";
// Validity of passWord for log up
export const UPDATE_PASSWORD = "UPDATE_PASSWORD";
export const UPDATE_PASSWORD_VALIDITY = "UPDATE_PASSWORD_VALIDITY";
export const TOGGLE_PASSWORD_VISIBILITY = "TOGGLE_PASSWORD_VISIBILITY";
export const openModal = () => ({
  type: OPEN_MODAL,
});
export const closeModal = () => ({
  type: CLOSE_MODAL,
});
export const changeSettingsField = (newValue, identifier) => ({
  type: CHANGE_SETTINGS_FIELD,
  newValue: newValue,
  identifier: identifier,
});
export const submitLogin = () => ({
  type: SUBMIT_LOGIN,
});
export const saveAuthData = (token) => ({
  type: SAVE_AUTH_DATA,
  token: token,
});

export const submitLogout = () => ({
  type: SUBMIT_LOGOUT,
});
export const fetchUserInfo = () => ({
  type: FETCH_USER_INFO,
});
export const SaveUserInfo = (alias, avatar, email) => ({
  type: SAVE_USER_INFO,
  alias: alias,
  avatar: avatar,
  email: email,
});

export const setTokenInStorage = (storage) => ({
  type: SET_TOKEN_IN_STORAGE,
  storage: storage,
});

export const createUserInApi = () => ({
  type: CREATE_USER_IN_API,
});

export const updateUserInApi = () => ({
  type: UPDATE_USER_IN_API,
});
export const updateUserPasswordInApi = () => ({
  type: UPDATE_USER_PASSWORD_IN_API,
});
export const updateUserAvatardInApi = () => ({
  type: UPDATE_USER_AVATAR_IN_API,
});

export const deleteUserInApi = () => ({
  type: DELETE_USER_IN_API,
});

export const deleteUser = () => ({
  type: DELETE_USER,
});
export const removeInput = () => ({
  type: REMOVE_INPUT,
});

export const updateUser = (alias, avatar, email, password, passwordCheck) => ({
  type: UPDATE_USER,
  alias: alias,
  avatar: avatar,
  email: email,
  password: password,
  passwordCheck: passwordCheck,
});

export const updateFormErrors = (errors) => ({
  type: "UPDATE_FORM_ERRORS",
  errors: errors,
});
export const uploadFile = (file) => ({
  type: "UPLOAD_FILE",
  file: file,
});
export const previewAvatar = (fileUrl) => ({
  type: "PREVIEW_AVATAR",
  fileUrl: fileUrl,
});

export const updatePassword = (password) => ({
  type: UPDATE_PASSWORD,
  password: password,
});

export const updatePasswordValidity = (validity) => ({
  type: UPDATE_PASSWORD_VALIDITY,
  validity: validity,
});
export const togglePasswordVisibility = () => ({
  type: TOGGLE_PASSWORD_VISIBILITY,
});
