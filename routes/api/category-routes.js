const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// get all categories
router.get('/', async (req, res) => {
  // find all categories
  try {
    const categoryData = await Category.findAll({
      //includes associated Products
      include: [{ model: Product }]
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get one categories
router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
});

// create categories
router.post('/', async (req, res) => {
  // create a new category
});

// update categories
router.put('/:id', async (req, res) => {
  // update a category by its `id` value
});

// delete categories
router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
