import React, { useEffect, useState } from 'react'
import { GiCook, GiCookingPot } from "react-icons/gi";
import CategoriesSlider from '../componets/CategoriesSlider';
import { Link } from 'react-router-dom';
import "../styles/HomePage.scss"

const HomePage = () => {

  const [searchedMeal, setSearchedMeal] = useState("");
  const [meals, setMeals] = useState([]);

  const fetchMeals = async () => {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchedMeal}`);
      const data = await response.json();
      setMeals(data.meals);
    } catch (error) {
      console.log(error);
      console.log(error.message);
    }
  }

  useEffect(() => {
    fetchMeals()
  }, [searchedMeal])


  return (
    <div className='homepage-container'>
      <div className='top-bar'>
        <div className='search-bar'>
          <button type='submit'><GiCook className='button-icon' /></button>
          <input type="text" placeholder='what do you want to cook 🔎' onChange={(e) => setSearchedMeal(e.target.value)} />
        </div>
        <div>
          <CategoriesSlider />
        </div>
      </div>
      <div className='show-meals'>
        {meals?.map((meal) => (
          <div key={meal.idMeal} className='meal'>
            <img src={meal.strMealThumb} alt="" />
            <div className='text-item'>
              <div>
                <p className='name'>{meal.strMeal}</p>
                <p className='category'>{meal.strCategory}</p>
              </div>
              <p className='country'>{meal.strArea}</p>
              <Link className='route' to={`/meal/details/${meal.idMeal}`}><GiCookingPot className='icon' /></Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HomePage
