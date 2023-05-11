import axios from "axios";
const API_BASE_URL = `${process.env.REACT_APP_API_URL}/stores/`;

class StoreService {
    getStoreWithFilter(params) {
        //console.log(`${API_BASE_URL}?${params}`);
        return axios.get(`${API_BASE_URL}?${params}`);
    }

    getStoreById(id) {
        return axios.get(`${API_BASE_URL}${id}/`);
    }

    getFoodByStoreId(id) {
        return axios.get(`${API_BASE_URL}${id}/foods/`);
    }

    getMenusByStoreId(id) {
        return axios.get(`${API_BASE_URL}${id}/menus/`);
    }

    approveStore(id) {
        return axios.patch(`${API_BASE_URL}${id}/active/`);
    }
}

export default new StoreService();