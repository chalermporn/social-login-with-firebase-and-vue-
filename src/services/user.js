import firebase from 'firebase'

const get = (id) => {
  return firebase.database()
  .ref(`user/${id}`)
  .once('value')
  .then((snapshot) => {
    return snapshot.val()
  })
}

const set = (id, data) => {
  return firebase.database()
  .ref(`user/${id}`)
  .set(data)
}

export default {
  get,
  set
}
