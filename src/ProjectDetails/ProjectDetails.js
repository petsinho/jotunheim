import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Markdown from 'react-remarkable';
import './ProjectDetails.css';
import Carousel from '../Carousel/Carousel';

class ProjectDetails extends Component {

  renderCarousel() {
    // TODO: get real images links to s3 bucket from redux store
    const { pictures } = this.props.project;
    if (!pictures) return;
    return (
      <div style={{ width: '50%', display: 'flex', margin: 'auto' }}>
        <Carousel pictures={pictures} size="large" />
      </div>
    );
  }

  render() {
    const { project } = this.props;
    return project ? (
      <div>
        <div className="project-detail-name"> {project.title} </div>
        {/* {this.renderCarousel()} */}
        <div className="project-detail-desc">
          <Markdown source={project.description}/>
        </div>
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
