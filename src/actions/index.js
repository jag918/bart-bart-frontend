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
export const getMessage = (user_id) => {
  return (dispatch) => {
    fetch(`http://localhost:3001/api/v1/messages/${user_id}`)
    .then(r=> r.json())
    .then(result => {
      dispatch({
        type: 'LOAD_MESSAGE',
        payload: {
          message:result
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
  const searchAnimals = animals.filter(animal => animal.name.toLowerCase().includes(searched.toLowerCase()) || animal.breed.toLowerCase().includes(searched.toLowerCase()) )
  return {
    type: 'SEARCHED_ANIMALS',
    payload: {
      searchAnimals
    }
  }
}

export const favoriteAnimal = (animal, user) => {
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

export const unfavoriteAnimal = (animal,user) => {
  return (dispatch) => {
    const url = 'http://localhost:3001/api/v1//users/delete_favorite'
    const options = {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }, body: JSON.stringify ({animal_id:animal.id, user_id:user.id})}
      fetch(url,options)
      .then(r=>{
        dispatch({
          type: 'UNFAVORITE_ANIMAL',
          payload: {
            "animal_id":animal.id
          }
        })
        console.log("deleted!")
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
    fetch( 'http://localhost:3001/api/v1/signin', options)
    .then(r => r.json())
    .then(r => {
      dispatch({
        type: "SIGN_IN",
        payload: {
          "user":r.user
        }
      })

    })
  }

}
