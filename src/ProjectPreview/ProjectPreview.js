import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './ProjectPreview.css';
import Carousel from '../Carousel/Carousel';

class ProjectPreview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carouselInterval: 5000 + Math.random() * 1500
    };
    setInterval(this.randomizeCarousel.bind(this), 4000);
  }

  onChange = () => {};

  onClickItem = () => {};

  onClickThumb = () => {};

  randomizeCarousel() {
    this.setState({
      carouselInterval: 3000 + Math.random() * 1500
    });
  }
  renderCarousel() {
    // TODO: get real images links to s3 bucket from redux store
    const { pictures } = this.props.project;
    const { carouselInterval } = this.state;
    return (
      <Carousel
        pictures={pictures}
        size="small"
        carouselInterval={carouselInterval}
      />
    );
  }

  render() {
    const { id, title, description } = this.props.project;
    const descriptionShort =
      description.length > 100 ? (
        <div>
          {`${description.substring(0, 100)} ...`}
          <Link
            style={{ textDecoration: 'none', color: 'gray' }}
            to={`/project/${id}`}
          >
            Read More
          </Link>
        </div>
      ) : (
        <div> {description} </div>
      );

    const textSize =
      description.length > 80
        ? description.length > 120
          ? { fontSize: 'large' }
          : { fontSize: 'x-large' }
        : {};

    const titleShort = (
      <Link style={{ textDecoration: 'none' }} to={`/project/${id}`}>
        <div className="project-preview-item name" style={{ ...textSize }}>
          {' '}
          {title}{' '}
        </div>
      </Link>
    );

    return (
      <div className="project-preview-container">
        {titleShort}
        {this.renderCarousel()}
        <div className="project-preview-item"> {descriptionShort} </div>
      </div>
    );
  }
}

ProjectPreview.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    pictures: PropTypes.array
  })
};

export default ProjectPreview;
