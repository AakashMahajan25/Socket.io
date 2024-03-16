import io from "socket.io-client";


import React, { useEffect, useState } from "react";

const socket = io('http://localhost:3000')

const App = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  
  useEffect(()=>{
    socket.on('message', (msg)=>{
      setMessages((prevMessages)=>[...prevMessages, msg])
    })
  }, []);

  const handleSend = () => {
    if (input.trim() !== "") {
      socket.emit('message', input);
      console.log(input);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSend}>Send</button>
      <div>
      <h2>Chat</h2>
      <ul>
        {messages.map((msg, index) => (
          <li key={index}>{msg}</li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default App;
