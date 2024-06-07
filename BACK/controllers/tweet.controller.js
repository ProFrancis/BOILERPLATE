import Tweet from '../models/tweet.model.js';
import { io } from "../service/socket.js"

// Exemple
export const get = async (req, res) => {
  try{
    const response = await Tweet.find()
    res.status(200).json({tweet: response})
  }catch(e){
    console.log(e.message);
  }
}

export const post = async (req, res) => {
  try{
    console.log(req.body);
    const response = await Tweet.create(req.body)

    //Emet un évenement websocket pour le client
    io.emit('newTweet', response)

    res.status(201).json(response)
  }catch(e){
    console.log(e.message);
  }
}