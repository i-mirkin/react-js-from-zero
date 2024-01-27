import {useState} from 'react'
import './App.css'
import Header from "./components/Header.jsx";
import Item from "./components/Item.jsx";
import Button from "./components/Button.jsx";

function App() {
    const [title, setTitle] = useState('Start Title')
    const [isActive, setIsActive] = useState(false)

    const info = [
        {title: 't0', description: 'd0'},
        {title: 't1', description: 'd1'},
        {title: 't2', description: 'd2'}
    ]
     const handleClick = (num) => {
         setTitle(info[num].title);
         setIsActive(!isActive);
         console.log(isActive)
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
            <Button isActive = {title === 't0'} onClick = {() => handleClick(0)}>0</Button>
            <Button isActive = {title === 't1'}  onClick = {() => handleClick(1)}>1</Button>
            <Button isActive = {title === 't2'}  onClick = {() => handleClick(2)}>2</Button>
            <br/>
            <h2 className='title' style={{color: '#11111'}}>Ex</h2>
            {title}
        </>
    )
}

export default App
