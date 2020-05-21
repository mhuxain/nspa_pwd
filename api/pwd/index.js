module.exports = async (req, res) => {
    const { body } = req
    let msg = 'Hello World';
    res.json({headers: req.headers})
  }