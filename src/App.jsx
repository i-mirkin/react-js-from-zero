import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./components/Header.jsx";
import Item from "./components/Item.jsx";
import Button from "./components/Button.jsx";

function App() {
  const [count, setCount] = useState(0)

    const info = [
        {title: 't1', description: 'd1'},
        {title: 't2', description: 'd2'},
        {title: 't3', description: 'd3'}
    ]

  return (
    <>
      <div>
        <h1>HELLO</h1>
      </div>
        <Header></Header>
        <Item {...info[0]}></Item>
        <Button>Название кнопки</Button>
    </>
  )
}

export default App
