import React, {Component} from "react";

export default class Skills extends Component {
    renderSkills() {
        return this.props.content.map((skill, index) => {
            return (
                <div className="skill__tab" key={index}>
                    {skill}
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
                    <div className="about__content">{this.renderSkills()}</div>
                </div>
            </div>
        );
    }
}
