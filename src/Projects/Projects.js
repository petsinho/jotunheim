import React, { Component } from "react";
import PropTypes from "prop-types";
import YouTube from "react-youtube";
import ProjectPreviews from "../ProjectPreview/ProjectPreviews";
import "./Projects.css";

class Projects extends Component {
  static propTypes = {
    projects: PropTypes.array
  };

  render() {
    return (
      <div className="projectsText">
        Here are some of my most noteworthy projects
        <ProjectPreviews projects={this.props.projects} />
      </div>
    );
  }
}

export default Projects;
