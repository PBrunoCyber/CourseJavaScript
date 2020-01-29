//Acessando a aplicação feita no NodeJS
import axios from 'axios';

var api = axios.create({ baseURL: 'http://localhost:3001/api' });

export default api;