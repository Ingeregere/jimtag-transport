import axios from 'axios'
import {API} from "../../../config";

const BODYWORK_API_URL = `${API}/api/bodywork/`;


class CarrosseriesServices {

    getAllBodywork(){
        return axios.get(BODYWORK_API_URL+'getAllBodywork')
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


export default new CarrosseriesServices










