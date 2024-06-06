import React, { Component } from 'react';

class Lesson extends Component {

  render() {

    const listPages = this.props.list;
    const itemPage = listPages.map( (item, index) =>
      <li key={index} className="list-group-item">{item}</li>
    )

    return (
      <ul className="list-group">
        {itemPage}
      </ul>
    );
  }
}

export default Lesson;