import { connect } from 'react-redux';
import ACTIONS from '../../actions';

import Link from './Link';


const mapStateToProps = (
  state,
  ownProps // 自身属性
) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}

const mapDispatchToProps = (
  dispatch,
  ownProps  // 自身属性
) => {
  return {
    onClick: () => {
      console.log('FilterLink onClick');
      dispatch(ACTIONS.setVisibility(ownProps.filter))
    }
  }
}

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);

export default FilterLink;
