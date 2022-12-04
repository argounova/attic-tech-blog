const router = require('express').Router();
const { Comment } = require('../../models');
const uuid = require('uuid');

router.post('/', async (req, res) => {
    try {
        const newComment = await Comment.create({
            comment: req.body.comment,
            blog_post_id: uuid.v4()
        });
        res.status(200).json(newComment);
    } catch (error) {
        res.status(400).json(error);
    }
});

module.exports = router;