import { connect } from 'react-redux';
import Projects from "./Projects";
import { getAllProjects } from "../reducers";

function mapStateToProps(state, ownProps) {
  return {
    projects: getAllProjects(state, {type:'projects'}).projects
  };
}

export default connect(mapStateToProps)(Projects);
