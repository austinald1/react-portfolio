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
        autoplay: true
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
    document.body.style.backgroundColor = "#bae4e4";
    return (
        <div className="container-fluid about-me-content" style={{ paddingBottom: 20 }}>
        <Row>
            <h1>About Me</h1>
        </Row>
        <Row>
            This is information about me.
        </Row>
        <Row>
            <Col span={12} style={{ marginTop: 20 }}>
                <RBCarousel
                className="rp-Carousel"
                animation={true}
                autoplay={this.state.autoplay}
                slideshowSpeed={2000}
                defaultActiveIndex={0}
                leftIcon={this.state.leftIcon}
                rightIcon={this.state.rightIcon}
                onSelect={this._onSelect}
                ref={this.slider}
                >
                <div style={{ height: 500 }}>
                    <img
                    style={{ width: "100%", height: "100%" }}
                    src={CarouselImage1}
                    />
                    <div className="carousel-caption">Image</div>
                </div>
                <div style={{ height: 500 }}>
                    <img
                    style={{ width: "100%", height: "100%" }}
                    src={CarouselImage2}
                    />
                    <div className="carousel-caption">Image</div>
                </div>
                <div style={{ height: 500 }}>
                    <img
                    style={{ width: "100%", height: "100%" }}
                    src={CarouselImage3}
                    />
                    <div className="carousel-caption">Image</div>
                </div>
                <div style={{ height: 500 }}>
                    <img
                    style={{ width: "100%", height: "100%" }}
                    src={CarouselImage4}
                    />
                    <div className="carousel-caption">Image</div>
                </div>
                </RBCarousel>
            </Col>
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