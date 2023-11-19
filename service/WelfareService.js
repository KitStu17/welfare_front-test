import axios from 'axios';
import {BACKEND_URL} from '../global';

class WelfareService {
  getAllDefaultData = async () => {
    return await axios
      .get(`${BACKEND_URL}/welfare/all`, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(response => {
        return response.data;
      });
  };

  getAllDataByUserInfo = async token => {
    try {
      return await axios
        .get(`${BACKEND_URL}/welfare/user`, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: token,
          },
        })
        .then(response => {
          return response.data;
        });
    } catch (e) {
      console.log(e);
    }
  };

  getDataBySearch = async keyword => {
    try {
      return await axios
        .get(`${BACKEND_URL}/welfare/search/${keyword}`, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then(response => {
          return response.data;
        });
    } catch (e) {
      console.log(e);
    }
  };
}

const mainPageService = new WelfareService();

export default mainPageService;
