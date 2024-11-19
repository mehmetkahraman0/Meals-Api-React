import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import "../styles/CategoriesSlider.scss"

import { TbPlayerTrackNextFilled } from "react-icons/tb";


const CategoriesSlider = ({ width }) => {
    const [category, setCategory] = useState("")
    const [mealsCategories, setMealsCategories] = useState([]);

    const fetchMealsCategories = async () => {
        try {
            const response = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
            const data = await response.json();
            setMealsCategories(data.categories)
        } catch (error) {
            console.log(error);
            console.log(error.message);
        }
    }

    useEffect(() => {
        fetchMealsCategories()
    }, [])


    return (
        <div className='categories' style={{ width: width }}>
            <div>
                <p>Slider</p>
                <p>Me</p>
                <TbPlayerTrackNextFilled className='icon' />
            </div>
            {mealsCategories?.map((category) => (
                // button ya da link eklnicek kontrol et
                <Link to={`/category/${category.strCategory}`} key={category.idCategory} onClick={() => setCategory(category.strCategory)} className='category'>
                    <img src={category.strCategoryThumb} />
                    <p>{category.strCategory}</p>
                </Link>
            ))}
        </div>
    )
}

export default CategoriesSlider
