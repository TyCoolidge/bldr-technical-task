const validate = (schema) => (req, res, next) => {
	try {
		// validate each property passed in api call (body, query, params)
		for (const property in schema) {
			const { error } = schema[property].validate(req[property], {
				abortEarly: false,
			});
			if (error) {
				return res.status(400).json({ message: error.message });
			}
		}
		next();
	} catch (err) {
		res.status(500).json({ message: "Internal server error" });
	}
};

export default validate;
