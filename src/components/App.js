import React, { PropTypes } from 'react';
import Header from './common/Header';
import { connect } from 'react-redux';

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Header
          loading={this.props.loader}
        />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  console.log(state);
  return {
    loader: state.numAjaxCallInProgress > 0
  };
}

export default connect(mapStateToProps)(App);
