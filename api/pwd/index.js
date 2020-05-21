module.exports = async (req, res) => {
    const { body } = req
    res.end(`Hello ${JSON.stringify(req)}, from pwd`)
  }