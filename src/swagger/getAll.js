/**
 * @swagger
 * /:
 *   get:
 *     summary: Returns all items
 *     tags:
 *       - Items
 *     parameters:
 *       - in: query
 *         name: name
 *         required: false
 *         schema:
 *           type: string
 *         description: Optional - Filter items by name
 *       - in: query
 *         name: startPrice
 *         required: false
 *         schema:
 *           type: number
 *         description: Optional - Minimum price for filtering (requires endPrice if provided)
 *       - in: query
 *         name: endPrice
 *         required: false
 *         schema:
 *           type: number
 *         description: Optional - Maximum price for filtering (requires startPrice if provided)
 *     responses:
 *       200:
 *         description: List of rental items
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "success"
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                       name:
 *                         type: string
 *                       pricePerDay:
 *                         type: number
 *                       description:
 *                         type: string
 *                       available:
 *                         type: boolean
 *                       returnDate:
 *                         type: string
 *                         nullable: true
 *       400:
 *         description: Invalid query parameters
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "\"name\" is not allowed to be empty"
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Internal server error"
 */
