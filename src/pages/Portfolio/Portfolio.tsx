import { Outlet, NavLink } from 'react-router-dom'
// import '../P.css'

function Portfolio () {
  return (
    <>
      <h1>Portfolio</h1>
      <nav>
        <NavLink to={"/"}><button className="linkButton">Accueil</button></NavLink>
        <NavLink to={"/portfolio"}><button className="linkButton">Portfolio</button></NavLink>
        <br />
        <NavLink to={"/portfolio/CardUser"}><button>CardUser</button></NavLink>
        <NavLink to={"/portfolio/Calendar"}><button>Calendar</button></NavLink>
        <NavLink to={"/portfolio/ToDoList"}><button>ToDoList</button></NavLink>
      </nav>
      <Outlet />
    </>
  )
}

export default Portfolio