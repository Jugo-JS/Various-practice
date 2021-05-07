import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from './actions'

const reducer = (state, action) => {
    switch(action.type) {
      case 'SET-LOADING':
        return {...state, isLoading: true}
      case 'SET_STORIES':
        return {...state, news: action.payload }
      case 'HANDLE_PAGE':
        return {...state, page_number: action.payload}
      default:
        return {...state}
    }
  }
export default reducer
