import React, { Component } from 'react';
import './styles.css';
import api from '../../services/api';

export default class Product extends Component {
    state = {
        product: {},
    };
    async componentDidMount() {
        const { id } = this.props.match.params;
        const response = await api.get(`products/${id}`);
        this.setState({ product: response.data });
    }
    render() {
        const { product } = this.state;
        return (

            <div>
                <h1 className="details">{product.title}</h1>
                <div className="products-details">

                    <img src={product.image_link} alt={product.image_link} />
                    <p>{product.description}</p>

                    <p><a href={product.url}>{product.url}</a></p>
                </div>
            </div>
        )
    }
} 