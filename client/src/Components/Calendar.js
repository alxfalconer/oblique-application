import React from 'react';

export class Calendar extends React.Component {
    constructor() {
        super();

        var today = new Date(),
            date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + " / " + today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();

        this.state = {
            date: date
        };
    }

    render() {
        return (
            <div className='date'>{this.state.date}
            </div>
        );
    }
}