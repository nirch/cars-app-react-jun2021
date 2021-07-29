import React from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import CarTableRow from '../../components/CarTableRow/CarTableRow';
import CarModel from '../../model/CarModel';


function CarsPage({cars, onAddCar}) {
    

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
        onAddCar(newCar);
    }
    return (
        <Container>
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
        </Container>
    );
}

export default CarsPage;