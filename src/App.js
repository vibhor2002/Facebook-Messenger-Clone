import './App.css';
import React, { useState } from 'react';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  console.log(input);
  console.log(messages);

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
        <input value={input} onChange={event => setInput(event.target.value)} />
        <button type='submit' onClick={sendMessage}>Send Message</button>
      </form>

      {/* Messages */}

      {
        messages.map(message => (
          <p>{message}</p>
        ))
      }
    </div>
  );
}

export default App;
