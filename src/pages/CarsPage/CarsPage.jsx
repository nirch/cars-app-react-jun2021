import React, { useState } from 'react';
import CarTableRow from '../../components/CarTableRow/CarTableRow';
import CarModel from '../../model/CarModel';

function CarsPage() {
    const [cars, setCars] = useState([
        new CarModel("22-322-22", "Toyota", "Yaris", 2002, 250000),
        new CarModel("21-322-22", "Toyota", "Corola", 2015, 115000),
        new CarModel("24-322-22", "Hyundai", "i30", 2010, 180000),
    ]);

    // finding the car with the highest km per year
    let highestCar = cars[0];
    for (const car of cars) {
        if (car.kmPerYear() > highestCar.kmPerYear()) {
            highestCar = car;
        }
    }

    const carTableRows = cars.map(car =>
        <CarTableRow car={car} isHighestCar={car === highestCar}/>
    );

    function addCar() {
        const newCar = new CarModel("23-291-22", "Subaru", "Forster", 2018, 100000);
        setCars(cars.concat(newCar));
    }
    return (
        <div>
            <table className="table">
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
            </table>
            <button className="btn btn-primary" onClick={addCar}>Add Car</button>
        </div>
    );
}

export default CarsPage;