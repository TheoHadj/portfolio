import { createBrowserRouter, RouterProvider, Outlet, NavLink } from 'react-router-dom'
import './App.css'
import Accueil from './pages/Acceuil'
import Portfolio from './pages/Portfolio/Portfolio'
import Calendar from './pages/Portfolio/Calendar/Calendar'
import ToDoList from './pages/Portfolio/ToDoList/ToDoList'
import CardUser from './pages/Portfolio/CardUser/CardUser'
import PageError from './pages/PageError'
import Contact from './pages/Contact'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Accueil />
      }
    ],
    errorElement: <PageError />
  },
  {
    path: "/portfolio",
    element: <Portfolio />,
    children: [
      {
        path: "/portfolio/carduser",
        element: <CardUser  />
      },
      {
        path: "/portfolio/calendar",
        element: <Calendar />
      },
      {
        path: "/portfolio/todolist",
        element: <ToDoList />
      }
    ]
  },
  {
    path: "/contact",
    element: <Contact />
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

function Root() {
  return (
    <>
      <header>
        <h1>Mon Portfolio</h1>
        <nav>
          <NavLink to={"/"}><button className="linkButton">Accueil</button></NavLink>
          <NavLink to={"/portfolio"}><button className="linkButton">Portfolio</button></NavLink>
          <NavLink to={"/contact"}><button className="linkButton">Contact</button></NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  )
}
export default App
