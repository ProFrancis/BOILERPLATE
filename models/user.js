import db from '../config/db.js'

const User = {}

User.getAll = () => {
  return new Promise ((resolve, reject) => {
    db.query(`SLECT * FROM users`, (err, res) => {
      if(err) return reject(err)
      return resolve(res)
    })
  })
}

User.post = () => {
  // 
}


export default User;