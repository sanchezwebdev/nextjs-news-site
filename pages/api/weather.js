
export default async function handler(req, res) {
    const apiKey = process.env.NEXT_PUBLIC_WEATHER_KEY; // Ensure your API key is stored securely
    const city = "Los_Angeles"; // Example city
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;
  
    try {
      const weatherResponse = await fetch(url);
      const weatherData = await weatherResponse.json();
      res.status(200).json(weatherData);
    } catch (error) {
      console.error("Failed to fetch weather data:", error);
      res.status(500).json({ message: "Failed to fetch weather data" });
    }
  }
  