import React, { Component } from "react";
import {Container , Row , Col } from 'react-bootstrap'
class Home extends Component {
 
    render() {
      return (
          <div className = 'Home'> 
<Container>
<Row>
    {/* <Col>1 of 3</Col> */}
    <Col xs={6}>
        <h1>
            Hello !
           
            
        </h1>
        <h2>  I'M Hiba
           Front end developer !
           Join me to know more </h2>
        <button type="button" className="btn btn-primary" id="button"> Centered button</button>
    </Col>
    <Col>
        {/* <img src""/> */}
        </Col>
  </Row>
</Container>
          </div>
      )
    }
}

export default Home;