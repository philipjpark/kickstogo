import './App.css';
import React, { useState, useEffect } from 'react';
import { useRoutes } from 'react-router-dom'
import { Link } from 'react-router-dom'
import ReadSneakers from './pages/ReadSneakers'
import SneakerDetails from './pages/SneakerDetails'
import CreateComment from './pages/CreateComment'


const App = () => {
  
  const [sneakers, setSneakers] = useState([]);

  useEffect(() => {
    const fetchSneakers = async () => {
      const response = await fetch('/api/sneakers')
      const data = await response.json()
      setSneakers(data)
    }
  
    fetchSneakers()
  }, []);

  // Sets up routes
  let element = useRoutes([
    {
      path: "/",
      element:<ReadSneakers data={sneakers}/>
    },
    {
      path: "/sneaker/get/:id",
      element:<SneakerDetails data={sneakers}/>
    },
    {
      path:"/comment/create/:sneaker_id",
      element: <CreateComment />
    }
  ]);

  
  return ( 

    <div className="App">

      <div className="header">

        <h1>👟 Kicks To Go</h1>
        <Link to="/"><button className="headerBtn">Sneakers</button></Link>
        <Link to="/order"><button className="headerBtn">Order</button></Link>
      </div>
        {element}
    </div>

  );
}

export default App;

