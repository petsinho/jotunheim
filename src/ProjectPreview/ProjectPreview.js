import React, { Component } from 'react';
import Carousel from 'nuka-carousel';
import { Link } from 'react-router-dom';
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

  onChange = () => {
  }

  onClickItem = () => {
  }

  onClickThumb = () => {
  }

  randomizeCarousel() {
    this.setState({
      carouselInterval: 3000 + (Math.random() * 1500),
    });
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
          ),
        )}
      </Carousel>
    );
  }

  render() {
    const { id, title, description } = this.props.project;
    return (
      <div className="project-preview-container">
        <Link style={{ textDecoration: 'none' }} to={`/project/${id}`} >
          <div className="project-preview-item name"> {title} </div>
        </Link>
        {this.renderCarousel()}
        <div className="project-preview-item"> {description} </div>
      </div>
    );
  }
}

ProjectPreview.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    pictures: PropTypes.array,
  }),
};

export default ProjectPreview;
