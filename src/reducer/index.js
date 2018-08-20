const initialState = {
  animals:[],
  animal: '',
  user: {
    id:'2',
    name:'derek',
    email:'',
    password:''
  },
  favorite:[],
  searchAnimals:[]
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
        favorite: [...state.favorite,action.payload.animal],
        user: action.payload.user
      }
    case 'GET_USER':
      return {
        ...state,
        user: action.payload.user,
        favorite:action.payload.favorite
      }
    case 'SEARCHED_ANIMALS':
      return {
        ...state,
        searchAnimals:[...action.payload.searchAnimals]
      }
    default:
      return state
  }

}
export default reducer
