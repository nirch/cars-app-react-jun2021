import axios from 'axios';
import { useEffect, useState } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import CarModel from './model/CarModel';
import CarDetailsPage from './pages/CarDetailsPage/CarDetailsPage';
import CarsPage from './pages/CarsPage/CarsPage';
import HomePage from './pages/HomePage/HomePage';

function App() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios.get("cars.json").then(response => {
      setCars(response.data.map(plainCar => new CarModel(plainCar.id, plainCar.brand, plainCar.model, plainCar.year, plainCar.km)));
    });
  }, []);

  return (
    <HashRouter>
      <Switch>
        <Route exact path="/"><HomePage /></Route>
        <Route exact path="/cars"><CarsPage cars={cars} onAddCar={newCar => setCars(cars.concat(newCar))}/></Route>
        <Route exact path="/cars/:id"><CarDetailsPage cars={cars}/></Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
