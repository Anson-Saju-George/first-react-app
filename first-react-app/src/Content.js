import { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';


const Content = () => {
    const [items,setItems] = useState([
        {
            id: 1,
            checked: true,
            item: "One half pound bag of Cocoa Covered Almonds Unsalted"
        },
        {
            id: 2,
            checked: false,
            item: "Pack of mixed nuts"
        },
        {
            id: 3,
            checked: false,
            item: "Dried fruit pouch"
        }
    ]);

    const handleCheck = (id) => {
        // const listItems = [...items]
        const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
        setItems(listItems);
        localStorage.setItem('shoppinglist',JSON.stringify(listItems));
        // console.log(`key: ${id}`);
    }

    const handleDelete = (id) => {
        const listItems = items.filter((item) => item.id != id);
        // console.log(id);
    }
 
    

    return (
        <main>
            <ul>
                {items.map((item) => (
                    <li className='item' key={item.id}>
                        <input 
                            type='checkbox' 
                            onChange={() => handleCheck(item.id)}
                            checked={item.checked}/>
                        <label
                            style={(item.checked)?{textDecoration: 'line-through'} : null}
                            onDoubleClick={() => handleCheck(item.id)}
                        >{item.item}</label>
                        <FaTrashAlt 
                            onClick={() => handleDelete(item.id)}
                            role='button' 
                            tabIndex='0' />
                    </li>
                ))}
            </ul>
        </main>
    )
}

export default Content