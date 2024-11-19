import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CategoriMealPage from './pages/CategoriMealPage'
import MealDetailsPage from './pages/MealDetailsPage'

function App() {

  return (
    <div>
      <Routes>
        <Route element={<HomePage/>} path=''/>
         <Route element={<CategoriMealPage />} path='/category/:category'/>
        <Route element={<MealDetailsPage/>} path='/meal/details/:id'/>
        {/* <Route element={} path=''/>
        <Route element={} path=''/>  */}

      </Routes>
    </div>
  )
}

export default App
