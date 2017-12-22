import React, { Component } from 'react';
import Carousel from 'nuka-carousel';
import PropTypes from 'prop-types';
import './ProjectDetails.css';

class ProjectDetails extends Component {

  renderCarousel() {
    // TODO: get real images links to s3 bucket from redux store
    const { pictures } = this.props.project;
    if (!pictures) return;
    return (
      <Carousel autoplay wrapAround autoplayInterval={5000} >
        {pictures.map(img =>
          (
            <div key={`image${img}`}>
              <img src={img} height="422" width="640" />
            </div>
          ),
        )}
      </Carousel>
    );
  }

  render() {
    const { project } = this.props;

    return project ? (
      <div>
        <div className="project-detail name"> {project.title} </div>
        {this.renderCarousel()}
        <div className="project-detail desc"> {project.description} </div>
      </div>
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
