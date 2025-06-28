import { useState } from 'react';


const Content = () => {
    const [name,setName] = useState('Anson');
    const [count, setCount] = useState(0)
 
    const handleNameChange = () => {
        const names = ["Anson","Saju","George"];
        const int = Math.floor(Math.random()*3);
        setName(names[int]);
    }

    const handleClick = () => {
        setCount(count+1)
        setCount(count+1) 
        // Even if there is a copy it would ony activate once cuz it takes the initial state
        console.log(count)
    }
    const handleClick2 = (name) => {
        console.log(`${name} had clicked`)
    }
    const handleClick3 = (e) => {
        console.log(e.target.innerText)
    }

    return (
        <main>
            <p onDoubleClick={handleClick}> 
                Hello {name}!
            </p>
                <button onClick={handleNameChange}>Change name</button>
                <button onClick={handleClick}>Click it</button>
                {/* <button onClick={() => handleClick2('Anson')}>Click it</button> */}
                {/* Anonymous Function above */}
                <button onClick={(e) => handleClick3(e)}>Click it</button>
 

        </main>
    )
}

export default Content