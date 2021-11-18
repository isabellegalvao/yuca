import './App.css';
import Header from './Components/Header'
import Home from './Components/Home'
import Services from './Components/Services'
import API from "./services/api"
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [userData, setUserData] = useState({})

  useEffect(() => {
    (async function fetch() {
      try{
        const data = await new API().getUserData()
        setUserData(data)
      }catch(err){
        console.log(err)
      }
    })();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
      <Header user={userData.user}/>
        <Routes>
            <Route path="/" exact element={<Home data={userData}/>} />
            <Route path="/services" exact element={<Services data={userData}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
