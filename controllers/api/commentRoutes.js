const router = require('express').Router();
const { Comment } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const newComment = await Comment.create({
            ...req.body,
            blog_post_id: req.session.blog_post_id,
        });
        res.status(200).json(newComment);
    } catch (error) {
        res.status(400).json(error);
    }
});

module.exports = router;