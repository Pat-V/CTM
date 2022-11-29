import React from 'react';
import { useState } from 'react';


export default function App() {
  const [msg, setMsg] = useState('')
  
  const handleClick = async () => {
    const response = await window.fetch('/main')
    const json = await response.json()
    const msg = json.msg
    setMsg(msg)
  }
  
  return (
    <div>
      <header>
        <button onClick={handleClick}>launch the main page</button>
        <p>{msg}</p>
      </header>
    </div>
  );
}
