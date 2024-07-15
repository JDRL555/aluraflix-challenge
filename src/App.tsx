import { useReducer } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { AppContext } from './context/AppContext'
import { initialState, reducer } from './reducer/AppReducer'

import Layout from './layouts/Layout/Index'

import HomePage from './pages/HomePage/Index'
import CreatePage from './pages/CreatePage/Index'
import VideoPage from './pages/VideoPage/Index'

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <Routes>
          <Route  
            path='/'
            element={
              <Layout>
                <HomePage /> 
              </Layout> 
            }
          />
          <Route  
            path='/videos/new'
            element={
              <Layout>
                <CreatePage /> 
              </Layout> 
            }
          />
          <Route  
            path='/video/:id'
            element={
              <Layout>
                <VideoPage /> 
              </Layout> 
            }
          />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  )
}
