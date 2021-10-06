import axios from 'axios'
import {API} from '../../../config'

const CATEGORY_API_URL = `${API}/api/category/item/`;


class CategoryServices {
    getAllCategory(){
        return axios.get(CATEGORY_API_URL+'getAllCategoryItem')
    }
    postCategory(newCategory) {
        return axios.post(CATEGORY_API_URL, newCategory)
    }
    updateCategory(formaData,id) {
        return axios.put(CATEGORY_API_URL,{formaData,id} )
    }
    getImage(id){
        return axios.get(CATEGORY_API_URL+'viewImageCategoryItemById/'+id)
    }
    getCategoryById(id){
        return axios.get(CATEGORY_API_URL +'getCategoryItemById/'+id)
    }

}


export default new CategoryServices