import React, { Component } from 'react';
class Card extends Component {

    static defaultProps = {
        informacion: 'No card is available'
    };

    constructor(props) {
        super(props);
        this.state = {}
        localStorage["user"] = "Luis";
        this.name = localStorage["user"];
    }


    render() {
        return (<div>{this.name} <div>{this.props.informacion}</div> </div>);
    }
}

export default Card;

Card.propT