import './App.css';
import React, { useState , useEffect } from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState(' ');

  // use state = variable in react
  // use effect = run on condition

  useEffect(() =>{
    db.collection('messages')
    .orderBy('timestamp','asc')
    .onSnapshot(snapshot => {
       setMessages(snapshot.docs.map(doc => doc.data()))
    })
  }, [])

  useEffect(() => {
   setUsername(prompt('Please enter your name'));
  },[])


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
      <h1>Hello There!!!</h1>
      <h2>Welcome {username}</h2>

      <form>
        <FormControl>
          <InputLabel>Enter a Message...</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)} />
          <Button disabled={!input} variant='contained' color='primary' type='submit' onClick={sendMessage}>Send Message</Button>
        </FormControl>
      </form>

      {/* Messages */}

      {
        messages.map(message => (
            <Message username={username} message={message} />
        ))
      }
    </div>
  );
}

export default App;
