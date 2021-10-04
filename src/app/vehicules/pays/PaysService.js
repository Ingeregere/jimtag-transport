import axios from 'axios'
import {API} from "../../../config";

const COUNTRY_API_URL = `${API}/api/countries/`;

class CategoryServices {
    getAllCountry(){
        return axios.get(COUNTRY_API_URL+'getAllCountry')
    }
    UpdateCountry(data){
        return axios.put(COUNTRY_API_URL, data)
    }
    getCountryById(id){
        return axios.get(COUNTRY_API_URL+'getCountryById/'+id)
    }

    postCountry(newCountry) {
        return axios.post(COUNTRY_API_URL, newCountry)
    }
}


export default new CategoryServices