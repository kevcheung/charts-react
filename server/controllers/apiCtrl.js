const getAPI = (req, res, next) => {
    // console.log(req.params);
    req.app.then((results) => {
        res.status(200).json(results);
    }).catch(err => {
        res.status(500).json(err)});
};

module.exports = {
    getAPI
}