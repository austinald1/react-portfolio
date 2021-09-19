import React from "react";
import ReactDOM from 'react-dom';

import RBCarousel from "react-bootstrap-carousel";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import { Row, Col, Button, ButtonGroup } from "react-bootstrap";

import ProfilePic from "../assets/img/banner-4.jpg";
import CarouselImage1 from "../assets/img/carousel-1.jpeg";
import CarouselImage2 from "../assets/img/carousel-2.jpeg";
import CarouselImage3 from "../assets/img/carousel-3.jpeg";
import CarouselImage4 from "../assets/img/carousel-4.jpeg";

const styles = { height: 400, width: "100%" };

{{ /* INSERT IMAGES ABOVE, IN THE FORMAT PROVIDED */ }}
class AboutMe extends React.PureComponent {
    constructor(props) {
    super(props);
    this.slider = React.createRef();
    this.state = {
        autoplay: true,
    };
    }
    _onSelect = (active, direction) => {
    console.log(`active=${active} && direction=${direction}`);
    };
    _visiableOnSelect = (active) => {
    console.log(`visiable onSelect active=${active}`);
    };
    _slideNext = () => {
    this.slider.current.slideNext();
    };
    _slidePrev = () => {
    this.slider.current.slidePrev();
    };
    _goToSlide = () => {
    this.slider.current.goToSlide(1);
    };
    _autoplay = () => {
    this.setState({ autoplay: !this.state.autoplay });
    };
    _changeIcon = () => {
    };
    
    render() {
    return (
        <div className="container-fluid" style={{ paddingBottom: 20 }}>
        <Row>
            <h1>About Me</h1>
        </Row>
        <Row>

        </Row>
        <Row>

        </Row>
      </div>
    );
    }
}

function AboutMe_export(){
    let component = new AboutMe();

    return component.render();
}

export default AboutMe;