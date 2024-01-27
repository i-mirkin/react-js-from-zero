import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./components/Header.jsx";
import Item from "./components/Item.jsx";
import Button from "./components/Button.jsx";

function App() {
    const [title, setTitle] = useState('Start Title')


    const info = [
        {title: 't1', description: 'd1'},
        {title: 't2', description: 'd2'},
        {title: 't3', description: 'd3'}
    ]
     const handleClick = (num) => {
         setTitle(info[num].title)
         console.log(title)
     }

    // function handleClick(num) {
    //     setTitle(info[num].title)
    // } 123
    return (
        <>
            <div>
                <h1>HELLO</h1>
            </div>
            <Header></Header>
            <Item {...info[0]}></Item>
            <Button onClick = {() => handleClick(0)}>0</Button>
            <Button onClick = {() => handleClick(1)}>1</Button>
            <Button onClick = {() => handleClick(2)}>2</Button>
            <br/>
            {title}
        </>
    )
}

export default App
