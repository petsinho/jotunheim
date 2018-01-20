import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProjectPreview from './ProjectPreview';
import './ProjectPreview.css';


class ProjectPreviews extends Component {

  onChange = () => {
  }

  onClickItem = () => {
  }

  onClickThumb = () => {
  }

  render() {
    const { projects } = this.props;
    return (
      <div className="project-previews-wrap">
        { projects.map(p =>
          <ProjectPreview key={`project${p.title}`} project={p} />,
        )}
      </div>
    );
  }
}

ProjectPreviews.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      pictures: PropTypes.array,
    }),
  ),
};

export default ProjectPreviews;
