import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Button, Table } from 'react-bootstrap';
import CarTableRow from '../../components/CarTableRow/CarTableRow';
import CarModel from '../../model/CarModel';


function CarsPage() {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        axios.get("cars.json").then(response => {
            setCars(response.data.map(plainCar => new CarModel(plainCar.id, plainCar.brand, plainCar.model, plainCar.year, plainCar.km)));
        });
    }, []);


    // finding the car with the highest km per year
    let highestCar = cars[0];
    for (const car of cars) {
        if (car.kmPerYear() > highestCar.kmPerYear()) {
            highestCar = car;
        }
    }

    const carTableRows = cars.map(car =>
        <CarTableRow key={car.id} car={car} isHighestCar={car === highestCar}/>
    );

    function addCar() {
        const newCar = new CarModel("23-291-22", "Subaru", "Forster", 2018, 100000);
        setCars(cars.concat(newCar));
    }
    return (
        <div>
            <Table>
                <thead>
                    <tr>
                        <th>Brand</th>
                        <th>Model</th>
                        <th>Year</th>
                        <th>KM</th>
                        <th>KM per Year</th>
                    </tr>
                </thead>
                <tbody>
                    {carTableRows}
                </tbody>
            </Table>
            <Button onClick={addCar}>Add Car</Button>
        </div>
    );
}

export default CarsPage;