import { connect } from 'react-redux';
import ProjectDetails from './ProjectDetails';
import {
  getSelectedProject,
} from '../reducers';

function mapStateToProps(state, ownProps) {
  return {
    project: getSelectedProject(state, ownProps.match.params.id),
  };
}

export default connect(mapStateToProps)(ProjectDetails);
