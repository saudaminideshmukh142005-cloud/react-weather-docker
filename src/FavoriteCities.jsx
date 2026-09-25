import { useEffect, useState } from "react";

function FavoriteCities({ onCitySelect }) {
  const [favorites, setFavorites] = useState(
    []
  );

  // -----------------------------------------
  // Load favorites from localStorage
  // -----------------------------------------
  useEffect(() => {
    const savedFavorites =
      localStorage.getItem(
        "favoriteCities"
      );

    if (savedFavorites) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setFavorites(
        JSON.parse(savedFavorites)
      );
    }
  }, []);

  // -----------------------------------------
  // Save favorites to localStorage
  // -----------------------------------------
  useEffect(() => {
    localStorage.setItem(
      "favoriteCities",
      JSON.stringify(favorites)
    );
  }, [favorites]);

  // -----------------------------------------
  // Add city to favorites
  // -----------------------------------------
  const addFavorite = (city) => {
    if (!city) return;

    if (favorites.includes(city)) {
      return;
    }

    setFavorites([
      ...favorites,
      city,
    ]);
  };

  // -----------------------------------------
  // Remove city
  // -----------------------------------------
  const removeFavorite = (city) => {
    const updatedFavorites =
      favorites.filter(
        (favorite) =>
          favorite !== city
      );

    setFavorites(updatedFavorites);
  };

  return (
    <div className="favorites-section">

      <div className="favorites-header">
        <h2>⭐ Favorite Cities</h2>

        <p>
          Save your frequently searched
          cities
        </p>
      </div>

      {/* No favorites */}
      {favorites.length === 0 && (
        <div className="no-favorites">
          <p>
            No favorite cities yet.
          </p>

          <small>
            Search a city and add it
            to your favorites.
          </small>
        </div>
      )}

      {/* Favorite Cities */}
      {favorites.length > 0 && (
        <div className="favorites-list">

          {favorites.map((city) => (
            <div
              key={city}
              className="favorite-city"
            >

              <button
                className="favorite-name"
                onClick={() =>
                  onCitySelect(city)
                }
              >
                📍 {city}
              </button>

              <button
                className="remove-favorite"
                onClick={() =>
                  removeFavorite(city)
                }
                title="Remove favorite"
              >
                ❌
              </button>

            </div>
          ))}

        </div>
      )}

      {/* Add Favorite */}
      <button
        className="add-favorite-button"
        onClick={() => {
          const city =
            prompt(
              "Enter city name to add as favorite:"
            );

          if (city?.trim()) {
            addFavorite(
              city.trim()
            );
          }
        }}
      >
        ⭐ Add Favorite City
      </button>

    </div>
  );
}

export default FavoriteCities;