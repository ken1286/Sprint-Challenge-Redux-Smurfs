import React from 'react';

class AddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfInput: {
        name: '',
        age: '',
        height: ''
      }
    }
  }

  handleChanges = event => {
    this.setState( {
      smurfInput: {
        ...this.state.smurfInput,
      [event.target.name]: event.target.value
    }
    })
  }

  addSmurf = (event) => {
    event.preventDefault();
    this.props.addSmurf(this.state.smurfInput)
    this.setState( {
      smurfInput: {
        name: '',
        age: '',
        email: ''
      }
    })
  }


  render() { 
    return (
      <div>
        <form onSubmit={this.addSmurf}>
          <input
            placeholder="name"
            name="name"
            type="text"
            value={this.state.smurfInput.name}
            onChange={this.handleChanges}
          />
          
          <input 
            placeholder="age"
            name="age"
            type="text"
            value={this.state.smurfInput.age}
            onChange={this.handleChanges}
          />
          <input 
            placeholder="height"
            name="height"
            type="text"
            value={this.state.smurfInput.height}
            onChange={this.handleChanges}
          />
          <button type="submit" onClick={this.addSmurf}>Submit</button>
        </form>
      </div>
      );
  }
}
 
export default AddForm;