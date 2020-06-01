import React from 'react';

class SingleContact extends React.Component {
  constructor(props) {
    super(props)
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleDelete() {
    console.log('On a cliqué sur moi et j\'execute du code depuis l\'enfant', this.props.name)
    console.log(this.props)
    this.props.onDelete(this.props.id)
  }

  render() {
    return (
      <div className="SingleContact" >
        {this.props.name}
        <button> Edit</button>
        <button onClick={this.handleDelete}>Delete</button>
      </div >
    );
  }
}

export default SingleContact;
