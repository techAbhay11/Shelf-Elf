
import axios from 'axios';

export const searchBook = (query) => {
  return (dispatch, getState) => {
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=10&key=AIzaSyAbXsqqvShVCLR3zHTr_01CD1nkkCB5Bto`)
      .then(res => {
        // console.log(res.data);
        dispatch({
          type: 'SEARCH_BOOK',
          result: res.data.items
        });
      });
  }
}
