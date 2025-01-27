import fs from "fs";
import moment from "moment";

const fetchItems = () => {
	const data = fs.readFileSync("src/db/items.json", "utf8");
	const items = JSON.parse(data);
	return items;
};

const findItemById = (id) => {
	const items = fetchItems();
	const itemIndex = items.findIndex((i) => i._id === id);
	if (itemIndex === -1) {
		const error = new Error("Item not found");
		error.status = 404;
		throw error;
	}

	// creating deep copy of item to avoid mutating the original item
	const deepCopyItem = JSON.parse(JSON.stringify(items[itemIndex]));
	return { item: deepCopyItem, itemIndex };
};

const rentalController = {
	getAllItems: (req, res) => {
		try {
			const { name, startPrice, endPrice } = req.query;
			const items = fetchItems();
			const filteredItems = items.filter((item) => {
				// will filter out item if it fails any of the filters
				if (name) {
					const regex = new RegExp(name, "i");
					if (!regex.test(item.name)) {
						return false;
					}
				}
				if (startPrice && endPrice) {
					if (
						item.pricePerDay < Number(startPrice) ||
						item.pricePerDay > Number(endPrice)
					) {
						return false;
					}
				}
				// if no filters are provided, return all items
				return true;
			});
			res.status(200).json({ message: "success", data: filteredItems });
		} catch (err) {
			res.status(500).json({ message: err.message });
		}
	},

	createItem: (req, res) => {
		try {
			const items = fetchItems();
			const newItem = {
				_id: (items.length + 1).toString(),
				...req.body,
				available: true,
				pricePerDay: Number(req.body.pricePerDay),
			};
			items.push(newItem);
			fs.writeFileSync("src/db/items.json", JSON.stringify(items, null, 2));
			res.status(201).json({ message: "success", data: newItem });
		} catch (err) {
			res.status(500).json({ message: err.message });
		}
	},

	rentItem: (req, res) => {
		try {
			const { id } = req.params;
			const { days } = req.query;
			const items = fetchItems();
			const { item, itemIndex } = findItemById(id);

			if (!item.available) {
				return res.status(409).json({
					message: `Item is currently rented until ${moment(
						item.returnDate
					).format("MM/DD/YYYY")}`,
				});
			}

			const returnDate = moment().add(days, "days").valueOf();
			item.returnDate = returnDate;
			item.available = false;
			items[itemIndex] = item;

			fs.writeFileSync("src/db/items.json", JSON.stringify(items, null, 2));
			res.status(200).json({
				message: `Item has been successfully rented for ${days} days at $${
					item.pricePerDay
				} per day, please return it by the end of ${moment(returnDate).format(
					"MM/DD/YYYY"
				)}`,
				data: { _id: item._id },
			});
		} catch (err) {
			res.status(500).json({ message: err.message });
		}
	},

	returnItem: (req, res) => {
		try {
			const { id } = req.params;
			const items = fetchItems();
			const { item, itemIndex } = findItemById(id);

			if (item.available) {
				return res.status(409).json({ message: "Item is already returned" });
			}

			item.available = true;
			item.returnDate = null;
			items[itemIndex] = item;
			fs.writeFileSync("src/db/items.json", JSON.stringify(items, null, 2));
			res.status(200).json({
				message: "Item has been successfully returned",
			});
		} catch (err) {
			res.status(500).json({ message: err.message });
		}
	},

	updateItem: (req, res) => {
		try {
			const { id } = req.params;
			const items = fetchItems();
			const { item, itemIndex } = findItemById(id);

			Object.assign(item, {
				...req.body,
				...(req.body.pricePerDay && {
					pricePerDay: Number(req.body.pricePerDay),
				}),
			});

			items[itemIndex] = item;

			fs.writeFileSync("src/db/items.json", JSON.stringify(items, null, 2));

			res.status(200).json({
				message: "Item has been successfully updated",
				data: items[itemIndex],
			});
		} catch (err) {
			res.status(err.status || 500).json({ message: err.message });
		}
	},
};

export default rentalController;
