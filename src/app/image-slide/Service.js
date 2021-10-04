
    import axios from 'axios'
    import {API} from "../../config";

const CAROUSEL_API_URL = `${API}/api/carousel/`;
const ARTICLE_API_URL = `${API}/api/articles/`;


class CarrosseriesServices {

    getAllCarousel(){
        return axios.get(CAROUSEL_API_URL+'getAllCarousels')
    }
    getAllArticles(){
        return axios.get(ARTICLE_API_URL)
    }
    getAllBodyworkById(id){
        return axios.get(CAROUSEL_API_URL+'getBodyworkById/'+id)
    }
    updateCarousel(formData){
        return axios.put(CAROUSEL_API_URL, formData)
    }
    postCarousel(formData) {
        return axios.post(CAROUSEL_API_URL, formData)
    }
    postArticle(formData) {
        return axios.post(ARTICLE_API_URL, formData)
    }
}

export default new CarrosseriesServices










