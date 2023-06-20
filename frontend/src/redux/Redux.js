import { createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'

const initialState = {
  sound: 'On',
}

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SOUND':
      return { ...state, sound: action.sound }
    default:
      return state
  }
}

// actions
const changeSound = (sound) => {
  return {
    type: 'CHANGE_SOUND',
    value: sound
  }
}

// export actions for use
export { changeSound }

// store
const store = createStore(reducer, applyMiddleware(thunkMiddleware))
// export store for use in App.js
export { store }
