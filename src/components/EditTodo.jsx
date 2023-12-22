import { useState } from 'react';

const EditTodo = ({ addTodo }) => {
    const [title, setTitle] = useState("");

    const handleChange = (e) => {
        e.preventDefault();
        if(!title) return;
        console.log(title);
        addTodo(title);
        setTitle("");
    }
  return (
    <div className='flex items-center justify-center gap-4'>
        <form className='flex gap-5' onSubmit={handleChange}>
        <input  className='w-full h-10 p-5 text-center' type="text" placeholder='Title of new TODO'  value={title} onChange={(e) => setTitle(e.target.value)}/>
        <button className='bg-[#ccc] text-center w-14 h-10 text-2xl align-middle pb-1 hover:bg-green-500 ease-in-out'>+</button>
        </form>
    </div>
  )
}

export default EditTodo