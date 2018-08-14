const initialState = {
  animals:[],
  animal: '',
  name:'',
  email:'',
  password:''
}

const reducer = (state=initialState,action) => {
  console.log("state",state)
  console.log("actions", action)
  switch(action.type) {
    case 'LOAD_ANIMALS':
      return {
        ...state,
        animals: action.payload.animals
      }
    case 'SELECTED_ANIMAL':
    return {
      ...state,
      animal: action.payload.animal
    }
    default:
      return state
  }

}




export default reducer
