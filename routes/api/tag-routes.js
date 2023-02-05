const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  Tag.findAll{

  }
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
   Tag.findOne{
});

router.post('/', (req, res) => {
  Tag.create{
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update{
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.delete{
});

module.exports = router;
