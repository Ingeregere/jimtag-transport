import axios from 'axios'
import {API} from "../../config";

const BODYWORK_API_URL = `${API}/api/contacts/`;


class ContactServices {

    getAllContact(){
        return axios.get(BODYWORK_API_URL+'getAllContacts')
    }
    getAllBodyworkById(id){
        return axios.get(BODYWORK_API_URL+'getBodyworkById/'+id)
    }
    updateBodywork(data){
        return axios.put(BODYWORK_API_URL, data)
    }
    postBodywork(newBodyWork) {
        return axios.post(BODYWORK_API_URL, newBodyWork)
    }
}


export default new ContactServices










