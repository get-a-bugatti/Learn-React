import { useEffect, useState } from "react"
import {Header, Footer} from "./components"
import authService from "./appwrite/auth";
import {login, logout} from "./store/authSlice"
import {useDispatch} from "react-redux";
import {Outlet} from "react-router-dom"

function App() {

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    authService.getCurrentUser()
      .then(userData => {
        console.log("userData :", userData);
        if (userData) {
          dispatch(login({userData}))
        } else {
          dispatch(logout())
        }
      })
      .catch(err => {
        dispatch(logout());
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      })
  }, [])

  return !loading ? (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  ) : (
    <p>Loading...</p>
  );
}

export default App
