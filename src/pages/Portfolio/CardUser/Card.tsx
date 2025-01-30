
import "./Card.css";

interface CardProps {
  pseudo: string;
  email: string;
  description: string;
}

function Card({ pseudo, email, description }: CardProps) {
  let rng = Math.floor(Math.random() * 1000)
  return (
    <>
        <article className="Card">
            <img src={`https://picsum.photos/200?random=${rng}`}></img>
            <h2>{pseudo}</h2>
            <h3>{email}</h3>
            <p>{description}</p>
        </article>
    </>
  )
}

export default Card

