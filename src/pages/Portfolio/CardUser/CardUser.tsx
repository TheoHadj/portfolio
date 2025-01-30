
import './CardUser.css'
import Card from './Card'

function CardUser() {

  const users = [
    {
      pseudo: "JohnDoe",
      email: "johndoe@example.com",
      description: "Amateur de technologies et développeur passionné.",
    },
    {
      pseudo: "JaneSmith",
      email: "janesmith@example.com",
      description: "Photographe et voyageuse, j'adore explorer de nouveaux horizons.",
    },
    {
      pseudo: "AlexBrown",
      email: "alexbrown@example.com",
      description: "Designer graphique et amateur de café.",
    },
    {
      pseudo: "EmilyWhite",
      email: "emilywhite@example.com",
      description: "Passionnée par la lecture et l'écriture.",
    },
  ];


  if (users.length === 0) {

    return (
      <>
        <h1> Aucun utilisateur </h1>
      </>
  )
} else {

  return (      
    <>
    <h1> Liste des utilisateurs </h1>
    {users.map((user, index) => (
      <Card
      key={index}
      pseudo={user.pseudo}
      email={user.email}
      description={user.description}
      />
    ))}    
  </>
)


}

}

export default CardUser
