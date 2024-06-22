// import { legacy_createStore as createStore } from 'redux'

// const initialState = {
//   sidebarShow: true,
//   theme: 'light',
// }

// const changeState = (state = initialState, { type, ...rest }) => {
//   switch (type) {
//     case 'set':
//       return { ...state, ...rest }
//     default:
//       return state
//   }
// }

// const store = createStore(changeState)
// export default store
import { configureStore } from '@reduxjs/toolkit'
import departementsReducer from "./features/DepartementSlice"

// Définissez l'état initial et le réducteur pour gérer les changements d'état
const initialState = {
  sidebarShow: true,
  theme: 'light',
};

const changeStateReducer = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case 'set':
      return { ...state, ...rest };
    default:
      return state;
  }
};

// Configurez le store avec les réducteurs
const store = configureStore({
  reducer: {
    changeState: changeStateReducer,
    storedepartements: departementsReducer,
  },
});

export default store;
