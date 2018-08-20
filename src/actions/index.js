export const getAnimals = () => {
  return (dispatch) => {
    fetch('http://localhost:3001/api/v1/animals')
    .then(r => r.json())
    .then(result => {
      dispatch({
        type: 'LOAD_ANIMALS',
        payload: {
          animals: result
        }
      })
    })
  }
}

export const selectedAnimal = (animal) => {
  return {
    type: 'SELECTED_ANIMAL',
    payload: {
      animal
    }
  }
}
export const getSearchAnimals = (searched,animals) => {
  console.log('searched animals',animals)
  console.log('searched animals search',searched)
  const searchAnimals = animals.filter(animal => animal.name.includes(searched) || animal.breed.includes(searched) )
  console.log('searched animals result',searchAnimals)
  return {
    type: 'SEARCHED_ANIMALS',
    payload: {
      searchAnimals
    }
  }
}

export const favoriteAnimal = (animal, user) => {
  console.log('animal', animal)
  console.log('user', user)
  return (dispatch) => {
    const url = 'http://localhost:3001/api/v1/userfavorites'
    const options = {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({animal_id:animal.id, user_id:user.id})
    }
    fetch(url, options)
    .then( r => r.json())
    .then (r => {
      dispatch({
        type: 'FAVORITE_ANIMAL',
        payload: {
          animal,
          user
        }
      })
    })
  }
}
export const getUser = (user_id) => {
  return (dispatch) => {
    fetch(`http://localhost:3001/api/v1/users/${user_id}`)
    .then(r=>r.json())
    .then(r=> {
      console.log(r)
      dispatch({
        type: 'GET_USER',
        payload: {
          "user":r.user,
          "favorite":r.favorites
        }
      })
    })
  }
}
export function newUser(username, email, password){
  const options = {
    method: "POST",
    headers: {'content-type': "application/json"},
    body: JSON.stringify({user: {username,email,password }})
  }
  return (dispatch) => {
    fetch( 'http://localhost:3001/api/v1/users', options).then(r => r.json())}
}

export function existingUser(username,password,email) {
  const options = {
    method: "POST",
    headers: {'content-type': "application/json"},
    body: JSON.stringify({user: { username, password, email }})
  }
  return (dispatch) => {
    fetch( 'http://localhost:3001/api/v1/signin', options).then(r => r.json())}
}
