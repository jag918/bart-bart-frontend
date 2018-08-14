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

export function newUser(username, password, email){
  const options = {
    method: "POST",
    headers: {'content-type': "application/json"},
    body: JSON.stringify({user: { username, password, email }})
  }
  return (dispatch) => {
    fetch( 'http://localhost:3001/api/v1/users', options).then(r => r.json())}
}