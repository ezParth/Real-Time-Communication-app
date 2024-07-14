import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/home';
import socketIO from 'socket.io-client'
const socket = socketIO.connect('http://localhost:3000');

function App(){
  return(
    <div>
      <p>
        Hello World!
      </p>
    </div>
  )
}

export default App