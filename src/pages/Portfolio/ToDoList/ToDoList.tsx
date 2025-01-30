import './ToDoList.css'
import Form from './Form';
import ToDo from './ToDo';
import { useState } from 'react';


function ToDoList() {
  const DATE = new Date();
  const categories = ["Leçon","TP"]
  const [LeconTrue,setLeconTrue] = useState(false);
  const [TPTrue,setTPTrue] = useState(false);

  // const tabState=[LeconTrue,TPTrue];
  // const setTabState=[setLeconTrue,setTPTrue];


  const [todos,setTodos] = useState( [
    {
      title: "Learn React",
      date: new Date(2025, 1, 27),
      checked:true,
      heure: 1,
      categorie: categories[0]
      
    },
    {
      title: "TP 1 React",
      date: new Date(2025, 1, 27),
      checked:false,
      heure: 0.5,
      categorie: categories[1]
  
    },
    {
      title: "TP 2 React",
      date: new Date(2025, 1, 27),
      checked:false,
      heure: 2,
      categorie: categories[1]
  
    },
        {
      title: "TP 3 React",
      date: new Date(2026, 1, 27),
      checked:false,
      heure: 3,
      categorie: categories[1]
    },
  ]);



  const TODOLIST = todos.filter((element) => {
    if ((element.categorie === "Leçon" && LeconTrue) || (element.categorie === "TP" && TPTrue)) {
      return false;
    }
    return true;
  });




  
  function handleCheckboxChange(index: number) {
    setTodos((prevTodos) =>
      prevTodos.map((todo, i) =>
        i === index ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
      event.preventDefault();
      const INPUTS = document.querySelectorAll<HTMLInputElement>('input[type="text"]');
      console.log(INPUTS);
      // for(let input in INPUTS){
      //   console.log(input);
      //   // let tmp = JSON.parse(input);
      //   // console.log(tmp.values);
        
      // }

      INPUTS.forEach(input => {
        console.log(input.value);
      })


      
      console.log("submit");

    }



  return (
    <>
      <article className="ToDoList">
        <h1>TODO List</h1>
        <h2>{DATE.toLocaleString()}</h2>
        <ul>
          <section>
            {/* {categories.map((cat, index) => (
              <div>
                <input type="checkbox" key={index} value={cat} checked={tabState[index]} onChange={() => setTabState[index](!tabState[index])}/> 
                  {cat}
              </div>
            ))} */}
                <input type="checkbox" value="Leçon" checked={LeconTrue} onChange={() => setLeconTrue(!LeconTrue)}/> Leçon
                <input type="checkbox" value="TP" checked={TPTrue} onChange={() => setTPTrue(!TPTrue)}/> TP


          </section>

        {TODOLIST.map((todo, index) => (
          <ToDo
          key={index}
          title={todo.title}
          date={todo.date}
          checked={todo.checked}
          onChange={() => handleCheckboxChange(index)}
          heure={todo.heure}
          categorie={todo.categorie}
          />
        ))}    
        </ul>
        <Form onSubmit={(event) => handleSubmit(event)} />
      </article>
    
    
    </>


  )
}




export default ToDoList
