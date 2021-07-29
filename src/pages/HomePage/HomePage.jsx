import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div>
            <Container>
                <h1 className="display-1">Cars App</h1>
                <p>Amazing car app!!</p>
                <Link to="/cars" className="btn btn-primary">Enter</Link>
            </Container>
        </div>
    );
}

export default HomePage;