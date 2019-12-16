import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Image } from 'react-bootstrap';

export default function car() {
    return (
        <div>

            <Container>
                <Row>
                    <Col className="t-border">
                    <h2>Kerala</h2>
                    <Image src="images/1.jpg" rounded width="250px" height="200px"/>
                    <p>Kerala is a blessed land of palm-lined beaches, plantation covered hills, thick jungles, enthralling rivers and lakes, vibrant flora and fauna, art forms, fairs and festivals. A trip to Kerala is not complete without cruising on the backwaters that too on a houseboat. Kerala is also famous for Ayurvedic therapies and spices.</p>
                    </Col>

                    
                    <Col className="t-border"> 
                    <h2>PARIS</h2>
                    <Image src="images/disney.jpg" rounded width="250px" height="200px"/>
                    <p>Paris is known as “The City of Lights . This is not only due to its historical enlightenment period, but also the fact that it was one of the first cities in the world to install street lights.</p>
                    </Col>
                    
                    <Col className="t-border"> 
                    <h2>ITALY</h2>
                    <Image src="images/venice-min.jpg" rounded width="250px" height="200px"/>
                    <p>Italy is the 5th most visited country in the world. 62.1 million people visited Italy in 2018 with many heading to tourist hotspots like Rome, Florence, and Pisa.</p>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}
