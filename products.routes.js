const express = require('express');
const router = express.Router();

router.post('/', (req, res, next) => {
    const product = {
        name: req.body.name
    };
    res.status(200).json({
        message: 'test',
        name: product
    })
});

module.exports = router;