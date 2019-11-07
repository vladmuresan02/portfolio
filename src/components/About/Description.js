import React, {Component} from "react";

export default class Description extends Component {
    renderDescription() {
        return this.props.content.map((paragraph, index) => {
            return (
                <div key={index}>
                    <p className="about__description">{paragraph}</p>
                </div>
            );
        });
    }

    render() {
        return (
            <div className="row">
                <div className="col-lg-3 col-md-12 about__left-column">
                    {/* title goes here */}
                </div>
                <div className="col-lg-9 col-md-12 about__right-column">
                    <div className="about__content">{this.renderDescription()}</div>
                </div>
            </div>
        );
    }
}
