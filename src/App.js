import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import AllRoutes from './Routes/AllRoutes';
import Footer from './components/Footer/Footer';
import{auth} from "./firebase"
import { useEffect,useState } from 'react';

function App() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);
  return (
    <div className="App">
      <Navbar name={userName}/>
      <AllRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
