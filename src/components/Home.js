import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
// import styled from "styled-components";

function Home() {
  return (
    <div className="home-wrapper">
        
      <img src={require('./Pizza.jpg')} />
      <Link to="/Pizza">
        <Button color="secondary" size="lg" block>
            Order now!
        </Button>
      </Link>
    </div>
  );
}

export default Home;
