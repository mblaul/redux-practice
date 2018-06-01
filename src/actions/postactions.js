import { FETCH_POSTS, NEW_POST } from "./types";
import axios from 'axios';

export const fetchPosts = () => dispatch => {
  fetch("https://jsonplaceholder.typicode.com/posts/")
    .then(response => response.json())
    .then(posts =>
      dispatch({
        type: FETCH_POSTS,
        payload: posts
      })
    );
};

export const createPost = postData => dispatch => {
    console.log('entered post actions');
    axios.post(`https://jsonplaceholder.typicode.com/posts`, { postData })
    .then(res => 
        dispatch({
            type: NEW_POST,
            payload: res.data.postData
        })
    );

  };

