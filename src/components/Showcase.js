import React, {Component} from "react";
import Header from "./Header";
import Project from "./Project";
import {projects} from "../uploads/projects";
import Slider from "react-slick";


export default class Showcase extends Component {

    componentDidMount() {
        let slickListDiv = document.getElementsByClassName('slick-list')[0]
        slickListDiv.addEventListener('wheel', event => {
            event.preventDefault();
            event.deltaY > 0 ? this.slider.slickNext() : this.slider.slickPrev()
        });

        slickListDiv.addEventListener("keydown", event => {

            event.preventDefault();
            if (event.keyCode === 39 || event.keyCode === 40) {
                this.slider.slickNext()
            } else if (event.keyCode === 37 || event.keyCode === 38) {
                this.slider.slickPrev()
            }
        })
    }

    renderProjects() {
        return projects.map(project => {
            return (
                <div key={project.id}>
                    <Project
                        project={project}
                    />
                </div>
            );
        });
    }

    render() {
        const settings = {
            infinite: true,
            dots: true,
            speed: 500,
            vertical: true,
            adaptiveHeight: true,
            responsive: [
                {
                    breakpoint: 982,
                    settings: {
                        vertical: false,
                        swipeToSlide: true,
                        adaptiveHeight: true
                    }
                }
            ],
            swipeToSlide: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            draggable: false
        };
        return (
            <div>
                <Header/>
                <div>
                    <Slider {...settings}
                            ref={slider => this.slider = slider && slider.innerSlider}>{this.renderProjects()}</Slider>
                </div>
            </div>
        );
    }
}
