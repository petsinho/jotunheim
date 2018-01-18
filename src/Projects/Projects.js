import React, { Component } from 'react';
import PropTypes from 'prop-types';
import YouTube from 'react-youtube';
import ProjectPreviews from '../ProjectPreview/ProjectPreviews';
import './Projects.css';

//FIXME: Get through sagas and remove offline data
const getSomePictures = (howMany = Math.ceil(Math.random() * 10)) => {
  const result = [];
  for (let i = 0; i < howMany; i++) {
    const picNumber = Math.ceil(Math.random() * 100);
    result.push(`https://picsum.photos/300?image=${picNumber}`);
  }
  return result;
};

const withImages = (projects) =>  projects.map(p => 
  ({
    ...p,
    pictures: getSomePictures(),
}));

const projects =  require('../offline-data.json');
let projectsWithImages = projects;
if (!projects[0].pictures) {
  projectsWithImages = withImages(projects)
}

class Projects extends Component {
  static propTypes = {
    projects: PropTypes.array,
  };

  render() {
    return (
      <div>
      Here are some of my most noteworkthy
       <ProjectPreviews projects={projectsWithImages} />
      </div>
    )
  }
}

export default Projects;
