/* biblioteca que trabalha com requisições HTTP */
import axios from 'axios';

export const api = axios.create({
  baseURL: "http://localhost:3333"
});
