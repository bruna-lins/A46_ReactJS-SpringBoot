import axios from "axios";

const DESTINOS_BASE_REST_API_URL = 'http://localhost:8080/api/v1/destinos';

class DestinosService { 

    getAllDestinos() {
        return axios.get(DESTINOS_BASE_REST_API_URL)
    }

    createDestino(destino) {
        return axios.post(DESTINOS_BASE_REST_API_URL, destino)
    }

    getDestinosById(destinoId) {
        return axios.get(DESTINOS_BASE_REST_API_URL + '/' + destinoId);
    }

    updateDestino(destinoId, destino) { 
        return axios.put(DESTINOS_BASE_REST_API_URL + '/' + destinoId, destino);
    }

    deleteDestino(destinoId) {
        return axios.delete(DESTINOS_BASE_REST_API_URL + '/' + destinoId);
    }
    
}

export default new DestinosService();
