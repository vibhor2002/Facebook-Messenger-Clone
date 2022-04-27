import './App.css';
import React , { useState } from 'react';

function App() {
  const [input, setInput] = useState('');
  
  console.log(input);

  return (
    <div className="App">
      <h1>Hello There!!!</h1>


      <input value={input} onChange={event => setInput(event.target.value)}/>
      <button>Send Message</button>
      {/* Input Field */}
      {/* Button */}

      {/* Messages */}
    </div>
  );
}

export default App;
