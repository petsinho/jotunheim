import React, { Component } from 'react';
import Carousel from 'nuka-carousel';
import PropTypes from 'prop-types';

class ProjectDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {
      carouselInterval: 5000 + (Math.random() * 1500),
    };
    // TODO: cleanup and show details
    setInterval(this.randomizeCarousel.bind(this), 4000);
  }

  randomizeCarousel() {
    this.setState({
      carouselInterval: 3000 + (Math.random() * 1500),
    });
  }

  render() {
    const { project } = this.props;

    return project ? (
      <div className="project-preview-item name"> More details on {project.title} </div>
    ) :
    '';
  }
}

ProjectDetails.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    pictures: PropTypes.array,
  }),
};

export default ProjectDetails;
