import express from "express";
import cors from "cors";
import helmet from "helmet";
import rentalRouter from "./src/routes/index.js";
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";

const app = express();
const port = 8100;

const options = {
	definition: {
		openapi: "3.0.0",
		info: {
			title: "Rental API",
			version: "1.0.0",
			description: "A simple rental API",
		},
		servers: [
			{
				url: `http://localhost:${port}`,
			},
		],
	},
	apis: ["./src/swagger/*.js"], // Path to the API routes
};

const swaggerSpec = swaggerJSDoc(options);

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", rentalRouter);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});

export default app;
