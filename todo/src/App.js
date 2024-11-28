import './App.css';
import { useState } from 'react';

function App() {
  const[list, setList] = useState([]);
  const [value, setValue] = useState("");

  function handleChange(e){
    console.log({e})
    setValue(e.target.value);
  }
  function handleSubmit(e){
    e.preventDefault()
    if(value.trim()){
      setList([...list, value])
    }
    setValue("")
  }
  function handleDelete(index){
    console.log({index})
    let tempArr = []
    for(let i=0; i < list.length; i++){
      if (index !==i){
        tempArr.push(list[i]);
      }
    }
    setList(tempArr)
  }
  console.log({list})
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input value = {value} onChange={handleChange}/>
        <button type="submit">Add</button>
      </form>
      <ul>{
        list.map((item, index)=>{
          return <li key={index}>
            <span>{item}</span>
            <button onClick={()=>handleDelete(index)}>Delete</button>
          </li>
        
        })}
      </ul>
    </div>
  );
}

export default App;
