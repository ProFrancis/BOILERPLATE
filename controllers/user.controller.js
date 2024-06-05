import User from '../models/user';

// Exemple
export const get = async (req, res) => {
  try{
    const response = await User.post()
    res.status(200).json({user: response})
  }catch(e){
    console.log(e.message);
  }
}

export const post = async (req, res) => {
  try{
    //
  }catch(e){
    console.log(e.message);
  }
}

export const put = async (req, res) => {
  try{
    //
  }catch(e){
    console.log(e.message);
  }
}

export const delet = async (req, res) => {
  try{
    //
  }catch(e){
    console.log(e.message);
  }
}