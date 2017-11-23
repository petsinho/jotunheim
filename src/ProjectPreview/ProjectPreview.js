import React, { Component } from 'react';
import Carousel from 'nuka-carousel';
import PropTypes from 'prop-types';
import './ProjectPreview.css';

class ProjectPreview extends Component {

  constructor(props) {
    super(props);
    this.state = {
      carouselInterval: 5000 + (Math.random() * 1500),
    };
    setInterval(this.randomizeCarousel.bind(this), 4000);
  }

  randomizeCarousel() {
    this.setState({
      carouselInterval: 3000 + (Math.random() * 1500),
    });
  }
  onChange = () => {
  }

  onClickItem = () => {
  }

  onClickThumb = () => {
  }

  renderCarousel() {
    // TODO: get real images links to s3 bucket from redux store
    const { pictures } = this.props.project;
    const { carouselInterval } = this.state;
    return (
    <Carousel autoplay wrapAround autoplayInterval={carouselInterval} >
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
    const { title, description } = this.props.project;
    return (
      <div className="project-preview-container">
        <div className="project-preview-item name"> {title} </div>
        {this.renderCarousel()}
        <div className="project-preview-item"> {description} </div>
      </div>
    );
  }
}

ProjectPreview.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    images: PropTypes.array,
  }),
};

export default ProjectPreview;
