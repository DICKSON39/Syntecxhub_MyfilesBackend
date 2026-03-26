import express from "express";
import { createHotel, deleteHotel, getAllHotels, getHotelById, updateHotel } from "../Controllers/hotel.controller.js";

const router = express.Router();


router.post('/',createHotel);
router.get('/', getAllHotels);
router.get('/:id',getHotelById);
router.delete('/:id',deleteHotel);
router.put('/:id', updateHotel)



export default router;