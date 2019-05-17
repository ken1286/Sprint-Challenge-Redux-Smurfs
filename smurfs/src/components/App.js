import React, { Component } from 'react';
import './App.css';
import { getSmurfs, addSmurf } from '../actions';
import { connect } from "react-redux";
import AddForm from './AddForm';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {

  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    if (this.props.isFetching) {
      // return something here to indicate that you are fetching data
      return (
      <h2>LOADING...</h2>
      )
    }

    return (
      <div className="App">
        <AddForm addSmurf={this.props.addSmurf} />

        {this.props.smurfs.map( smurf => {
        return (
          <div key={smurf.id}>
            <h2>{smurf.name}</h2>
            <p>{smurf.age}</p>
            <p>{smurf.height}</p>
          </div>
        )
      })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs,
  isFetching: state.isFetching
});
// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps,
  {
    getSmurfs, addSmurf
  }
)(App);