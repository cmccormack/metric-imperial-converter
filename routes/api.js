const router = require("express").Router()

const ConvertHandler = require('../controllers/convertHandler.js')
const convertHandler = new ConvertHandler()

module.exports = () => {

  ///////////////////////////////////////////////////////////
  // Convert values between Imperial and Metric
  ///////////////////////////////////////////////////////////
  router.route('/convert')
  .get((req, res, next) => {

      let { input } = req.query
      input = input.trim()

      const initNum = convertHandler.getNum(input)
      const initUnit = convertHandler.getUnit(input)

      if (initNum === null && initUnit === null) {
        return res.send("Invalid Number and Unit")
      }
      if (initNum === null) {
        return res.send("Invalid Number")
      }
      if (initUnit === null) {
        return res.send("Invalid Unit")
      }

      const returnNum = convertHandler.convert(initNum, initUnit)
      const returnUnit = convertHandler.getReturnUnit(initUnit)
      const returnString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit)

      res.json({
        initNum,
        initUnit,
        returnNum,
        returnUnit,
        string: returnString,
      })

    })

  return router
  
}