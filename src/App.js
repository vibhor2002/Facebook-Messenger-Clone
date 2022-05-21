import './App.css';
import React, { useState , useEffect } from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import Message from './Message';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {username: 'vibhu',text: 'hey guys'},
    {username: 'lakshay',text: 'hey there!!'}]);
  const [username, setUsername] = useState(' ');

  // use state = variable in react
  // use effect = run on condition

  useEffect(() => {
   setUsername(prompt('Please enter your name'));
  },[])
  

  const sendMessage = (event) => {
    event.preventDefault();
    // all the logic to send the message goes here
    setMessages([...messages, {username: username, text: input}]);
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
