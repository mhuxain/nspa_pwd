module.exports = async (req, res) => {
    const { body } = req
    let msg = JSON.stringify(req);
    res.send(msg)
  }