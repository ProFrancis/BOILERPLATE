import { useState, useEffect } from "react";
import axios from "axios";

import { io } from "socket.io-client";

// Initialisation de la connexion WebSocket coté back-end
const socket = io("http://localhost:8080");

function App() {
  const [tweet, setTweet] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [content, setContent] = useState({
    name: 'Francis',
    content: ''
  });

  useEffect(() => {
    const fetchTweet = async () => {
      try {
        const { data } = await axios.get(`http://localhost:8080/api/tweet`);
        setTweet(data.tweet);
      } catch (error) {
        console.log(
          "Erreur lors de la récupération des tweets : ",
          error.message
        );
      }
    };
    fetchTweet();


    //Écoutez l'évenement "neetTweet" WebSocket pour mettre à jour la list des tweets
    socket.on('newTweet', (newTweet) => {
      setTweet((prevTweets) => [...prevTweets, newTweet])
    })

    // nettoyage des écouteurs d'événement lors du demontage du composant
    return () => {
      socket.off('newTweet')
    }
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(content);
    setContent((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true)
    try{
      await axios.post(`http://localhost:8080/api/tweet/post`, content )
    }catch(error) {
      console.log("Error posting tweet : ", error);
    }
    setIsLoading(false)
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="content"
          placeholder="tweet"
          onChange={handleChange}
        />
        <button disabled={isLoading}>Tweeter</button>
      </form>
      {tweet && tweet.map((item, index) => (
        <p key={index}>
          {item.name} - {item.content}
        </p>
      ))}
    </>
  );
}

export default App;
