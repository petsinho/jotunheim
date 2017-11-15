import React, { Component } from 'react';
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
    const dummyProjects = [
      {
        name: 'AI',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis   nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        pictures: ['https://i.pinimg.com/originals/20/a5/6a/20a56afeb9c7a18cd64829acb7d42fa0.jpg', 'http://d3ph2ovtiyj37.cloudfront.net/wp-content/uploads/2017/01/18162421/orchid.jpg'],
      },
      {
        name: 'Computer Vision',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis   nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        pictures: ['https://i.pinimg.com/originals/20/a5/6a/20a56afeb9c7a18cd64829acb7d42fa0.jpg',
          'http://d3ph2ovtiyj37.cloudfront.net/wp-content/uploads/2017/01/18162421/orchid.jpg',
          'http://d3ph2ovtiyj37.cloudfront.net/wp-content/uploads/2017/01/18162421/orchid.jpg'],
      },
    ];

    return (
      <div className="project-previews-wrap">
        { dummyProjects.map(p =>
          <ProjectPreview key={`project${p.name}`} project={p} />
        )}
      </div>
    );
  }
}

export default ProjectPreviews;
