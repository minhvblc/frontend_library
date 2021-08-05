import React from "react";
import { Carousel } from "react-bootstrap";
import { useState } from "react";
import book1 from '../asset/book1.jpg'
import book2 from '../asset/book2.jpg'
import book3 from '../asset/book3.jpg'
import Image from 'react-bootstrap/Image'
export default function Home() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div style={{height:200}}>
      <Carousel activeIndex={index} onSelect={handleSelect} style={{height:200}}>
        <Carousel.Item style={{height:250}}>
          <Image
            className="d-block w-100"
            src= {book1}
            alt="First slide"
            fluid
            
          />
         
        </Carousel.Item>
        <Carousel.Item style={{height:250}} >
          <Image
            className="d-block w-100"
            src= {book2}
            alt="Second slide"
        
            fluid 
          />
        </Carousel.Item>
        <Carousel.Item style={{height:250}}>
          <Image
            className="d-block w-100"
            src={book3}
            alt="Third slide"
            fluid
           
          />
        </Carousel.Item>
      </Carousel>
      
    </div>
  );
}
