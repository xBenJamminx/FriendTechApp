const { Web3 } = require('web3');
const web3 = new Web3(`https://mainnet.infura.io/${process.env.REACT_APP_INFURA_API_KEY}`);

// Importing required modules
const express = require('express');
const router = express.Router();


// Importing Item model
const Item = require('../../models/Item');

// @route GET api/items
// @desc Get All Items
router.get('/', async (req, res) => {
    try {
        const items = await Item.find();
        res.json(items);
    } catch (err) {
        console.error(err.message);
        res.status(500),send('Server Error');
    }
})

// Exporting router to be used in index.js
module.exports = router;