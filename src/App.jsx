import './App.css'
import TitleUpdater from './TitleUpdater'
import Timer from './Timer'
import WindowSize from './WindowSize'
import UserList from './UserList'
import Counter from './Counter'
import LoginForm from './LoginForm';

import SmartLoginForm from './SmartLoginForm'
import { useState } from 'react'
import Count from './Count'

function App() {

  const[count, setcount]=useState(0);
 
  return (
    <div>
      <TitleUpdater/>
      <Timer/>
      <WindowSize/>
      <UserList/>
      <Counter/>
      <LoginForm/>
      <SmartLoginForm/>
      <Count/>
    </div>
  )
}

export default App;
