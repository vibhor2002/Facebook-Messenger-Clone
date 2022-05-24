// Project Console: https://console.firebase.google.com/project/facebook-messenger-clone-b3543/overview
// Hosting URL: https://facebook-messenger-clone-b3543.web.app


import './App.css';
import React, { useState, useEffect } from 'react';
import { FormControl, Input } from '@material-ui/core';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState(' ');
  
  useEffect(() => {
    setUsername(prompt("Please enter your username"));
  }, []);

  // use state = variable in react
  // use effect = run on condition

  useEffect(() => {
    db.collection('messages')
      .orderBy('timestamp', 'desc')
      .onSnapshot(snapshot => {
        setMessages(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()})))
      })
  }, [])



  const sendMessage = (event) => {
    event.preventDefault();

    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');
  }

  return (
    <div className="App">
      <img
        className="messenger__logo"
        src="https://facebookbrand.com/wp-content/uploads/2020/10/Logo_Messenger_NewBlurple-399x399-1.png?w=120&h=100"
        alt="facebook messenger logo"
      />
      <h1>FACEBOOK MESSENGER </h1>
      <h1>Hang out anytime, anywhere </h1>
      <h2>Welcome {username}</h2>

      <form className='app__form'>
        <FormControl className='app__formControl'>
          <Input className='app__input' placeholder='Enter a message...' value={input} onChange={event => setInput(event.target.value)} />

          <IconButton
            className="app__iconButton"
            disabled={!input}
            variant="contained"
            color="primary "
            type="submit"
            onClick={sendMessage}
          >
            <SendIcon />
          </IconButton>

        </FormControl>
      </form>

      {/* Messages */}
      <FlipMove>
        {
          messages.map(({id, message}) => (
            <Message key={id} username={username} message={message} />
          ))
        }
      </FlipMove>

    </div>
  );
}

export default App;
