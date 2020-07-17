const { Router } = require('express');
const router = Router();
const data = require('kodemia.json')

router.get('/', (req, res) => {
    res.json({ data })
})

module.exports = router;
