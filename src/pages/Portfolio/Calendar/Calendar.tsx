import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './Calendar.css'
import Day from './Day';
import FormCalendar from './FormCalendar';


const MONTH = [
  "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
  "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
];

const DAY = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];

const DAY_LETTER = DAY.map((day) => day[0]);

const ROW : any[] = [];
for (let i = 1; i <= 31; i++) { // à changer pour les autres mosi 
  ROW.push(<Day key={i} jour={DAY_LETTER[i]} className="backgroundOrange" />);
}





const EVENT_LIST = Array(31).fill({ confirmed: false });

function Calendar() {

  const [events, setEvents] = useState<{ nom: string; heure: string; lieu: string; index: number; confirmed: boolean }[]>([]);
  const [eventList, setEventList] = useState(EVENT_LIST);






  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    
    // console.log(event.currentTarget);
    console.log("AJOUT");

    const formData = new FormData(event.currentTarget);

    const eventName = formData.get("eventName") as string;
    const eventTime = formData.get("eventTime") as string;
    const eventLocation = formData.get("eventLocation") as string;


    // console.log("Nom :", eventName);
    // console.log("Horaire :", eventTime);
    // console.log("Lieu :",  eventLocation);


   if (!eventName || !eventTime || !eventLocation) {
    alert("Veuillez remplir tous les champs !");
    return;
  }

  const DATE = [...document.querySelectorAll(".days div")];

  let selected: number | null = null;

  DATE.forEach((element, index) => {
    if (element.classList.contains("selected")) {
      selected = index;
    }
  });

  if (selected === null) {
    alert("Veuillez sélectionner une date !");
    return;
  }


  const NEW_EVENEMENT = {
    nom: eventName,
    heure: eventTime,
    lieu: eventLocation,
    index: selected,
    confirmed: true,
  };

  
  setEvents([...events, NEW_EVENEMENT]);

  const TAB = [...eventList];
  TAB[selected] = NEW_EVENEMENT;

  setEventList(TAB);

  console.log(NEW_EVENEMENT);

  TAB.map((evenement)=>{
    if(evenement.confirmed === true){
    console.log(evenement);
    }
  })

  }








  function handleClick(event: React.MouseEvent<HTMLElement>) {
    const selectedElements = document.getElementsByClassName("selected");

    if (selectedElements.length > 0) {
      for (let elem of selectedElements) {
        if (elem !== event.target) {
          elem.classList.remove("selected");
        }
      }
    }

    (event.target as HTMLElement).classList.toggle("selected");
    // (event.target as HTMLElement).style.backgroundColor = "orange"; // à modifier pour reset la couleur quand on clique sur un autre jour nvm gérer dans le css 
  }




  

  const ROW = [];
  for (let i = 1; i <= 31; i++) { //fgestion des mois à - de 31 
    ROW.push(<Day key={i} jour={i.toString()} className="backgroundOrange" onClick={handleClick} />);
  }



  return (
      
    <article className="card">
        <FormCalendar onSubmit={handleSubmit} />



      <Day jour={MONTH[9]} className="month" />

      <section className="grid-7">
        {DAY_LETTER.map((letter, index) => (
          <Day key={index} jour={letter} className="day-letter" />
        ))}
      </section>

      <section className="grid-7 days">
        {ROW}
      </section>
    </article>

  );

}

export default Calendar
