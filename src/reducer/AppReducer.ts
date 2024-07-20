import { State, Action } from '../types/state.types'

const initialState: State = {
  categories: [],
  videos: [],
  error: ""
}

const reducer = (state: State, action: Action): State  => {
  switch(action.type) {
    case "GET_VIDEOS": {
      return {
        ...state,
        videos: action.data
      }
    }

    case "GET_CATEGORIES": {
      return {
        ...state,
        categories: action.data
      }
    }

    case "POST_VIDEOS": {
      return {
        ...state,
        videos: [ 
          ...state.videos, {
            id: state.videos.length + 1,
            title: action.data.title,
            description: action.data.description,
            cover_url: action.data.cover_url,
            video_url: action.data.video_url,
            banner_url: action.data.banner_url,
            created_at: action.data.created_at,
            categoryId: action.data.categoryId,
            category: action.data.category,
          }
        ]
      }
    }

    case "POST_CATEGORIES": {
      return {
        ...state,
        categories: [
          ...state.categories, {
            id: state.categories.length + 1,
            name: action.data.name,
            color: action.data.color,
          }
        ]
      }
    }

    case "PATCH_VIDEOS": {
      if(action.error) {
        return {
          ...state,
          error: action.error
        }
      } 

      return {
        ...state,
        videos: state.videos.map(video => {
          if(video.id === action.data?.id) {
            return action.data
          } else {
            return video
          }
        })
      }
    }

    case "PATCH_CATEGORIES": {
      if(action.error) {
        return {
          ...state,
          error: action.error
        }
      }

      return {
        ...state,
        categories: state.categories.map(category => {
          if(category.id === action.data?.id) {
            return action.data
          } else {
            return category
          }
        })
      }
    }

    case "DELETE_VIDEOS": {
      if(action.error) {
        return {
          ...state,
          error: action.error
        }
      }

      return {
        ...state,
        videos: state.videos.filter(video => video.id !== action.id)
      }
    }

    case "DELETE_CATEGORIES": {
      if(action.error) {
        return {
          ...state,
          error: action.error
        }
      }

      return {
        ...state,
        categories: state.categories.filter(category => category.id !== action.id)
      }
    }
  }
}

export { initialState, reducer }