import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { Carousel } from 'react-responsive-carousel';
// import Carousel from 'react-image-carousel';
import './ProjectPreview.css';

const Carousel = require('nuka-carousel');

class ProjectPreview extends Component {
  onChange = () => {
  }

  onClickItem = () => {
  }

  onClickThumb = () => {
  }

  renderCarousel() {
    // TODO: get real images links to s3 bucket from redux store
    const { pictures } = this.props.project;
    return (
    <Carousel>
      {pictures.map(img =>
        (
          <div key={`image${img}`}>
            <img src={img} height="222" width="440" />
          </div>
        )
      )}
    </Carousel>
    );
  }

  render() {
    const { name, description } = this.props.project;
    return (
      <div className="project-preview-container">
        <div className="project-preview-item"> {name} </div>
        {this.renderCarousel()}
        <div className="project-preview-item"> {description} </div>
      </div>
    );
  }
}

ProjectPreview.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    images: PropTypes.array,
  }),
};

export default ProjectPreview;
