import React from 'react'
import { Navbar, Nav, Form, FormControl, Button, Image, Card } from 'react-bootstrap';

export default function footer() {
    return (
        <Card className="bg-dark text-white">
            <Card.Img src="images/footer.png" alt="Card image" />
            <Card.ImgOverlay>
                <p className="d">&copy;Copyrights by Liviano Rooms</p>
            </Card.ImgOverlay>
        </Card>

    )
}
