import './App.css';
import React, { useState } from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import Message from './Message';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  const sendMessage = (event) => {
    event.preventDefault();
    // all the logic to send the message goes here
    setMessages([...messages, input]);
    setInput('');
  }

  return (
    <div className="App">
      <h1>Hello There!!!</h1>

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
            <Message text={message} />
        ))
      }
    </div>
  );
}

export default App;
