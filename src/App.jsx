import { useState } from "react";
import SearchBox from "./SearchBox";
import FavoriteCities from "./FavoriteCities";
import "./App.css";

function App() {
  const [selectedCity, setSelectedCity] =
    useState("");

  const handleCitySelect = (city) => {
    setSelectedCity(city);
  };

  return (
    <>

      <SearchBox
        selectedCity={selectedCity}
        onCitySearch={handleCitySelect}
      />

      <FavoriteCities
        onCitySelect={handleCitySelect}
      />

    </>
  );
}

export default App;