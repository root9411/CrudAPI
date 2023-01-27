const express = require('express');
const router = express.Router();

const {getUser,postUser,getUserId, validateDbId, deleteDbId} = require('../controller/user')

router.route('/').get(getUser);
router.route('/:id').get(getUserId);
router.route('/').post(postUser);

router.route('/:id').put(validateDbId);
router.route('/:id').delete(deleteDbId);


module.exports = router;