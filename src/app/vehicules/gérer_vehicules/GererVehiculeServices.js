import axios from 'axios'
import {API} from "../../../config";

const TRANSPORT_API_URL = `${API}/api/transport/`;


class GererServices {

    getAllTransports(){
        return axios.get(TRANSPORT_API_URL)
    }
    postImageTransport(data){
        return axios.post(TRANSPORT_API_URL+'createUpdateTransportImage/',data)
    }
    enableDisableStatusTransport(data){
        return axios.post(TRANSPORT_API_URL+'enableDisableStatusTransport/',data)
    }

}


export default new GererServices










