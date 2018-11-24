import { CHANGE_TEXT }from 'actions/actions'


const initialState = { text : 'first'}

export default function reducer(state = initialState, action){
  switch (action.type){
    case CHANGE_TEXT:
      return {
        ...state,
         text : action.text 
      }
    default:
      return state
  }
}
