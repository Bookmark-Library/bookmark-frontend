import axios from 'axios';

const recipesMiddleware = (store) => (next) => (action) => {
  // console.log('authMiddleware, on a reçu une action', action);

  switch (action.type) {

  }

  next(action);
};

export default recipesMiddleware;
