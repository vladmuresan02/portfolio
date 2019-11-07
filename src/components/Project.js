import React, {Component} from "react";

export default class Project extends Component {
    renderTags() {
        return this.props.project.tags.map(tag => {
            return (
                <div className="tag__pill" key={tag}>
                    {tag}
                </div>
            );
        });
    }

    render() {
        return (
            <div className="slider-element d-md-flex ">
                <div className="row no-gutters align-self-center  ">
                    <div className="col-lg-7 align-self-center">
                        <div className="project__img">
                            <img alt={this.props.project.name}
                                 className="img-fluid"
                                 src={
                                     this.props.project.image
                                         ? `${process.env.PUBLIC_URL}/jpg/${
                                             this.props.project.image
                                         }`
                                         : "https://vignette.wikia.nocookie.net/animal-jam-clans-1/images/4/47/Placeholder.png/revision/latest?cb=20170424114711"
                                 }
                            />
                        </div>
                    </div>
                    <div className="col-lg-4 align-self-center">
                        <div className="project-info">
                            {this.props.project.url ?
                                <a
                                    target="_blank" rel="noopener noreferrer"
                                    href={this.props.project.url}
                                    className="project-info__link"
                                >
                                    {this.props.project.name ? this.props.project.name : this.props.project.url}
                                </a> : <p className="project-info__link">{this.props.project.name}</p>
                            }
                            {this.props.project.codeurl && (
                                <a href="this.props.project.codeurl" className="tag__pill">See Code</a>)}

                            <div>{this.renderTags()}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
