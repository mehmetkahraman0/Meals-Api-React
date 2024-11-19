import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import "../styles/MealDetailPage.scss";

const MealDetailsPage = () => {

    const { id } = useParams();
    console.log(id);

    const [details, setDetails] = useState()

    const fetchMealDetails = async (idMeal) => {
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);
            const data = await response.json();
            console.log(data);
            setDetails(data.meals[0]);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchMealDetails(id)
    }, [id])

    console.log(details);

    return (
        <div className='details-container'>
            <div className="container">
                <div className='img-block'>
                    <img src={details?.strMealThumb} alt="the meal image" />
                    <div className='text-bar'>
                        <p><p>The Meal Name : </p> {details?.strMeal}</p>
                        <p><p>Category : </p> {details?.strCategory}</p>
                        <p><p>Meal is Country </p> {details?.strArea}</p>
                    </div>
                </div>
                <div className='descriptions'>
                    <div>
                        <h1>Ingredients</h1>
                        <ul className='ingredients'>
                            <li className="item"> <p className='ingredient'>{details?.strIngredient2} </p>  {details?.strMeasure2}</li>
                            <li className="item"> <p className='ingredient'>{details?.strIngredient3} </p>  {details?.strMeasure3}</li>
                            <li className="item"> <p className='ingredient'>{details?.strIngredient4} </p>  {details?.strMeasure4}</li>
                            <li className="item"> <p className='ingredient'>{details?.strIngredient5} </p>  {details?.strMeasure5}</li>
                            <li className="item"> <p className='ingredient'>{details?.strIngredient6} </p>  {details?.strMeasure6}</li>
                            <li className="item"> <p className='ingredient'>{details?.strIngredient7} </p>  {details?.strMeasure7}</li>
                            <li className="item"> <p className='ingredient'>{details?.strIngredient8} </p>  {details?.strMeasure8}</li>
                            <li className="item"> <p className='ingredient'>{details?.strIngredient9} </p>  {details?.strMeasure9}</li>
                            <li className="item"> <p className='ingredient'>{details?.strIngredient10} </p>  {details?.strMeasure10}</li>
                            <li className="item"> <p className='ingredient'>{details?.strIngredient11} </p>  {details?.strMeasure11}</li>
                            <li className="item"> <p className='ingredient'>{details?.strIngredient12} </p>  {details?.strMeasure12}</li>
                            <li className="item"> <p className='ingredient'>{details?.strIngredient13} </p>  {details?.strMeasure13}</li>
                            <li className="item"> <p className='ingredient'>{details?.strIngredient14} </p>  {details?.strMeasure14}</li>
                            <li className="item"> <p className='ingredient'>{details?.strIngredient15} </p>  {details?.strMeasure15}</li>
                            <li className="item"> <p className='ingredient'>{details?.strIngredient16} </p>  {details?.strMeasure16}</li>
                            <li className="item"> <p className='ingredient'>{details?.strIngredient17} </p>  {details?.strMeasure17}</li>
                            <li className="item"> <p className='ingredient'>{details?.strIngredient18} </p>  {details?.strMeasure18}</li>
                            <li className="item"> <p className='ingredient'>{details?.strIngredient19} </p>  {details?.strMeasure19}</li>
                            <li className="item"> <p className='ingredient'>{details?.strIngredient20} </p>  {details?.strMeasure20}</li>
                        </ul>
                    </div>
                    <p className='instructions'>{details?.strInstructions}</p>
                </div>
            </div>
        </div>
    )
}

export default MealDetailsPage
