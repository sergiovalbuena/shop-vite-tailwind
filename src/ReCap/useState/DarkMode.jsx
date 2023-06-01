import {useState, useEffect} from 'react'

export const DarkMode = () => {
    const [darkMode, setDarkMode] = useState(false);

    const handleClick = () => {
        setDarkMode(!darkMode);
    }

  return (
    <>
    <h1>DarkMode</h1>
    <button type='button' onClick={handleClick}>{darkMode ? 'Dark Mode' : 'Light Mode'}</button>
    </>
  )
}


export const CounterButton = () => {
  const [count, setCount] = useState(0);

  //update Title Page
  useEffect(()=>{
    document.title = `You clicked ${count} times`
  }, [count])

  return(
    <>
    <Button onClick={() => setCount(count + 1)}>Add</Button>
    <Button onClick={() => setCount(count - 1)}>Subtract</Button>
    </>
  )
}