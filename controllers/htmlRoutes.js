const router = require('express').Router();
const { User,Blogpost,Comment } = require('../models');

// Get homepage handlebar, blogs, navbar and login.

router.get('/', async (req, res) => {
    try {
      const homepage = await Blogpost.findAll({
        includes: [
            {
                model: User,
                attributes: {exclude: ['password']}
            }
        ]
      });
      const homepageData = homepage.map((blogpost) =>
      (blogpost.get({plain: true}))
      );
      res.render('homepage', {
        homepageData,
                  
      })
    } catch (err) {
      res.status(400).json(err);
    }
  });

module.exports = router;