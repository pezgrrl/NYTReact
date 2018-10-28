const axios = require("axios");
const router = require("express").Router();

const authKey = "ae734789234f4c9790c50485a5a8c017";

const queryURLBase =
  "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
  authKey +
  "&q=";

router.get("/call", (req, res) => {
  axios
    .get(queryURLBase + req.query.q)
    .then(results => res.json(results.data.response.docs))
    .catch(error => console.log(req.json(error)));
});

module.exports = router;
