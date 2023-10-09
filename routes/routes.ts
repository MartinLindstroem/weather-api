import express from "express";
import {
  getCurrentWeather,
  getWeatherForecast,
} from "../controllers/weatherApiController";
const router = express.Router();

router.get("/current-weather", async (req, res) => {
  const location: string = req.query.location as string;
  const units: string = req.query.units as string;
  if (location) {
    const data = await getCurrentWeather(location, units);
    res.json(data);
  } else {
    console.log("No location provided");
    res.json({ msg: "No location provided" });
  }

  console.log(req.query);
});

router.get("/forecast", async (req, res) => {
  const location: string = req.query.location as string;
  const units: string = req.query.units as string;
  if (location) {
    const data = await getWeatherForecast(location, units);
    res.json(data);
  } else {
    console.log("No location provided");
    res.json({ msg: "No location provided" });
  }

  console.log(req.query);
});

export default router;
