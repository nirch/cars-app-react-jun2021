import React from 'react';
import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

function CarDetailsPage({cars}) {
    const {id} = useParams();
    const car = cars.find(car => car.id === id);

    // With a server side instead of sending all cars to this comp 
    // We can read the car details from the server
    // useEffect(() => {
    //     axios.get("/cars/${id}").then(car => {
    //         setCar(car);
    //     })
    // }, []);


    return (
        <Container>
            {
                car ? 
                <>
                    <p>Brand: {car.brand}</p>
                    <p>Model: {car.model}</p>
                    <p>KM: {car.km}</p>
                    <p>Year: {car.year}</p>
                    <p>KM per Year: {car.kmPerYear()}</p>
                </> : <p>Car not found</p>
            }
        </Container>
    );
}

export default CarDetailsPage;