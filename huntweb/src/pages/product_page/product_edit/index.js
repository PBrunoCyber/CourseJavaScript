import React, { Component } from 'react';
import './style.css';
import api from '../../../services/api';

export default class Product_Edit extends Component {
    state = {
        title: '',
        description: '',
        url: '',
        image_link: ''
    }
    async componentDidMount() {
        await this.search_products(this.props.match.params.id);
    }
    async search_products(params) {
        const response = await api.get(`/products/${params}`);
        const { title, description, url, image_link } = response.data;
        this.setState({ title, description, url, image_link });
    }
    async handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }
    editProduct = async () => {
        const { title, description, url, image_link } = this.state;
        const response = await api.put(`products/${this.props.match.params.id}`, { title, description, url, image_link });
        alert("O produto " + response.data.title + " foi atualizado com sucesso!");
        this.props.history.push('/');
    }

    render() {
        const { title, description, url, image_link } = this.state;
        return (
            <div className="edit">
                <div>
                    <h1>Editar produto</h1><br />
                    <div>
                        <div>
                            <label htmlFor="title">Título do produto
                                <input onChange={this.handleChange.bind(this)} value={title} type="text" name="title" />
                            </label>
                        </div>
                        <div>
                            <label htmlFor="Description">Descrição
                                <textarea onChange={this.handleChange.bind(this)} value={description} name="description" cols="30" rows="100%"></textarea>
                            </label>
                        </div>
                        <div>
                            <label htmlFor="url">Url
                                <input onChange={this.handleChange.bind(this)} value={url} type="text" name="url" />
                            </label>
                        </div>
                        <div>
                            <label htmlFor="image_link">Image Link
                                <input onChange={this.handleChange.bind(this)} value={image_link} type="text" name="image_link" />
                            </label>
                        </div>
                    </div>
                    <div className="botao">
                        <button onClick={this.editProduct}>Editar</button>
                    </div>
                </div>
                <div>
                    <div className="products-details">
                        <h1>{title}</h1>
                        <img src={image_link} alt={image_link} />
                        <p>{description}</p>
                        <p><a href={url}>{url}</a></p>
                    </div>
                </div>

            </div>
        );
    }
}