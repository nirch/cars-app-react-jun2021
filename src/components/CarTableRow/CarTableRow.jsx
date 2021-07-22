import React from 'react';

function CarTableRow({ car, isHighestCar }) {
    return (
        <tr key={car.id} className={isHighestCar ? "table-danger" : ""}
            onClick={() => console.log(car)}>
            <td>{car.brand}</td>
            <td>{car.model}</td>
            <td>{car.year}</td>
            <td>{car.km}</td>
            <td>{Math.floor(car.kmPerYear())}</td>
        </tr>
    )
}

export default CarTableRow;