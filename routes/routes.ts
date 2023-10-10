import express from "express";
import {
  getCurrentWeather,
  getWeatherForecast,
} from "../controllers/weatherApiController";
const router = express.Router();

router.get("/current-weather", async (req, res) => {
  const lat: string = req.query.lat as string;
  const lon: string = req.query.lon as string;
  const units: string = req.query.units as string;
  if (lat && lon) {
    const data = await getCurrentWeather(lat, lon, units);
    res.json(data);
  } else {
    console.log("No location provided");
    res.json({ msg: "No location provided" });
  }

  console.log(req.query);
});

router.get("/forecast", async (req, res) => {
  const lat: string = req.query.lat as string;
  const lon: string = req.query.lon as string;
  const units: string = req.query.units as string;
  if (lat && lon) {
    const data = await getWeatherForecast(lat, lon, units);
    res.json(data);
  } else {
    console.log("No location provided");
    res.json({ msg: "No location provided" });
  }

  console.log(req.query);
});

export default router;
