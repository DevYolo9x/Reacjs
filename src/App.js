import Course from "./components/Course";
import Hello from "./components/Hello";
import LifeCircle from "./components/LifeCircle";

import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const items = [
      {
        name: 'Free',
        type: true,
        price: 0,
        lists: [
          'Home Page',
          'Contact Page',
        ]
      }
      ,{
        name: 'Advanced',
        type: true,
        price: 150,
        lists: [
          'Product Page',
          'Article Page',
        ]
      },
      {
        name: 'Business',
        type: false,
        price: 250,
        lists: [
          'Admin Page',
          'Dashboard Page',
          'Chart Page',
        ]
      }
    ];

    let elCourse = items.map( (item, index) => 
      <Course key={index} name={item.name} type={item.type} price={item.price} list={item.lists}></Course>
    )

    elCourse = null;

    return (
      <div className="container">
        <Hello />
        <div className="row card-deck mb-3 text-center">
          {elCourse}
          <LifeCircle />
        </div>
      </div>
    );
  }


}

export default App;