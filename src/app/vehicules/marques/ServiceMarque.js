import axios from 'axios'
import {API} from "../../../config";

const BRAND_API_URL = `${API}/api/brands/`;

class AllServices {
    getAllBrand(){
        return axios.get(BRAND_API_URL +'getAllBrands' )
    }

    postBrand(newBrand) {
        return axios.post(BRAND_API_URL, newBrand)
    }
    UpdateBrand(newBrand) {
        return axios.put(BRAND_API_URL, newBrand)
    }
    getBrandById(id){
        return axios.get(BRAND_API_URL +'getBrandById/'+id)
    }
}

export default new AllServices