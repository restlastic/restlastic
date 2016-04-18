module.exports = {
  disable: function disable (req, res, next) {
    req.session = null;
    next();
  }
};
