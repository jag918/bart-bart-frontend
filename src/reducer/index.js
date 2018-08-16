const initialState = {
  animals:[],
  animal: '',
  user: {
    id:'2',
    name:'derek',
    email:'',
    password:''
  },
  favorite:""
}

const reducer = (state=initialState,action) => {
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
    case 'SEARCH_ANIMAL':
      return {
        ...state,
        animals: action.payload.animals
      }
    case 'FAVORITE_ANIMAL':
      return {
        ...state,
        favorite: action.payload.animal
      }
    default:
      return state
  }

}



export default reducer
