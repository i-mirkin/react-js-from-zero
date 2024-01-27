export default function Button({children}){
    const handleClick = () => {
        console.log('handleClick')
    }
    return <button onClick={handleClick}>{children}</button>
}