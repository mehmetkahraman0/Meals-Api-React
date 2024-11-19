import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import CategoriesSlider from '../componets/CategoriesSlider';
import { FaHome } from "react-icons/fa";
import { GiCookingPot } from "react-icons/gi";

import "../styles/CategoriMealPage.scss"

const CategoriMealPage = () => {

  const { category } = useParams();

  const [meals, setMeals] = useState([])

  const fetchMealCategory = async (category) => {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
      const data = await response.json();
      console.log(data);
      setMeals(data.meals)
    } catch (error) {
      console.log(error);
      console.log(error.message);
    }
  }

  useEffect(() => {
    fetchMealCategory(category)
  }, [category])

  return (
    <div className='categories-container'>
      <div className="slider" >
        <Link to={"/"} className='route'><FaHome className='icon' />Home</Link>
        <CategoriesSlider width="80vw" />
      </div>
      <div className='cate'>
        <p className='name'>{category}</p>
        <div className='category-meals'>
          {meals?.map((meal) => (
            <div key={meal.idMeal} className='category-meal'>
              <img src={meal.strMealThumb} alt="" />
              <div className='text'>
                <p>{meal.strMeal}</p>
                <Link className='route' to={`/meal/details/${meal.idMeal}`}><GiCookingPot className='icon' /></Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CategoriMealPage
