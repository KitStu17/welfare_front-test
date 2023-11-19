import axios from 'axios';
import {BACKEND_URL} from '../global';

class BookmarkService {
  registerBookmark = async (token, welfareServId) => {
    const response = await axios.post(
      `${BACKEND_URL}/bookmark/register?servId=${welfareServId}`,
      null,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
      },
    );
    return response.data;
  };

  deleteBookmark = (token, bookmarkId) => {
    console.log(token);
    console.log(bookmarkId);
    return axios.delete(
      `${BACKEND_URL}/bookmark/delete?bookmarkId=${bookmarkId}`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
      },
    );
  };
}

const bookmarkService = new BookmarkService();

export default bookmarkService;
