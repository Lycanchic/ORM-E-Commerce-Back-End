const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", (req, res) => {
  // find all tags
  Tag.findAll({
    include: {
      model: Product,
    },
  }).then((findAll) => {
    res.json(findAll);
  });
});

router.get("/:id", (req, res) => {
  // find a single tag by its `id`
  Tag.findOne({
    include: {
      model: Product,
    },
    where: {
      id: req.params.id
    }
  }).then((findOne) => {
    res.json(findOne);
  });
 });


// Create a single tag by it's `id`
router.post("/", (req, res) => {
  const updatedTag = req.body
  Tag.create(updatedTag).then((findOne) => {
  res.json(findOne);

 })
});



router.put("/:id", (req, res) => {
  const updatedTag = req.body
  // update a tag's name by its `id` value
  Tag.update(updatedTag, {
    where: {
      id: req.params.id
    }
  }).then((update) => {
    res.json(update);
  });
 })


router.delete("/:id", (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id
    }
  }).then((destroy) => {
    res.json(destroy);
   });
 });


module.exports = router;
