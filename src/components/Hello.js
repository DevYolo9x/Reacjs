import React, { Component } from 'react';

class Hello extends Component {

    formatName (user) {
        return user.firstName + ' ' + user.lastName;
    }
    
    render() {
        const user = {
            firstName: 'App',
            lastName: 'ReactJs',
        }
        return (
            <div>
                <h3 className='m-5 text-center'>{this.formatName(user)}</h3>
            </div>
        )
    }
}

export default Hello