import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import Layout from './components/Layout/Layout.jsx'
import Contact from './components/Contact/Contact.jsx'
import About from './components/About/About.jsx'
import Github, {githubInfoLoader} from './components/Github/Github.jsx'
import User from './components/User/User.jsx'

// const router = createBrowserRouter([{
//   path: "/",
//   element: <Layout />,
//   children: [
//     {
//       path: "",
//       element: <Home />
//     },
//     {
//       path: "contact",
//       element: <Contact />
//     },
//     {
//       path: "about",
//       element: <About />
//     },
//     {
//       path: "github",
//       element: <Github />
//     }
//   ]
// }]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path="" element={<Home/>}></Route>
      <Route path="contact" element={<Contact/>}></Route>
      <Route path="about" element={<About/>}></Route>
      <Route path="github" loader={githubInfoLoader} element={<Github/>}></Route>
      <Route path="user/:userId" element={<User/>}></Route>
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
