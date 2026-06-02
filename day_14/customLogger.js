const logRequists = (req, res, next) => {
    console.log(`path: ${req.path}, method: ${req.method}, dynamic url : ${{...req.params}}, querya params: `);
    next();
}

module.exports = logRequists;