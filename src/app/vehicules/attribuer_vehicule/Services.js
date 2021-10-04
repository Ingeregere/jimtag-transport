import axios from 'axios'
import {API} from "../../../config";

const TRANSPORT_API_URL = `${API}/api/transport/`;
const CATEGORY_TRANSPORT_API_URL = `${API}/api/category/`;


class TransportServices {

    getAllTransport(){
        return axios.get(TRANSPORT_API_URL)
    }
    getAllCategoryTransport(){
        return axios.get(CATEGORY_TRANSPORT_API_URL+'getAllCategory')
    }

    postTransport(newTransport) {
        return axios.post(TRANSPORT_API_URL, newTransport)
    }
}


export default new TransportServices










