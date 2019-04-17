
import React, { Component } from 'react';


class Item extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="item">
                <a href={this.props.link}>
                    <img src={this.props.src} alt={this.props.title} />
                    <h4 className="item-titulo">{this.props.title}</h4>
                    <p className="item-descricao">{this.props.description}</p>
                </a>
            </div>
        );
    }
}

export default Item;
