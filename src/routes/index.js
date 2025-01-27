import express from "express";
import rentalController from "../controllers/rentalController.js";
import {
	createItemSchema,
	getAllItemsSchema,
	rentItemSchema,
	returnItemSchema,
	updateItemSchema,
} from "../schemas/index.js";
import validate from "../middleware/validate.js";

const router = express.Router();

router.get("/", validate(getAllItemsSchema), rentalController.getAllItems);

router.post(
	"/create-item",
	validate(createItemSchema),
	rentalController.createItem
);

router.put("/:id/rent", validate(rentItemSchema), rentalController.rentItem);

router.put(
	"/:id/return",
	validate(returnItemSchema),
	rentalController.returnItem
);

router.put("/:id", validate(updateItemSchema), rentalController.updateItem);

export default router;
