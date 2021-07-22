import React, { useState } from 'react';
import CarModel from '../../model/CarModel';

function CarsPage() {
    const [cars, setCars] = useState([
        new CarModel
    ])

    return (
        <div>
            Cars Page
        </div>
    );
}

export default CarsPage;