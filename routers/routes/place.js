const express = require("express");
const placeRouter = express.Router();
const {
  CreateNewPlace,
  getAllPlaces,
  updatePlaceById,
  deletePlaceById,
  getPlaceById,
  getPlaceByType,
  getPlaceByTypeImg,
  getAllPlacesImg,
  getAllPlacesByName,
} = require("./../controllers/place");
placeRouter.post("/places", CreateNewPlace);
placeRouter.get("/places", getAllPlaces);
placeRouter.get("/places/img", getAllPlacesImg);
placeRouter.post("/places/:type", getPlaceByType);
placeRouter.put("/places/:id", updatePlaceById);
placeRouter.delete("/places/:id", deletePlaceById);
placeRouter.get("/places/:id", getPlaceById);
placeRouter.get("/places/type/:type", getPlaceByType);
placeRouter.get("/images/:type", getPlaceByTypeImg);
placeRouter.get("/place/name/:name", getAllPlacesByName);
module.exports = placeRouter;
