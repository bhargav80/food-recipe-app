import React, { useState, useEffect } from 'react';
import RecipeList from '../components/RecipeList';
import { SearchBar } from '../components/SearchBar';
import axios from 'axios';

const Home = () => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    useEffect(() => {
        const fetchRecipes = async () => {
            setLoading(true);
            try {
                const url = searchQuery.trim()
                    ? `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`
                    : `https://www.themealdb.com/api/json/v1/1/search.php?s=`;
                const response = await axios.get(url);
                console.log('API Response:', response.data);
                const limitedRecipes = response.data.meals ? response.data.meals.slice(0, 10) : [];
                setRecipes(limitedRecipes);
            } catch (error) {
                console.log("Error fetching data", error);
            } finally {
                setLoading(false);
            }
        };
        fetchRecipes();
    }, [searchQuery]);

    return (
        <div>
            <SearchBar setSearchQuery={setSearchQuery}></SearchBar>
            {loading ? <p>Loading...</p> : <RecipeList recipes={recipes} />}
        </div>
    )
}

export default Home;