// import {
//   Box,
//   Button,
//   Checkbox,
//   FormControl,
//   FormControlLabel,
//   InputLabel,
//   MenuItem,
//   Paper,
//   Select,
//   TextField,
//   Typography,
// } from "@mui/material";

// import { useState } from "react";

// export default function SearchBox() {
//    const API_URL = "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}"
//   const [weatherSearch, setWeatherSearch] = useState(null);

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     const formData = new FormData(event.currentTarget);

//     const city = formData.get("city");
//     const unit = formData.get("unit");
//     const days = formData.get("days");

//     const humidity = formData.get("humidity") === "on";
//     const wind = formData.get("wind") === "on";
//     const details = formData.get("details") === "on";

//     const searchData = {
//       city,
//       unit,
//       days,
//       humidity,
//       wind,
//       details,
//     };

//     console.log("Weather Search:", searchData);

//     setWeatherSearch(searchData);
//   };

//   const handleReset = (event) => {
//     event.currentTarget.form.reset();

//     setWeatherSearch(null);
//   };

//   return (
//     <Paper
//       elevation={4}
//       sx={{
//         maxWidth: 550,
//         margin: "40px auto",
//         padding: 4,
//         borderRadius: 3,
//       }}
//     >
//       {/* Heading */}
//       <Typography
//         variant="h4"
//         component="h1"
//         align="center"
//         fontWeight="bold"
//         gutterBottom
//       >
//         🌤️ Weather App
//       </Typography>

//       <Typography
//         variant="body1"
//         color="text.secondary"
//         align="center"
//         sx={{ mb: 3 }}
//       >
//         Search for the current weather and forecast
//       </Typography>

//       {/* Form */}
//       <Box component="form" onSubmit={handleSubmit}>
//         {/* City */}
//         <TextField
//           fullWidth
//           id="city"
//           name="city"
//           label="City Name"
//           placeholder="e.g. Pune"
//           variant="outlined"
//           required
//           sx={{ mb: 2 }}
//         />

//         {/* Temperature Unit */}
//         <FormControl fullWidth sx={{ mb: 2 }}>
//           <InputLabel id="unit-label">
//             Temperature Unit
//           </InputLabel>

//           <Select
//             labelId="unit-label"
//             id="unit"
//             name="unit"
//             label="Temperature Unit"
//             defaultValue="celsius"
//           >
//             <MenuItem value="celsius">
//               Celsius (°C)
//             </MenuItem>

//             <MenuItem value="fahrenheit">
//               Fahrenheit (°F)
//             </MenuItem>
//           </Select>
//         </FormControl>

//         {/* Forecast Days */}
//         <FormControl fullWidth sx={{ mb: 2 }}>
//           <InputLabel id="days-label">
//             Forecast Days
//           </InputLabel>

//           <Select
//             labelId="days-label"
//             id="days"
//             name="days"
//             label="Forecast Days"
//             defaultValue="5"
//           >
//             <MenuItem value="1">Today</MenuItem>
//             <MenuItem value="3">3 Days</MenuItem>
//             <MenuItem value="5">5 Days</MenuItem>
//             <MenuItem value="7">7 Days</MenuItem>
//           </Select>
//         </FormControl>

//         {/* Additional Information */}
//         <Typography
//           variant="subtitle1"
//           fontWeight="bold"
//           sx={{ mb: 1 }}
//         >
//           Include Information
//         </Typography>

//         <FormControlLabel
//           control={
//             <Checkbox
//               name="humidity"
//               defaultChecked
//             />
//           }
//           label="Humidity"
//         />

//         <FormControlLabel
//           control={
//             <Checkbox
//               name="wind"
//               defaultChecked
//             />
//           }
//           label="Wind Speed"
//         />

//         <FormControlLabel
//           control={
//             <Checkbox
//               name="details"
//               defaultChecked
//             />
//           }
//           label="Weather Details"
//         />

//         {/* Buttons */}
//         <Box
//           sx={{
//             display: "flex",
//             gap: 2,
//             mt: 3,
//           }}
//         >
//           {/* Submit */}
//           <Button
//             fullWidth
//             variant="contained"
//             type="submit"
//             size="large"
//             sx={{
//               py: 1.5,
//               borderRadius: 2,
//               fontWeight: "bold",
//             }}
//           >
//             🔍 Search Weather
//           </Button>

//           {/* Reset */}
//           <Button
//             fullWidth
//             variant="outlined"
//             color="error"
//             type="button"
//             size="large"
//             onClick={handleReset}
//             sx={{
//               py: 1.5,
//               borderRadius: 2,
//               fontWeight: "bold",
//             }}
//           >
//             Reset All
//           </Button>
//         </Box>
//       </Box>

//       {/* Search Result */}
//       {weatherSearch && (
//         <Paper
//           elevation={2}
//           sx={{
//             mt: 4,
//             p: 3,
//             borderRadius: 2,
//           }}
//         >
//           <Typography
//             variant="h6"
//             fontWeight="bold"
//             gutterBottom
//           >
//             🔎 Search Details
//           </Typography>

//           <Typography>
//             <strong>City:</strong>{" "}
//             {weatherSearch.city}
//           </Typography>

//           <Typography>
//             <strong>Temperature:</strong>{" "}
//             {weatherSearch.unit === "celsius"
//               ? "Celsius (°C)"
//               : "Fahrenheit (°F)"}
//           </Typography>

//           <Typography>
//             <strong>Forecast:</strong>{" "}
//             {weatherSearch.days === "1"
//               ? "Today"
//               : `${weatherSearch.days} Days`}
//           </Typography>

//           <Typography>
//             <strong>Humidity:</strong>{" "}
//             {weatherSearch.humidity ? "Yes" : "No"}
//           </Typography>

//           <Typography>
//             <strong>Wind Speed:</strong>{" "}
//             {weatherSearch.wind ? "Yes" : "No"}
//           </Typography>

//           <Typography>
//             <strong>Weather Details:</strong>{" "}
//             {weatherSearch.details ? "Yes" : "No"}
//           </Typography>
//         </Paper>
//       )}
//     </Paper>
//   );
// }
// import {
//   Box,
//   Button,
//   Checkbox,
//   FormControl,
//   FormControlLabel,
//   InputLabel,
//   MenuItem,
//   Paper,
//   Select,
//   TextField,
//   Typography,
// } from "@mui/material";

// import { useState } from "react";

// export default function SearchBox() {
//   // Get API details from .env
//   const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
//   const API_URL = import.meta.env.VITE_OPENWEATHER_API_URL;

//   const [weatherSearch, setWeatherSearch] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     const formData = new FormData(event.currentTarget);

//     const city = formData.get("city")?.trim();
//     const unit = formData.get("unit");

//     const humidity = formData.get("humidity") === "on";
//     const wind = formData.get("wind") === "on";
//     const details = formData.get("details") === "on";

//     // Check environment variables
//     if (!API_KEY || !API_URL) {
//       setError(
//         "API configuration is missing. Please check your .env file."
//       );
//       return;
//     }

//     // Check city
//     if (!city) {
//       setError("Please enter a city name.");
//       return;
//     }

//     setLoading(true);
//     setError("");
//     setWeatherSearch(null);

//     // OpenWeatherMap unit
//     const apiUnit =
//       unit === "celsius" ? "metric" : "imperial";

//     // Create API URL
//     const requestURL =
//       `${API_URL}?q=${encodeURIComponent(city)}` +
//       `&appid=${API_KEY}` +
//       `&units=${apiUnit}`;

//     console.log("API Request:", requestURL);

//     try {
//       const response = await fetch(requestURL);

//       // Handle API errors
//       if (!response.ok) {
//         if (response.status === 404) {
//           throw new Error(
//             "City not found. Please enter a valid city name."
//           );
//         }

//         if (response.status === 401) {
//           throw new Error(
//             "Invalid API key. Please check your OpenWeatherMap API key."
//           );
//         }

//         throw new Error(
//           "Unable to fetch weather data. Please try again."
//         );
//       }

//       const data = await response.json();

//       // Extract required weather information
//       const searchData = {
//         city: data.name,
//         country: data.sys.country,

//         temperature: data.main.temp,
//         feelsLike: data.main.feels_like,

//         humidity: data.main.humidity,

//         windSpeed: data.wind.speed,

//         weather: data.weather[0].description,

//         icon: data.weather[0].icon,

//         unit,

//         showHumidity: humidity,
//         showWind: wind,
//         showDetails: details,
//       };

//       console.log("Weather Data:", searchData);

//       setWeatherSearch(searchData);
//     } catch (error) {
//       console.error("Weather API Error:", error);

//       setError(
//         error.message ||
//           "Something went wrong while fetching weather data."
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleReset = (event) => {
//     event.currentTarget.form.reset();

//     setWeatherSearch(null);
//     setError("");
//   };

//   return (
//     <Paper
//       elevation={4}
//       sx={{
//         maxWidth: 550,
//         margin: "40px auto",
//         padding: 4,
//         borderRadius: 3,
//       }}
//     >
//       {/* Heading */}
//       <Typography
//         variant="h4"
//         component="h1"
//         align="center"
//         fontWeight="bold"
//         gutterBottom
//       >
//         🌤️ Weather App
//       </Typography>

//       <Typography
//         variant="body1"
//         color="text.secondary"
//         align="center"
//         sx={{ mb: 3 }}
//       >
//         Search for the current weather
//       </Typography>

//       {/* Form */}
//       <Box
//         component="form"
//         onSubmit={handleSubmit}
//       >
//         {/* City */}
//         <TextField
//           fullWidth
//           id="city"
//           name="city"
//           label="City Name"
//           placeholder="e.g. Pune"
//           variant="outlined"
//           required
//           sx={{ mb: 2 }}
//         />

//         {/* Temperature Unit */}
//         <FormControl
//           fullWidth
//           sx={{ mb: 2 }}
//         >
//           <InputLabel id="unit-label">
//             Temperature Unit
//           </InputLabel>

//           <Select
//             labelId="unit-label"
//             id="unit"
//             name="unit"
//             label="Temperature Unit"
//             defaultValue="celsius"
//           >
//             <MenuItem value="celsius">
//               Celsius (°C)
//             </MenuItem>

//             <MenuItem value="fahrenheit">
//               Fahrenheit (°F)
//             </MenuItem>
//           </Select>
//         </FormControl>

//         {/* Additional Information */}
//         <Typography
//           variant="subtitle1"
//           fontWeight="bold"
//           sx={{ mb: 1 }}
//         >
//           Include Information
//         </Typography>

//         <FormControlLabel
//           control={
//             <Checkbox
//               name="humidity"
//               defaultChecked
//             />
//           }
//           label="Humidity"
//         />

//         <FormControlLabel
//           control={
//             <Checkbox
//               name="wind"
//               defaultChecked
//             />
//           }
//           label="Wind Speed"
//         />

//         <FormControlLabel
//           control={
//             <Checkbox
//               name="details"
//               defaultChecked
//             />
//           }
//           label="Weather Details"
//         />

//         {/* Buttons */}
//         <Box
//           sx={{
//             display: "flex",
//             gap: 2,
//             mt: 3,
//           }}
//         >
//           {/* Search */}
//           <Button
//             fullWidth
//             variant="contained"
//             type="submit"
//             size="large"
//             disabled={loading}
//             sx={{
//               py: 1.5,
//               borderRadius: 2,
//               fontWeight: "bold",
//             }}
//           >
//             {loading
//               ? "Searching..."
//               : "🔍 Search Weather"}
//           </Button>

//           {/* Reset */}
//           <Button
//             fullWidth
//             variant="outlined"
//             color="error"
//             type="button"
//             size="large"
//             onClick={handleReset}
//             sx={{
//               py: 1.5,
//               borderRadius: 2,
//               fontWeight: "bold",
//             }}
//           >
//             Reset All
//           </Button>
//         </Box>
//       </Box>

//       {/* Error */}
//       {error && (
//         <Typography
//           color="error"
//           align="center"
//           sx={{ mt: 3 }}
//         >
//           ❌ {error}
//         </Typography>
//       )}

//       {/* Weather Result */}
//       {weatherSearch && (
//         <Paper
//           elevation={3}
//           sx={{
//             mt: 4,
//             p: 3,
//             borderRadius: 2,
//             textAlign: "center",
//           }}
//         >
//           {/* City */}
//           <Typography
//             variant="h5"
//             fontWeight="bold"
//           >
//             📍 {weatherSearch.city},{" "}
//             {weatherSearch.country}
//           </Typography>

//           {/* Weather Icon */}
//           <Box
//             component="img"
//             src={`https://openweathermap.org/img/wn/${weatherSearch.icon}@2x.png`}
//             alt={weatherSearch.weather}
//             sx={{
//               width: 100,
//               height: 100,
//             }}
//           />

//           {/* Temperature */}
//           <Typography
//             variant="h3"
//             fontWeight="bold"
//           >
//             {weatherSearch.temperature}°
//             {weatherSearch.unit === "celsius"
//               ? "C"
//               : "F"}
//           </Typography>

//           {/* Weather Description */}
//           {weatherSearch.showDetails && (
//             <Typography
//               variant="h6"
//               sx={{
//                 textTransform: "capitalize",
//                 mb: 2,
//               }}
//             >
//               {weatherSearch.weather}
//             </Typography>
//           )}

//           {/* Feels Like */}
//           <Typography>
//             <strong>Feels Like:</strong>{" "}
//             {weatherSearch.feelsLike}°
//             {weatherSearch.unit === "celsius"
//               ? "C"
//               : "F"}
//           </Typography>

//           {/* Humidity */}
//           {weatherSearch.showHumidity && (
//             <Typography>
//               <strong>💧 Humidity:</strong>{" "}
//               {weatherSearch.humidity}%
//             </Typography>
//           )}

//           {/* Wind */}
//           {weatherSearch.showWind && (
//             <Typography>
//               <strong>💨 Wind Speed:</strong>{" "}
//               {weatherSearch.windSpeed}{" "}
//               {weatherSearch.unit === "celsius"
//                 ? "m/s"
//                 : "mph"}
//             </Typography>
//           )}
//         </Paper>
//       )}
//     </Paper>
//   );
// }
// import { useState } from "react";

// function SearchBox() {
//   const [city, setCity] = useState("");
//   const [weather, setWeather] = useState(null);


//   const getWeather = async () => {
//     if (!city) return;

//     try {
//       const response = await fetch(
//         "https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric"
//       );

//       const data = await response.json();

//       if (response.ok) {
//         setWeather(data);
//       } else {
//         alert(data.message);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div>
//       <h1>🌤️ Weather App</h1>

//       <input
//         type="text"
//         placeholder="Enter city name"
//         value={city}
//         onChange={(e) => setCity(e.target.value)}
//       />

//       <button onClick={getWeather}>Search</button>

//       {weather && (
//         <div>
//           <h2>{weather.name}</h2>

//           <p>🌡️ Temperature: {weather.main.temp} °C</p>
//           <p>💧 Humidity: {weather.main.humidity}%</p>
//           <p>💨 Wind Speed: {weather.wind.speed} m/s</p>
//           <p>☁️ Weather: {weather.weather[0].description}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default SearchBox;


// import { useState } from "react";

// function SearchBox() {
//   const [city, setCity] = useState("");
//   const [weather, setWeather] = useState(null);
//   const [unit, setUnit] = useState("metric");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   // Get API details from .env
//   const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
//   const API_URL = import.meta.env.VITE_WEATHER_API_URL;
//   console.log("API KEY:", API_KEY);
//   console.log("API URL:", API_URL);
//   // Fetch weather
//   const getWeather = async (searchCity = city, selectedUnit = unit) => {
//     if (!searchCity.trim()) {
//       setError("Please enter a city name.");
//       return;
//     }

//     setLoading(true);
//     setError("");

//     try {
//       const response = await fetch(
//         `${API_URL}?q=${searchCity}&appid=${API_KEY}&units=${selectedUnit}`
//       );

//       const data = await response.json();

//       if (response.ok) {
//         setWeather(data);
//       } else {
//         setWeather(null);

//         if (response.status === 401) {
//           setError("Invalid API key. Please check your OpenWeather API key.");
//         } else if (response.status === 404) {
//           setError("City not found. Please check the city name.");
//         } else {
//           setError(data.message || "Something went wrong.");
//         }
//       }
//     } catch (error) {
//       console.error(error);
//       setWeather(null);
//       setError(
//         "Unable to fetch weather. Please check your internet connection."
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Search when Enter is pressed
//   const handleKeyDown = (e) => {
//     if (e.key === "Enter") {
//       getWeather();
//     }
//   };

//   // Change Celsius / Fahrenheit
//   const changeUnit = (newUnit) => {
//     setUnit(newUnit);

//     if (city.trim() && weather) {
//       getWeather(city, newUnit);
//     }
//   };

//   // Convert timestamp to readable time
//   const formatTime = (timestamp) => {
//     return new Date(timestamp * 1000).toLocaleTimeString([], {
//       hour: "2-digit",
//       minute: "2-digit",
//     });
//   };
//   const getCurrentLocation = () => {
//   if (!navigator.geolocation) {
//     setError("Geolocation is not supported by your browser.");
//     return;
//   }

//   setLoading(true);
//   setError("");

//   navigator.geolocation.getCurrentPosition(
//     (position) => {
//       const latitude = position.coords.latitude;
//       const longitude = position.coords.longitude;

//       getWeatherByLocation(latitude, longitude);
//     },
//     (error) => {
//       setLoading(false);

//       if (error.code === error.PERMISSION_DENIED) {
//         setError("Location permission was denied.");
//       } else if (error.code === error.POSITION_UNAVAILABLE) {
//         setError("Location information is unavailable.");
//       } else if (error.code === error.TIMEOUT) {
//         setError("Location request timed out.");
//       } else {
//         setError("Unable to get your location.");
//       }
//     }
//   );
// }; 
// const getWeatherByLocation = async (latitude, longitude) => {
//   try {
//     const response = await fetch(
//       `${API_URL}?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=${unit}`
//     );

//     const data = await response.json();

//     if (response.ok) {
//       setWeather(data);

//       // Update city input with detected city
//       setCity(data.name);
//     } else {
//       setWeather(null);
//       setError(data.message || "Unable to fetch weather.");
//     }
//   } catch (error) {
//     setWeather(null);
//     setError("Unable to fetch weather.");
//   } finally {
//     setLoading(false);
//   }
// };

//   // Weather icon
//   const getWeatherIcon = (icon) => {
//     return `https://openweathermap.org/img/wn/${icon}@2x.png`;
//   };


//   return (
//     <div style={styles.page}>
//       <div style={styles.container}>

//         {/* Header */}
//         <div style={styles.header}>
//           <h1>🌤️ Weather App</h1>
//           <p>Check current weather conditions anywhere in the world</p>
//         </div>

//         {/* Search */}
//         <div style={styles.searchSection}>
//           <input
//             type="text"
//             placeholder="Enter city name..."
//             value={city}
//             onChange={(e) => setCity(e.target.value)}
//             onKeyDown={handleKeyDown}
//             style={styles.input}
//           />
//              <button onClick={getCurrentLocation}>
//             📍 Use My Location
//              </button>
//           <button
//             onClick={() => getWeather()}
//             style={styles.searchButton}
//             disabled={loading}
//           >
//             {loading ? "Loading..." : "Search"}
//           </button>
//         </div>

//         {/* Unit Buttons */}
//         <div style={styles.unitSection}>
//           <button
//             onClick={() => changeUnit("metric")}
//             style={{
//               ...styles.unitButton,
//               ...(unit === "metric" ? styles.activeUnit : {}),
//             }}
//           >
//             °C
//           </button>

//           <button
//             onClick={() => changeUnit("imperial")}
//             style={{
//               ...styles.unitButton,
//               ...(unit === "imperial" ? styles.activeUnit : {}),
//             }}
//           >
//             °F
//           </button>
//         </div>

//         {/* Error */}
//         {error && <div style={styles.error}>❌ {error}</div>}

//         {/* Loading */}
//         {loading && (
//           <div style={styles.loading}>
//             <p>Fetching weather data...</p>
//           </div>
//         )}

//         {/* Weather Card */}
//         {weather && !loading && (
//           <div style={styles.weatherCard}>

//             {/* Location */}
//             <div style={styles.location}>
//               <h2>
//                 {weather.name}, {weather.sys.country}
//               </h2>

//               <p>
//                 {new Date().toLocaleDateString([], {
//                   weekday: "long",
//                   year: "numeric",
//                   month: "long",
//                   day: "numeric",
//                 })}
//               </p>
//             </div>

//             {/* Main Weather */}
//             <div style={styles.mainWeather}>

//               <div>
//                 <img
//                   src={getWeatherIcon(weather.weather[0].icon)}
//                   alt={weather.weather[0].description}
//                   style={styles.weatherIcon}
//                 />

//                 <p style={styles.description}>
//                   {weather.weather[0].description}
//                 </p>
//               </div>

//               <div>
//                 <div style={styles.temperature}>
//                   {Math.round(weather.main.temp)}
//                   {unit === "metric" ? "°C" : "°F"}
//                 </div>

//                 <p>
//                   Feels like{" "}
//                   {Math.round(weather.main.feels_like)}
//                   {unit === "metric" ? "°C" : "°F"}
//                 </p>
//               </div>

//             </div>

//             {/* Weather Details */}
//             <div style={styles.detailsGrid}>

//               <div style={styles.detailCard}>
//                 <span>💧</span>
//                 <p>Humidity</p>
//                 <strong>{weather.main.humidity}%</strong>
//               </div>

//               <div style={styles.detailCard}>
//                 <span>💨</span>
//                 <p>Wind Speed</p>
//                 <strong>
//                   {weather.wind.speed}{" "}
//                   {unit === "metric" ? "m/s" : "mph"}
//                 </strong>
//               </div>

//               <div style={styles.detailCard}>
//                 <span>👁️</span>
//                 <p>Visibility</p>
//                 <strong>
//                   {(weather.visibility / 1000).toFixed(1)} km
//                 </strong>
//               </div>

//               <div style={styles.detailCard}>
//                 <span>🌡️</span>
//                 <p>Pressure</p>
//                 <strong>{weather.main.pressure} hPa</strong>
//               </div>

//               <div style={styles.detailCard}>
//                 <span>🔽</span>
//                 <p>Min Temp</p>
//                 <strong>
//                   {Math.round(weather.main.temp_min)}
//                   {unit === "metric" ? "°C" : "°F"}
//                 </strong>
//               </div>

//               <div style={styles.detailCard}>
//                 <span>🔼</span>
//                 <p>Max Temp</p>
//                 <strong>
//                   {Math.round(weather.main.temp_max)}
//                   {unit === "metric" ? "°C" : "°F"}
//                 </strong>
//               </div>

//             </div>

//             {/* Sunrise / Sunset */}
//             <div style={styles.sunSection}>

//               <div>
//                 <span>🌅</span>
//                 <p>Sunrise</p>
//                 <strong>
//                   {formatTime(weather.sys.sunrise)}
//                 </strong>
//               </div>

//               <div>
//                 <span>🌇</span>
//                 <p>Sunset</p>
//                 <strong>
//                   {formatTime(weather.sys.sunset)}
//                 </strong>
//               </div>

//             </div>

//             {/* Footer */}
//             <p style={styles.updated}>
//               Weather data updated for {weather.name}
//             </p>

//           </div>
//         )}

//       </div>
//     </div>
//   );
// }

// const styles = {
//   page: {
//     minHeight: "100vh",
//     background: "linear-gradient(135deg, #74ebd5, #ACB6E5)",
//     padding: "40px 20px",
//     fontFamily: "Arial, sans-serif",
//   },

//   container: {
//     maxWidth: "850px",
//     margin: "auto",
//   },

//   header: {
//     textAlign: "center",
//     color: "white",
//     marginBottom: "30px",
//   },

//   searchSection: {
//     display: "flex",
//     gap: "10px",
//     marginBottom: "15px",
//   },

//   input: {
//     flex: 1,
//     padding: "15px",
//     borderRadius: "10px",
//     border: "none",
//     fontSize: "16px",
//     outline: "none",
//   },

//   searchButton: {
//     padding: "15px 25px",
//     border: "none",
//     borderRadius: "10px",
//     cursor: "pointer",
//     fontSize: "16px",
//     fontWeight: "bold",
//   },

//   unitSection: {
//     display: "flex",
//     justifyContent: "center",
//     gap: "10px",
//     marginBottom: "20px",
//   },

//   unitButton: {
//     padding: "8px 18px",
//     border: "none",
//     borderRadius: "20px",
//     cursor: "pointer",
//   },

//   activeUnit: {
//     fontWeight: "bold",
//     transform: "scale(1.05)",
//   },

//   error: {
//     background: "white",
//     padding: "15px",
//     borderRadius: "10px",
//     marginBottom: "20px",
//     textAlign: "center",
//     color: "#d32f2f",
//   },

//   loading: {
//     background: "white",
//     padding: "20px",
//     borderRadius: "15px",
//     textAlign: "center",
//   },

//   weatherCard: {
//     background: "rgba(255,255,255,0.95)",
//     borderRadius: "25px",
//     padding: "30px",
//     boxShadow: "0 15px 40px rgba(0,0,0,0.15)",
//   },

//   location: {
//     textAlign: "center",
//   },

//   mainWeather: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     gap: "60px",
//     margin: "20px 0",
//     textAlign: "center",
//   },

//   weatherIcon: {
//     width: "100px",
//   },

//   description: {
//     textTransform: "capitalize",
//   },

//   temperature: {
//     fontSize: "60px",
//     fontWeight: "bold",
//   },

//   detailsGrid: {
//     display: "grid",
//     gridTemplateColumns: "repeat(3, 1fr)",
//     gap: "15px",
//     marginTop: "25px",
//   },

//   detailCard: {
//     background: "#f5f7fa",
//     padding: "18px",
//     borderRadius: "15px",
//     textAlign: "center",
//   },

//   sunSection: {
//     display: "flex",
//     justifyContent: "space-around",
//     marginTop: "25px",
//     paddingTop: "20px",
//     borderTop: "1px solid #ddd",
//     textAlign: "center",
//   },

//   updated: {
//     textAlign: "center",
//     marginTop: "25px",
//     fontSize: "13px",
//     color: "#777",
//   },
// };

// export default SearchBox;


// import { useState } from "react";

// function SearchBox() {
//   const [city, setCity] = useState("");
//   const [weather, setWeather] = useState(null);
//   const [unit, setUnit] = useState("metric");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   // Get API details from .env
//   const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
//   const API_URL = import.meta.env.VITE_WEATHER_API_URL;

//   console.log("API KEY exists:", !!API_KEY);
//   console.log("API URL:", API_URL);

//   // --------------------------------------------------
//   // 1. Get weather by city name
//   // --------------------------------------------------
//   const getWeather = async (
//     searchCity = city,
//     selectedUnit = unit
//   ) => {
//     if (!searchCity.trim()) {
//       setError("Please enter a city name.");
//       return;
//     }

//     setLoading(true);
//     setError("");

//     try {
//       const response = await fetch(
//         `${API_URL}?q=${encodeURIComponent(
//           searchCity
//         )}&appid=${API_KEY}&units=${selectedUnit}`
//       );

//       const data = await response.json();

//       if (response.ok) {
//         setWeather(data);
//       } else {
//         setWeather(null);

//         if (response.status === 401) {
//           setError(
//             "Invalid API key. Please check your OpenWeather API key."
//           );
//         } else if (response.status === 404) {
//           setError(
//             "City not found. Please check the city name."
//           );
//         } else {
//           setError(
//             data.message || "Something went wrong."
//           );
//         }
//       }
//     } catch (error) {
//       console.error("Weather API error:", error);

//       setWeather(null);
//       setError(
//         "Unable to fetch weather. Please check your internet connection."
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   // --------------------------------------------------
//   // 2. Search when Enter is pressed
//   // --------------------------------------------------
//   const handleKeyDown = (e) => {
//     if (e.key === "Enter") {
//       getWeather();
//     }
//   };

//   // --------------------------------------------------
//   // 3. Change Celsius / Fahrenheit
//   // --------------------------------------------------
//   const changeUnit = (newUnit) => {
//     setUnit(newUnit);

//     if (city.trim() && weather) {
//       getWeather(city, newUnit);
//     }
//   };

//   // --------------------------------------------------
//   // 4. Get weather using current location
//   // --------------------------------------------------
//   const getCurrentLocation = () => {
//     if (!navigator.geolocation) {
//       setError(
//         "Geolocation is not supported by your browser."
//       );
//       return;
//     }

//     setLoading(true);
//     setError("");

//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         const latitude = position.coords.latitude;
//         const longitude = position.coords.longitude;

//         console.log("Latitude:", latitude);
//         console.log("Longitude:", longitude);

//         getWeatherByLocation(
//           latitude,
//           longitude,
//           unit
//         );
//       },

//       (error) => {
//         setLoading(false);

//         if (
//           error.code ===
//           error.PERMISSION_DENIED
//         ) {
//           setError(
//             "Location permission was denied. Please allow location access."
//           );
//         } else if (
//           error.code ===
//           error.POSITION_UNAVAILABLE
//         ) {
//           setError(
//             "Location information is unavailable."
//           );
//         } else if (
//           error.code === error.TIMEOUT
//         ) {
//           setError(
//             "Location request timed out. Please try again."
//           );
//         } else {
//           setError(
//             "Unable to get your current location."
//           );
//         }
//       }
//     );
//   };

//   // --------------------------------------------------
//   // 5. Get weather using latitude & longitude
//   // --------------------------------------------------
//   const getWeatherByLocation = async (
//     latitude,
//     longitude,
//     selectedUnit
//   ) => {
//     try {
//       const response = await fetch(
//         `${API_URL}?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=${selectedUnit}`
//       );

//       const data = await response.json();

//       if (response.ok) {
//         setWeather(data);

//         // Show detected city in search box
//         setCity(data.name);
//       } else {
//         setWeather(null);
//         setError(
//           data.message ||
//             "Unable to fetch weather for your location."
//         );
//       }
//     } catch (error) {
//       console.error(
//         "Location weather error:",
//         error
//       );

//       setWeather(null);
//       setError(
//         "Unable to fetch weather. Please check your internet connection."
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   // --------------------------------------------------
//   // 6. Convert timestamp to readable time
//   // --------------------------------------------------
//   const formatTime = (timestamp) => {
//     return new Date(
//       timestamp * 1000
//     ).toLocaleTimeString([], {
//       hour: "2-digit",
//       minute: "2-digit",
//     });
//   };

//   // --------------------------------------------------
//   // 7. Weather icon
//   // --------------------------------------------------
//   const getWeatherIcon = (icon) => {
//     return `https://openweathermap.org/img/wn/${icon}@2x.png`;
//   };

//   return (
//     <div style={styles.page}>
//       <div style={styles.container}>

//         {/* Header */}
//         <div style={styles.header}>
//           <h1>🌤️ Weather App</h1>

//           <p>
//             Check current weather conditions
//             anywhere in the world
//           </p>
//         </div>

//         {/* Search */}
//         <div style={styles.searchSection}>

//           <input
//             type="text"
//             placeholder="Enter city name..."
//             value={city}
//             onChange={(e) =>
//               setCity(e.target.value)
//             }
//             onKeyDown={handleKeyDown}
//             style={styles.input}
//           />

//           {/* Current Location Button */}
//           <button
//             onClick={getCurrentLocation}
//             style={styles.locationButton}
//             disabled={loading}
//           >
//             📍 My Location
//           </button>

//           {/* Search Button */}
//           <button
//             onClick={() => getWeather()}
//             style={styles.searchButton}
//             disabled={loading}
//           >
//             {loading ? "Loading..." : "Search"}
//           </button>
//         </div>

//         {/* Unit Buttons */}
//         <div style={styles.unitSection}>

//           <button
//             onClick={() =>
//               changeUnit("metric")
//             }
//             style={{
//               ...styles.unitButton,
//               ...(unit === "metric"
//                 ? styles.activeUnit
//                 : {}),
//             }}
//           >
//             °C
//           </button>

//           <button
//             onClick={() =>
//               changeUnit("imperial")
//             }
//             style={{
//               ...styles.unitButton,
//               ...(unit === "imperial"
//                 ? styles.activeUnit
//                 : {}),
//             }}
//           >
//             °F
//           </button>

//         </div>

//         {/* Error */}
//         {error && (
//           <div style={styles.error}>
//             ❌ {error}
//           </div>
//         )}

//         {/* Loading */}
//         {loading && (
//           <div style={styles.loading}>
//             <p>Fetching weather data...</p>
//           </div>
//         )}

//         {/* Weather Card */}
//         {weather && !loading && (
//           <div style={styles.weatherCard}>

//             {/* Location */}
//             <div style={styles.location}>

//               <h2>
//                 {weather.name},{" "}
//                 {weather.sys?.country}
//               </h2>

//               <p>
//                 {new Date().toLocaleDateString(
//                   [],
//                   {
//                     weekday: "long",
//                     year: "numeric",
//                     month: "long",
//                     day: "numeric",
//                   }
//                 )}
//               </p>

//             </div>

//             {/* Main Weather */}
//             <div style={styles.mainWeather}>

//               <div>

//                 {weather.weather?.[0] && (
//                   <>
//                     <img
//                       src={getWeatherIcon(
//                         weather.weather[0]
//                           .icon
//                       )}
//                       alt={
//                         weather.weather[0]
//                           .description
//                       }
//                       style={
//                         styles.weatherIcon
//                       }
//                     />

//                     <p
//                       style={
//                         styles.description
//                       }
//                     >
//                       {
//                         weather.weather[0]
//                           .description
//                       }
//                     </p>
//                   </>
//                 )}

//               </div>

//               <div>

//                 <div
//                   style={
//                     styles.temperature
//                   }
//                 >
//                   {Math.round(
//                     weather.main.temp
//                   )}

//                   {unit === "metric"
//                     ? "°C"
//                     : "°F"}
//                 </div>

//                 <p>
//                   Feels like{" "}
//                   {Math.round(
//                     weather.main.feels_like
//                   )}

//                   {unit === "metric"
//                     ? "°C"
//                     : "°F"}
//                 </p>

//               </div>

//             </div>

//             {/* Weather Details */}
//             <div style={styles.detailsGrid}>

//               {/* Humidity */}
//               <div
//                 style={styles.detailCard}
//               >
//                 <span>💧</span>

//                 <p>Humidity</p>

//                 <strong>
//                   {weather.main.humidity}%
//                 </strong>
//               </div>

//               {/* Wind */}
//               <div
//                 style={styles.detailCard}
//               >
//                 <span>💨</span>

//                 <p>Wind Speed</p>

//                 <strong>
//                   {weather.wind.speed}{" "}
//                   {unit === "metric"
//                     ? "m/s"
//                     : "mph"}
//                 </strong>
//               </div>

//               {/* Visibility */}
//               <div
//                 style={styles.detailCard}
//               >
//                 <span>👁️</span>

//                 <p>Visibility</p>

//                 <strong>
//                   {(
//                     weather.visibility / 1000
//                   ).toFixed(1)}{" "}
//                   km
//                 </strong>
//               </div>

//               {/* Pressure */}
//               <div
//                 style={styles.detailCard}
//               >
//                 <span>🌡️</span>

//                 <p>Pressure</p>

//                 <strong>
//                   {weather.main.pressure} hPa
//                 </strong>
//               </div>

//               {/* Min Temperature */}
//               <div
//                 style={styles.detailCard}
//               >
//                 <span>🔽</span>

//                 <p>Min Temp</p>

//                 <strong>
//                   {Math.round(
//                     weather.main.temp_min
//                   )}

//                   {unit === "metric"
//                     ? "°C"
//                     : "°F"}
//                 </strong>
//               </div>

//               {/* Max Temperature */}
//               <div
//                 style={styles.detailCard}
//               >
//                 <span>🔼</span>

//                 <p>Max Temp</p>

//                 <strong>
//                   {Math.round(
//                     weather.main.temp_max
//                   )}

//                   {unit === "metric"
//                     ? "°C"
//                     : "°F"}
//                 </strong>
//               </div>

//             </div>

//             {/* Sunrise / Sunset */}
//             <div style={styles.sunSection}>

//               <div>
//                 <span>🌅</span>

//                 <p>Sunrise</p>

//                 <strong>
//                   {formatTime(
//                     weather.sys.sunrise
//                   )}
//                 </strong>
//               </div>

//               <div>
//                 <span>🌇</span>

//                 <p>Sunset</p>

//                 <strong>
//                   {formatTime(
//                     weather.sys.sunset
//                   )}
//                 </strong>
//               </div>

//             </div>

//             {/* Footer */}
//             <p style={styles.updated}>
//               Weather data updated for{" "}
//               {weather.name}
//             </p>

//           </div>
//         )}

//       </div>
//     </div>
//   );
// }

// // --------------------------------------------------
// // Styles
// // --------------------------------------------------

// const styles = {

//   page: {
//     minHeight: "100vh",
//     background:
//       "linear-gradient(135deg, #74ebd5, #ACB6E5)",
//     padding: "40px 20px",
//     fontFamily:
//       "Arial, sans-serif",
//   },

//   container: {
//     maxWidth: "850px",
//     margin: "auto",
//   },

//   header: {
//     textAlign: "center",
//     color: "white",
//     marginBottom: "30px",
//   },

//   searchSection: {
//     display: "flex",
//     gap: "10px",
//     marginBottom: "15px",
//     flexWrap: "wrap",
//   },

//   input: {
//     flex: 1,
//     minWidth: "200px",
//     padding: "15px",
//     borderRadius: "10px",
//     border: "none",
//     fontSize: "16px",
//     outline: "none",
//   },

//   searchButton: {
//     padding: "15px 25px",
//     border: "none",
//     borderRadius: "10px",
//     cursor: "pointer",
//     fontSize: "16px",
//     fontWeight: "bold",
//   },

//   locationButton: {
//     padding: "15px 20px",
//     border: "none",
//     borderRadius: "10px",
//     cursor: "pointer",
//     fontSize: "16px",
//     fontWeight: "bold",
//   },

//   unitSection: {
//     display: "flex",
//     justifyContent: "center",
//     gap: "10px",
//     marginBottom: "20px",
//   },

//   unitButton: {
//     padding: "8px 18px",
//     border: "none",
//     borderRadius: "20px",
//     cursor: "pointer",
//   },

//   activeUnit: {
//     fontWeight: "bold",
//     transform: "scale(1.05)",
//   },

//   error: {
//     background: "white",
//     padding: "15px",
//     borderRadius: "10px",
//     marginBottom: "20px",
//     textAlign: "center",
//     color: "#d32f2f",
//   },

//   loading: {
//     background: "white",
//     padding: "20px",
//     borderRadius: "15px",
//     textAlign: "center",
//   },

//   weatherCard: {
//     background:
//       "rgba(255,255,255,0.95)",
//     borderRadius: "25px",
//     padding: "30px",
//     boxShadow:
//       "0 15px 40px rgba(0,0,0,0.15)",
//   },

//   location: {
//     textAlign: "center",
//   },

//   mainWeather: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     gap: "60px",
//     margin: "20px 0",
//     textAlign: "center",
//   },

//   weatherIcon: {
//     width: "100px",
//   },

//   description: {
//     textTransform: "capitalize",
//   },

//   temperature: {
//     fontSize: "60px",
//     fontWeight: "bold",
//   },

//   detailsGrid: {
//     display: "grid",
//     gridTemplateColumns:
//       "repeat(3, 1fr)",
//     gap: "15px",
//     marginTop: "25px",
//   },

//   detailCard: {
//     background: "#f5f7fa",
//     padding: "18px",
//     borderRadius: "15px",
//     textAlign: "center",
//   },

//   sunSection: {
//     display: "flex",
//     justifyContent: "space-around",
//     marginTop: "25px",
//     paddingTop: "20px",
//     borderTop:
//       "1px solid #ddd",
//     textAlign: "center",
//   },

//   updated: {
//     textAlign: "center",
//     marginTop: "25px",
//     fontSize: "13px",
//     color: "#777",
//   },
// };

// export default SearchBox;
import { useState } from "react";

function SearchBox() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [unit, setUnit] = useState("metric");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Get API details from .env
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const GEOCODING_API_URL = "https://api.openweathermap.org/geo/1.0/reverse";

  console.log("API KEY exists:", !!API_KEY);
  console.log("API URL:", API_URL);

  // --------------------------------------------------
  // 1. Get weather by city name
  // --------------------------------------------------
  const getWeather = async (
    searchCity = city,
    selectedUnit = unit
  ) => {
    if (!searchCity.trim()) {
      setError("Please enter a city name.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `${API_URL}?q=${encodeURIComponent(
          searchCity
        )}&appid=${API_KEY}&units=${selectedUnit}`
      );

      const data = await response.json();

      if (response.ok) {
        setWeather(data);
      } else {
        setWeather(null);

        if (response.status === 401) {
          setError(
            "Invalid API key. Please check your OpenWeather API key."
          );
        } else if (response.status === 404) {
          setError(
            "City not found. Please check the city name."
          );
        } else {
          setError(
            data.message || "Something went wrong."
          );
        }
      }
    } catch (error) {
      console.error("Weather API error:", error);

      setWeather(null);
      setError(
        "Unable to fetch weather. Please check your internet connection."
      );
    } finally {
      setLoading(false);
    }
  };

  // --------------------------------------------------
  // 2. Search when Enter is pressed
  // --------------------------------------------------
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      getWeather();
    }
  };

  // --------------------------------------------------
  // 3. Change Celsius / Fahrenheit
  // --------------------------------------------------
  const changeUnit = (newUnit) => {
    setUnit(newUnit);

    if (city.trim() && weather) {
      getWeather(city, newUnit);
    }
  };

  // --------------------------------------------------
  // 4. Get weather using current location
  // --------------------------------------------------
  const getCurrentLocation = () => {
    if (!navigator.geolocation) {
      setError(
        "Geolocation is not supported by your browser."
      );
      return;
    }

    setLoading(true);
    setError("");

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        console.log("Latitude:", latitude);
        console.log("Longitude:", longitude);

        getWeatherByLocation(
          latitude,
          longitude,
          unit
        );
      },

      (error) => {
        setLoading(false);

        if (
          error.code ===
          error.PERMISSION_DENIED
        ) {
          setError(
            "Location permission was denied. Please allow location access."
          );
        } else if (
          error.code ===
          error.POSITION_UNAVAILABLE
        ) {
          setError(
            "Location information is unavailable."
          );
        } else if (
          error.code === error.TIMEOUT
        ) {
          setError(
            "Location request timed out. Please try again."
          );
        } else {
          setError(
            "Unable to get your current location."
          );
        }
      }
    );
  };

  // --------------------------------------------------
  // 5. Get weather using latitude & longitude
  // --------------------------------------------------
 const getWeatherByLocation = async (
  latitude,
  longitude,
  selectedUnit
) => {
  try {
    // Weather API
    const weatherResponse = await fetch(
      `${API_URL}?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=${selectedUnit}`
    );

    const weatherData = await weatherResponse.json();

    // Reverse Geocoding API
    // const locationResponse = await fetch(
    //   `${import.meta.env.VITE_GEOCODING_API_URL}?lat=${latitude}&lon=${longitude}&limit=1&appid=${API_KEY}`
    // );
    const locationResponse = await fetch(
  `${GEOCODING_API_URL}?lat=${latitude}&lon=${longitude}&limit=1&appid=${API_KEY}`
);

    const locationData = await locationResponse.json();

    console.log("Weather Data:", weatherData);
    console.log("Reverse Geocoding Data:", locationData);

    if (!weatherResponse.ok) {
      setWeather(null);
      setError(
        weatherData.message || "Unable to fetch weather."
      );
      return;
    }

    setWeather(weatherData);

    // ---------------------------------------
    // Get actual location name
    // ---------------------------------------

    if (
      locationResponse.ok &&
      locationData.length > 0
    ) {
      const location = locationData[0];

      console.log("Detected location:", location);

      // Reverse geocoding मधून location name
      setCity(location.name);
    } else {
      // Fallback
      setCity(weatherData.name);
    }

  } catch (error) {
    console.error(
      "Current location error:",
      error
    );

    setWeather(null);
    setError(
      "Unable to fetch current location weather."
    );
  } finally {
    setLoading(false);
  }
};

  // --------------------------------------------------
  // 6. Convert timestamp to readable time
  // --------------------------------------------------
  const formatTime = (timestamp) => {
    return new Date(
      timestamp * 1000
    ).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // --------------------------------------------------
  // 7. Weather icon
  // --------------------------------------------------
  const getWeatherIcon = (icon) => {
    return `https://openweathermap.org/img/wn/${icon}@2x.png`;
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>

        {/* Header */}
        <div style={styles.header}>
          <h1>🌤️ Weather App</h1>

          <p>
            Check current weather conditions
            anywhere in the world
          </p>
        </div>

        {/* Search */}
        <div style={styles.searchSection}>

          <input
            type="text"
            placeholder="Enter city name..."
            value={city}
            onChange={(e) =>
              setCity(e.target.value)
            }
            onKeyDown={handleKeyDown}
            style={styles.input}
          />

          {/* Current Location Button */}
          <button
            onClick={getCurrentLocation}
            style={styles.locationButton}
            disabled={loading}
          >
            📍 My Location
          </button>

          {/* Search Button */}
          <button
            onClick={() => getWeather()}
            style={styles.searchButton}
            disabled={loading}
          >
            {loading ? "Loading..." : "Search"}
          </button>
        </div>

        {/* Unit Buttons */}
        <div style={styles.unitSection}>

          <button
            onClick={() =>
              changeUnit("metric")
            }
            style={{
              ...styles.unitButton,
              ...(unit === "metric"
                ? styles.activeUnit
                : {}),
            }}
          >
            °C
          </button>

          <button
            onClick={() =>
              changeUnit("imperial")
            }
            style={{
              ...styles.unitButton,
              ...(unit === "imperial"
                ? styles.activeUnit
                : {}),
            }}
          >
            °F
          </button>

        </div>

        {/* Error */}
        {error && (
          <div style={styles.error}>
            ❌ {error}
          </div>
        )}

        {/* Loading */}
        {loading && (
          <div style={styles.loading}>
            <p>Fetching weather data...</p>
          </div>
        )}

        {/* Weather Card */}
        {weather && !loading && (
          <div style={styles.weatherCard}>

            {/* Location */}
            <div style={styles.location}>

              <h2>
                {weather.city},{" "}
                {weather.sys?.country}
              </h2>

              <p>
                {new Date().toLocaleDateString(
                  [],
                  {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  }
                )}
              </p>

            </div>

            {/* Main Weather */}
            <div style={styles.mainWeather}>

              <div>

                {weather.weather?.[0] && (
                  <>
                    <img
                      src={getWeatherIcon(
                        weather.weather[0]
                          .icon
                      )}
                      alt={
                        weather.weather[0]
                          .description
                      }
                      style={
                        styles.weatherIcon
                      }
                    />

                    <p
                      style={
                        styles.description
                      }
                    >
                      {
                        weather.weather[0]
                          .description
                      }
                    </p>
                  </>
                )}

              </div>

              <div>

                <div
                  style={
                    styles.temperature
                  }
                >
                  {Math.round(
                    weather.main.temp
                  )}

                  {unit === "metric"
                    ? "°C"
                    : "°F"}
                </div>

                <p>
                  Feels like{" "}
                  {Math.round(
                    weather.main.feels_like
                  )}

                  {unit === "metric"
                    ? "°C"
                    : "°F"}
                </p>

              </div>

            </div>

            {/* Weather Details */}
            <div style={styles.detailsGrid}>

              {/* Humidity */}
              <div
                style={styles.detailCard}
              >
                <span>💧</span>

                <p>Humidity</p>

                <strong>
                  {weather.main.humidity}%
                </strong>
              </div>

              {/* Wind */}
              <div
                style={styles.detailCard}
              >
                <span>💨</span>

                <p>Wind Speed</p>

                <strong>
                  {weather.wind.speed}{" "}
                  {unit === "metric"
                    ? "m/s"
                    : "mph"}
                </strong>
              </div>

              {/* Visibility */}
              <div
                style={styles.detailCard}
              >
                <span>👁️</span>

                <p>Visibility</p>

                <strong>
                  {(
                    weather.visibility / 1000
                  ).toFixed(1)}{" "}
                  km
                </strong>
              </div>

              {/* Pressure */}
              <div
                style={styles.detailCard}
              >
                <span>🌡️</span>

                <p>Pressure</p>

                <strong>
                  {weather.main.pressure} hPa
                </strong>
              </div>

              {/* Min Temperature */}
              <div
                style={styles.detailCard}
              >
                <span>🔽</span>

                <p>Min Temp</p>

                <strong>
                  {Math.round(
                    weather.main.temp_min
                  )}

                  {unit === "metric"
                    ? "°C"
                    : "°F"}
                </strong>
              </div>

              {/* Max Temperature */}
              <div
                style={styles.detailCard}
              >
                <span>🔼</span>

                <p>Max Temp</p>

                <strong>
                  {Math.round(
                    weather.main.temp_max
                  )}

                  {unit === "metric"
                    ? "°C"
                    : "°F"}
                </strong>
              </div>

            </div>

            {/* Sunrise / Sunset */}
            <div style={styles.sunSection}>

              <div>
                <span>🌅</span>

                <p>Sunrise</p>

                <strong>
                  {formatTime(
                    weather.sys.sunrise
                  )}
                </strong>
              </div>

              <div>
                <span>🌇</span>

                <p>Sunset</p>

                <strong>
                  {formatTime(
                    weather.sys.sunset
                  )}
                </strong>
              </div>

            </div>

            {/* Footer */}
            <p style={styles.updated}>
              Weather data updated for{" "}
              {city}
            </p>

          </div>
        )}

      </div>
    </div>
  );
}

// --------------------------------------------------
// Styles
// --------------------------------------------------

const styles = {

  page: {
    minHeight: "100vh",
    background:
      "linear-gradient(135deg, #74ebd5, #ACB6E5)",
    padding: "40px 20px",
    fontFamily:
      "Arial, sans-serif",
  },

  container: {
    maxWidth: "850px",
    margin: "auto",
  },

  header: {
    textAlign: "center",
    color: "white",
    marginBottom: "30px",
  },

  searchSection: {
    display: "flex",
    gap: "10px",
    marginBottom: "15px",
    flexWrap: "wrap",
  },

  input: {
    flex: 1,
    minWidth: "200px",
    padding: "15px",
    borderRadius: "10px",
    border: "none",
    fontSize: "16px",
    outline: "none",
  },

  searchButton: {
    padding: "15px 25px",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
  },

  locationButton: {
    padding: "15px 20px",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
  },

  unitSection: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "20px",
  },

  unitButton: {
    padding: "8px 18px",
    border: "none",
    borderRadius: "20px",
    cursor: "pointer",
  },

  activeUnit: {
    fontWeight: "bold",
    transform: "scale(1.05)",
  },

  error: {
    background: "white",
    padding: "15px",
    borderRadius: "10px",
    marginBottom: "20px",
    textAlign: "center",
    color: "#d32f2f",
  },

  loading: {
    background: "white",
    padding: "20px",
    borderRadius: "15px",
    textAlign: "center",
  },

  weatherCard: {
    background:
      "rgba(255,255,255,0.95)",
    borderRadius: "25px",
    padding: "30px",
    boxShadow:
      "0 15px 40px rgba(0,0,0,0.15)",
  },

  location: {
    textAlign: "center",
  },

  mainWeather: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "60px",
    margin: "20px 0",
    textAlign: "center",
  },

  weatherIcon: {
    width: "100px",
  },

  description: {
    textTransform: "capitalize",
  },

  temperature: {
    fontSize: "60px",
    fontWeight: "bold",
  },

  detailsGrid: {
    display: "grid",
    gridTemplateColumns:
      "repeat(3, 1fr)",
    gap: "15px",
    marginTop: "25px",
  },

  detailCard: {
    background: "#f5f7fa",
    padding: "18px",
    borderRadius: "15px",
    textAlign: "center",
  },

  sunSection: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "25px",
    paddingTop: "20px",
    borderTop:
      "1px solid #ddd",
    textAlign: "center",
  },

  updated: {
    textAlign: "center",
    marginTop: "25px",
    fontSize: "13px",
    color: "#777",
  },
};

export default SearchBox;