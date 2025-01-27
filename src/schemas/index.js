import Joi from "joi";

export const getAllItemsSchema = {
	query: Joi.object({
		name: Joi.string().optional(),
		startPrice: Joi.number().optional(),
		endPrice: Joi.number().optional(),
	}).custom((value, helpers) => {
		if (value.startPrice && !value.endPrice) {
			return helpers.message(
				"If you provide a startPrice, you must also provide an endPrice"
			);
		}
		if (value.endPrice && !value.startPrice) {
			return helpers.message(
				"If you provide an endPrice, you must also provide a startPrice"
			);
		}
		return value;
	}),
};

export const createItemSchema = {
	body: Joi.object({
		name: Joi.string().required(),
		pricePerDay: Joi.number().required(),
		description: Joi.string().required(),
	}),
};

export const rentItemSchema = {
	params: Joi.object({
		id: Joi.string().required(),
	}),
	query: Joi.object({
		days: Joi.number().required(),
	}),
};

export const returnItemSchema = {
	params: Joi.object({
		id: Joi.string().required(),
	}),
};

export const updateItemSchema = {
	params: Joi.object({
		id: Joi.string().required(),
	}),
	body: Joi.object({
		name: Joi.string().optional(),
		pricePerDay: Joi.number().optional(),
		description: Joi.string().optional(),
	}),
};
