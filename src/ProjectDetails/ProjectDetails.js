import React, { Component } from 'react';
import Carousel from 'nuka-carousel';
import PropTypes from 'prop-types';

class ProjectDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {
      carouselInterval: 5000 + (Math.random() * 1500),
    };
    const projectId = props.match.params.id;
    // TODO: cleanup and show details
    console.log('showing details for project: ', projectId);
    setInterval(this.randomizeCarousel.bind(this), 4000);
  }

  randomizeCarousel() {
    this.setState({
      carouselInterval: 3000 + (Math.random() * 1500),
    });
  }

  render() {
    return (
      <div className="project-preview-item name"> more details on this </div>
    );
  }
}

ProjectDetails.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    images: PropTypes.array,
  }),
};

export default ProjectDetails;
