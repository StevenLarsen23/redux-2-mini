import axios from "axios";

const initialState = {
  articles: [],
  loading: false,
};

const REQUEST_ARTICLES = "REQUEST_ARTICLES";

export function requestArticles(){
    let articles = axios.get('/api/medium').then(res => res.data)
    return {
        type: REQUEST_ARTICLES,
        payload: articles
    }
}

export default function(state = initialState, action){
    switch (action.type){
        case REQUEST_ARTICLES + "_PENDING":
            return {...state, loading: true};
        case REQUEST_ARTICLES + "_REJECTED":
            return {...state, loading: false};
        case REQUEST_ARTICLES + "_FULFILLED": 
            return {...state, loading: false, articles: action.payload};
        default:
            return state;
    }
}
