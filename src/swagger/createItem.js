/**
 * @swagger
 * /create-item:
 *   post:
 *     summary: Create a new rental item
 *     tags:
 *       - Items
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - pricePerDay
 *               - description
 *             properties:
 *               name:
 *                 type: string
 *                 description: Name of the rental item
 *                 example: "snowboard"
 *               pricePerDay:
 *                 type: number
 *                 description: Daily rental price
 *                 example: 50
 *               description:
 *                 type: string
 *                 description: Detailed description of the item
 *                 example: "Snowboarding board for beginners"
 *     responses:
 *       201:
 *         description: Item created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "success"
 *                 data:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                       example: "8"
 *                     name:
 *                       type: string
 *                       example: "snowboard"
 *                     pricePerDay:
 *                       type: number
 *                       example: 50
 *                     description:
 *                       type: string
 *                       example: "Snowboarding board for beginners"
 *                     available:
 *                       type: boolean
 *                       example: true
 *       400:
 *         description: Bad request - Invalid input data
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "\"name\" is required"
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
