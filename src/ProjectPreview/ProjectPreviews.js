import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ProjectPreview from './ProjectPreview';
import './ProjectPreview.css';

const getSomePictures = (howMany = Math.ceil(Math.random() * 10)) => {
  const result = [];
  for (let i = 0; i < howMany; i++) {
    const picNumber = Math.ceil(Math.random() * 100);
    result.push(`https://picsum.photos/300?image=${picNumber}`);
  }
  return result;
};

class ProjectPreviews extends Component {

  onChange = () => {
  }

  onClickItem = () => {
  }

  onClickThumb = () => {
  }

  render() {
    const { projects } = this.props;
    const projectsWithImages = projects.map(p => {
      return {
        ...p,
        pictures: getSomePictures(),
      };
    });
    console.log('projs : ', projectsWithImages);

    return (
      <div className="project-previews-wrap">
        { projectsWithImages.map(p =>
          <ProjectPreview key={`project${p.title}`} project={p} />
        )}
      </div>
    );
  }
}

export default ProjectPreviews;
