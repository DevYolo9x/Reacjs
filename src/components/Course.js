import React, { Component } from 'react';
import Lesson from "./Lesson";

class Course extends Component {

  constructor(props) {
    super(props);

    this.handleClickThis = this.handleClickThis.bind(this);
  }

  handleClick() {
    alert('View Register');
  }

  handleClickText(text) {
    alert(text);
  }
  
  handleClickThis() {
    alert(this.props.name_button);
  }

  showButton() {
    const checkType = this.props.type;
    if (checkType==true) {
      return (
        <div>
            <button type="button" onClick={this.handleClick} className="btn btn-lg btn-block btn-outline-primary mt-3">Register</button>
            <button type="button" onClick={() => this.handleClickText('Login')} className="btn btn-lg btn-block btn-outline-primary mt-3">Login</button>
            <button type="button" onClick={this.handleClickThis} name_button="Purchase" className="btn btn-lg btn-block btn-outline-primary mt-3">Purchase</button>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="col-lg-4 card mb-4 shadow-sm">
        <div className="card-header mt-3">
          <h4 className="my-0 font-weight-normal">{this.props.name}</h4>
        </div>
        <div className="card-body">
          <h1 className="card-title pricing-card-title">${this.props.price} <small className="text-muted">/ month</small></h1>
          <Lesson list={this.props.list} />
          {this.showButton()}
        </div>
      </div>
    );
  }
}

export default Course;