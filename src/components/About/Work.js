import React, {Component} from "react";

export default class Work extends Component {
    renderWork() {
        return this.props.content.map(object => {
            return (
                <div className="about-section" key={object.id}>
                    <p className="about-section__period">{object.period}</p>
                    <p className="about-section__company">{object.company}</p>
                    <p className="about-section__position">{object.position}</p>
                    <p className="about-section__details">{object.details}</p>
                </div>
            );
        });
    }

    render() {
        return (
            <div className="row">
                <div className="col-lg-3 col-md-12 about__left-column">
                    <h1 className="about__title">{this.props.title}</h1>
                </div>
                <div className="col-lg-9 col-md-12 about__right-column">
                    <div className="about__content">{this.renderWork()}</div>
                </div>
            </div>
        );
    }
}
