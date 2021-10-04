
import axios from 'axios'
import {API} from "../../../config";

const API_CONTACT = `${API}/api/page/contact/`


class AllServices {
    getAllContact(){
        return axios.get(API_CONTACT+'getAllPageContact')
    }
    postContact(data) {
        return axios.post(API_CONTACT, data)
    }

}

export default new AllServices