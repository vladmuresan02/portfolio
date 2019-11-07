import React, { Component } from "react";
import Header from "./Header";
import Description from "./About/Description";
import Skills from "./About/Skills";
import Education from "./About/Education";
import Work from "./About/Work";
import { about } from "../uploads/about";

export default class About extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container-fluid">
          <div>
            {about.description && (
              <Description title="Description" content={about.description} />
            )}
          </div>
          <div>
            {about.skills && <Skills title="Skills" content={about.skills} />}
          </div>
          <div>
            {about.education && (
              <Education title="Education" content={about.education} />
            )}
          </div>
          <div>{about.work && <Work title="Work" content={about.work} />}</div>
        </div>
      </div>
    );
  }
}
