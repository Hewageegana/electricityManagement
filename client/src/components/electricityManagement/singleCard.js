import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
export default function singleCard() {
  return (
 
        <div className='container'>
            <div className='row'>
            <div className='col-md-4'>
                    <Card>
            <Card.Img variant="top" src="http://res.cloudinary.com/padfoot/image/upload/v1648144225/ITPM/room/reonbsxmmxhkhirygjhb.webp" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Book Now</Button>
            </Card.Body>
            </Card>
            </div>
            <div className='col-md-4'>
            <Card>
            <Card.Img variant="top" src="http://res.cloudinary.com/padfoot/image/upload/v1648144225/ITPM/room/reonbsxmmxhkhirygjhb.webp" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Book Now</Button>
            </Card.Body>
            </Card>
           </div>
           <div className='col-md-4'>
           <Card>
            <Card.Img variant="top" src="http://res.cloudinary.com/padfoot/image/upload/v1648144225/ITPM/room/reonbsxmmxhkhirygjhb.webp" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Book Now</Button>
            </Card.Body>
            </Card>
           </div>
           </div>
        </div>
      )
    }
  

