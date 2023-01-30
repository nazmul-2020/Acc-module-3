const express = require('express');
// const { limiter } = require('../..');
const accUserControllers = require('../../controllers/accUser.controller');
const { limiter } = require('../../middleware/limiter');
const viewCount = require('../../middleware/viewCount');

const router = express.Router();

// router.get('/:id', async (req, res) => {
//     // const query = {};
//     // const cursor = await accCollection.find(query).toArray();
//     // // const acc = await cursor.toArray();
//     res.send("well come Acc22");
// })

// router.post('/accUser', async (req, res) => {
//     // const aaa = req.body;
//     // console.log(aaa);
//     // const result = await accCollection.insertOne(aaa);
//     res.send('Well come User');
// })




router.route('/')
/**
 * @api {get} /accUser All accUser
 * @apiDescription Get all the accUser
 * @apiPermission admin
 *
 * @apiHeader {String} Authorization   User's access token
 *
 * @apiParam  {Number{1-}}         [page=1]     List page
 * @apiParam  {Number{1-100}}      [limit=10]  Users per page
 *
 * @apiSuccess {Object[]} all the tools.
 *
 * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
 * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
 */
.get(accUserControllers.getAllAccUser)

/**
 * @api {get} /accUser All accUser
 * @apiDescription Get all the accUser
 * @apiPermission admin
 *
 * @apiHeader {String} Authorization   User's access token
 *
 * @apiParam  {Number{1-}}         [page=1]     List page
 * @apiParam  {Number{1-100}}      [limit=10]  Users per page
 *
 * @apiSuccess {Object[]} all the tools.
 *
 * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
 * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
 */
.post(accUserControllers.AddAccUser)

router.route('/:id')
.get(viewCount,limiter,accUserControllers.getUserDetails)
.patch(accUserControllers.updateUser)
.delete(accUserControllers.deleteUser)

// export
module.exports = router;