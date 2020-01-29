import React, { Component } from 'react';
import api from '../../services/api';

//Estilização
import './styles.css';
import './modal.css';
import './add_style.css';

export default class Main extends Component {
    //Dentro do estado é possível adicionar qualquer variável (state é um objeto) 
    state = {
        products: [],
        productInfo: {},
        page: 1,
        modal_delete: 'hideModal',
        modal_add: 'hideAddModal',
        deleted: {
            id: '',
            nome: ''
        },
        title: '',
        description: '',
        url: '',
        image_link: ''
    }
    //Modelo de função pertencente ao react
    componentDidMount() {
        this.loadProducts();
    }

    //Modelo de função criado pelo desenvolvedor, nesse caso, 
    //se usasse o outro modelo não seria possível utilizar o "this"
    loadProducts = async (pageNumber = 1) => {
        const response = await api.get(`/products?page=${pageNumber}`);
        const { docs, ...productInfo } = response.data;
        //Para setar algum valor para uma variavel dentro do state
        //Não se faz assim: this.state.products..., mas assim:
        await this.setState({ products: docs, productInfo });
    }


    removeProduct = async id => {
        await api.delete(`/products/${id}`);
        const pages = await api.get(`/products`);
        await this.loadProducts(pages.data.pages);
        await this.setState({ page: pages.data.pages });
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    addProduct = async () => {
        const { title, description, url, image_link } = this.state;
        await api.post('/products', { title, description, url, image_link });

        const pages = await api.get(`/products`);
        await this.loadProducts(pages.data.pages);

        await this.setState({ page: pages.data.pages });
        this.setState({ modal_add: 'hideAddModal' });
    }

    prevPage = async () => {
        const { page } = this.state;
        if (page === 1) return;
        const pageNumber = page - 1;
        this.setState({ page: pageNumber });
        this.loadProducts(pageNumber);
    }

    nextPage = async () => {
        const { page, productInfo } = this.state;
        if (page === productInfo.pages) return;
        const pageNumber = page + 1;
        this.setState({ page: pageNumber });
        this.loadProducts(pageNumber);
    }

    //MODAL DELETE
    openModalDelete = (id = '', nome = '') => {
        const { modal_delete } = this.state;
        if (modal_delete === 'hideModal') {
            this.setState({ modal_delete: 'showModal', deleted: { id, nome } });
        } else {
            this.setState({ modal_delete: 'hideModal', deleted: { id: '', nome: '' } });
        }
    }
    openModalAdd = () => {
        const { modal_add } = this.state;
        if (modal_add === 'hideAddModal') {
            this.setState({ modal_add: 'showAddModal' });
        } else {
            this.setState({ modal_add: 'hideAddModal' });
        }
    }

    //Sempre que se utiliza um state o metodo render vai ficar 
    //escutando-o automaticamente para ver se teve alterações
    render() {
        //Desestruturação
        const { products, page, productInfo, modal_delete, deleted: { id, nome }, modal_add } = this.state;
        return (

            <div>
                <div className="title">
                    <h1>This is the products added</h1>
                </div>

                {/* Remove products */}
                <div className={modal_delete}>
                    <div className="back" onClick={this.openModalDelete}>
                        <div className="modal">
                            <h2>Você tem certeza que quer apagar esse registro?</h2>
                            <p>Item: <b>{nome}</b></p>
                            <div>
                                <button id="sim" onClick={() => this.removeProduct(id)}>Sim</button>
                                <button id="nao" onClick={this.openModalDelete}>Não</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Add products */}
                <div className={modal_add}>
                    <div className="back">
                        <div className="modal">
                            <div className="top">
                                <h3>Adicionar produto</h3>
                                <button onClick={this.openModalAdd}>x</button>
                            </div>
                            <div className="itens">
                                <div>
                                    <label htmlFor="title">Título do produto
                                <input onChange={this.handleChange.bind(this)} type="text" name="title" />
                                    </label>
                                </div>
                                <div>
                                    <label htmlFor="Description">Descrição
                                <textarea onChange={this.handleChange.bind(this)} name="description" id="" cols="30" rows="100%"></textarea>
                                    </label>
                                </div>
                                <div>
                                    <label htmlFor="url">Url
                                <input onChange={this.handleChange.bind(this)} type="text" name="url" />
                                    </label>
                                </div>
                                <div>
                                    <label htmlFor="image_link">Image Link
                                <input onChange={this.handleChange.bind(this)} type="text" name="image_link" />
                                    </label>
                                </div>
                                <div className="button">
                                    <button onClick={this.addProduct}>Adicionar</button>
                                    <button onClick={this.openModalAdd}>Cancelar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product-list">
                    {/* Para percorrer os produtos se faz um map 
                    OBS: é preciso adicionar um key com valor único!*/}
                    {products.map(product =>
                        (<article key={product._id}>
                            <img src={product.image_link} alt={product.title} />
                            <b>{product.title}</b>
                            <p>{product.description}</p>
                            <div className="buttons">
                                <a href={`/products/${product._id}`}>Acessar</a>
                                <button onClick={() => this.openModalDelete(product._id, product.title)}>Deletar</button>
                            </div>
                        </article>))
                    }
                </div>
                <div className="actions">
                    <button disabled={page === 1} onClick={this.prevPage}> Anterior </button>
                    <button disabled={page === productInfo.pages} onClick={this.nextPage}> Próximo </button>
                </div>
                <div>
                    <button className="adicionar" onClick={this.openModalAdd}>+</button>
                </div>
                <footer className="footer">
                    <div>Created by Bruno Fernandes</div>
                </footer>
            </div>
        )
    }
}

