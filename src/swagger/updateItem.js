/**
 * @swagger
 * /{id}:
 *   put:
 *     summary: Update an item
 *     tags:
 *       - Items
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The item ID to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The item's name
 *                 example: "Mountain Bike"
 *               pricePerDay:
 *                 type: number
 *                 description: Daily rental price
 *                 example: 25.50
 *               description:
 *                 type: string
 *                 description: Item description
 *                 example: "High-quality mountain bike for all terrain types"
 *     responses:
 *       200:
 *         description: Item updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Item updated successfully"
 *                 data:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                       example: "123"
 *                     name:
 *                       type: string
 *                       example: "Mountain Bike"
 *                     pricePerDay:
 *                       type: number
 *                       example: 25.50
 *                     description:
 *                       type: string
 *                       example: "High-quality mountain bike for all terrain types"
 *       400:
 *         description: Invalid parameters
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "\"name\" is not allowed to be empty"
 *       404:
 *         description: Item not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Item not found"
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
