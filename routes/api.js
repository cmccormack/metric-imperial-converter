const router = require("express").Router()
const path = require("path")

const units = ['gal', 'lbs', 'mi', 'km', 'kg', 'L']
const units_r = [...units].reverse()

module.exports = () => {

  ///////////////////////////////////////////////////////////
  // Convert values between Imperial and Metric
  ///////////////////////////////////////////////////////////
  router.route('/convert')
    .get((req, res, next) => {

      const {input} = req.query

      if (!input || input.trim() === '') {
        return next(Error("invalid number and unit"))
      }

      // Validate input contains number and unit.
      const inputMatch = input.trim().match(/^([0-9/\.]*)([a-z]*)$/i)
      if (inputMatch === null) {
        return next(Error("invalid number and unit"))
      }

      // Split valid input into number and unit.  
      console.log(inputMatch.slice(1, 3))
      let number = inputMatch[1] === '' ? '1' : inputMatch[1]
      let unit = inputMatch[2]

      // Find the quotient if fractions are provided
      number = number.split('/').map(Number).reduce((a, v) => a/v)
      if (number === Infinity) {
        return next(Error("invalid number"))
      }

      // Validate unit
      if (!(unit && units.includes(unit))) {
        return next(Error("invalid unit"))
      }

      // Convert between units

      res.json({number, unit})
    })

  return router
  
}