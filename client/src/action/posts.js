import * as api from '../api';

// Action creators
export const getPosts = () => async (dispatch) => {
    try {
        const {response} = await api.fetchPosts();
        dispatch({type:'FETCH_ALL',payload: response});
    } catch (error) {
        console.log(error.message);
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const {response} = await api.createPost(post);
        dispatch({type:'CREATE',payload: response});
    } catch (error) {
        console.log(error.message);
    }
}
