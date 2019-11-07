import React, {Component} from "react";
import {Link} from "react-router-dom";
import {CSSTransition} from "react-transition-group";

const DropTopAnimation = ({children, ...props}) => {
    return (
        <CSSTransition
            {...props}
            timeout={400}
            unmountOnExit={true}
            classNames="dropTop"
        >
            {children}
        </CSSTransition>
    );
};

const FadeFromLeftAnimation = ({children, ...props}) => {
    return (
        <CSSTransition
            {...props}
            timeout={400}
            unmountOnExit={true}
            classNames="fadeFromLeft"
        >
            {children}
        </CSSTransition>
    );
};

export default class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDropTopVisible: false,
            isFadeFromLeftVisible: false
        };
    }

    componentDidMount() {
        this.setState({isDropTopVisible: !this.state.isDropTopVisible});
    }

    render() {
        return (
            <div>

                <DropTopAnimation
                    in={this.state.isDropTopVisible}
                    onEntered={() => {
                        setTimeout(() => {
                            this.setState({
                                isFadeFromLeftVisible: !this.isFadeFromLeftVisible
                            })
                        }, 500)

                    }}
                >
                    <div className="homepage-jumbotron p-5">
                        <div className="homepage-jumbotron__content">
                            <h3 className="homepage-jumbotron__name">VLADUT MURESAN</h3>
                            <p className="homepage-jumbotron__position">
                                Front-End Web Developer
                            </p>
                        </div>
                    </div>
                </DropTopAnimation>
                <FadeFromLeftAnimation in={this.state.isFadeFromLeftVisible}>
                    <div className="homepage__links p-5 p-b-0 ">
                        <Link className="homepage__link" to="/about">
                            About Me
                        </Link>
                        <Link className="homepage__link" to="/showcase">
                            Showcase
                        </Link>
                        <Link className="homepage__link" to="/contact">
                            Contact
                        </Link>
                        <a className="homepage__link" href="https://www.github.com/vladmuresan02">
                            Github
                        </a>
                    </div>
                </FadeFromLeftAnimation>
            </div>
        );
    }
}
