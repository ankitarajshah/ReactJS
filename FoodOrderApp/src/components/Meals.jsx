// import { useEffect, useState } from "react";
import MealItem from "./MealItem";
import useHttp from "./hooks/useHttp";
import Error from "./Error";
const requestConfig = {};
export default function Meals() {
  const {
    data: loadedMeals,
    isLoading,
    error,
  } = useHttp("http://localhost:3000/meals", requestConfig, []);
  if (isLoading) {
    return <p className="center">Fetching...Meals</p>;
  }

  console.log(loadedMeals);
  if (!loadedMeals) {
    return <p>No meals found</p>;
  }

  if (error) {
    return <Error title="Failed to fetch meals" message={error} />;
  }
  // const [loadedMeals, setLoadedMeal] = useState([]);

  // useEffect(() => {
  //   async function fetchMeals() {
  //     const response = await fetch("http://localhost:3000/meals");
  //     console.log(response);
  //     if (!response.ok) {
  //     }
  //     const meals = await response.json();
  //     setLoadedMeal(meals);
  //     console.log(meals);
  //   }
  //   fetchMeals();
  // }, []);

  return (
    <ul id="meals">
      {/* {loadedMeals.map((meal) => (
        <li key={meal.id}>{meal.name}</li>
      ))} */}

      {loadedMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
