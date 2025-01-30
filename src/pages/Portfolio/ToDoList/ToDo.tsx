// import "./ToDo.css";
// import { useState } from "react";

//   interface todoProps {
//       title:string;
//       date:Date;
//       checked:boolean;

//     };



// function ToDo({title,date,checked}:todoProps) {

//     if(checked==false){
//     return (
//       <>
//           <li color="red">
//             <input type="checkbox" checked={checked}></input>{title} - {date.toLocaleDateString()} </li> 
//       </>
  
//     )
//     }

//     else{
//         return (
//           <>
//               <li color="green">
//                 <input type="checkbox" checked={checked}></input>{title} - {date.toLocaleDateString()} </li> 
//           </>
      
//         )
//         }

  
//   }
  
//   export default ToDo
  


  import "./ToDo.css";
import { useState } from "react";

  interface todoProps {
      title:string;
      date:Date;
      checked:boolean;
      onChange:()=>void;
      heure:number;
      categorie:string;
    };


function handleClick(title : string) {
  console.log("clicked" + title);
}


function ToDo({title,date,checked, onChange, heure}:todoProps) {
  const [heures, setHeures] = useState(heure);
  


  function handleClickPlus() {
    setHeures(heures + 1); 
  };

  function handleClickMoins () {
    if (heures - 1> 0) {
      setHeures(heures - 1);
    }
    else{
      console.log("pas d'heure négative ?")
    }
  };



        return (
          <>
              <li onClick={() => handleClick(title)} className={checked ? "todo checked" : "ToDo"}>
                <input type="checkbox" checked={checked} onChange={onChange}/>
                  {title} - {date.toLocaleDateString()}

                  <button onClick={handleClickMoins}> - </button>
                  <button onClick={handleClickPlus}> + </button>
                  heures restantes : {heures}
                </li> 
          </>
      
        )

  
  }
  
  export default ToDo
  