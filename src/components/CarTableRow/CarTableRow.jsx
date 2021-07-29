import React from 'react';
import { useState } from 'react';
import { Redirect } from 'react-router-dom';

function CarTableRow({ car, isHighestCar }) {
    const [redirectTo, setRedirectTo] = useState("");

    if (redirectTo) {
        return <Redirect to={redirectTo}/>
    }

    return (
        <tr key={car.id} className={isHighestCar ? "table-danger" : ""}
            onClick={() => setRedirectTo(`/cars/${car.id}`)}>
            <td>{car.brand}</td>
            <td>{car.model}</td>
            <td>{car.year}</td>
            <td>{car.km}</td>
            <td>{Math.floor(car.kmPerYear())}</td>
        </tr>
    )
}

export default CarTableRow;