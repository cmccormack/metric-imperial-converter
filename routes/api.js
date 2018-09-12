const router = require("express").Router()
const path = require("path")

const units = {
  'gal': {
    fullname: 'gallon',
    type: 'imperial',
    conversion: {
      fn: x => x * 3.78541,
      unit: 'l'
    }
  },
  'lbs': {
    fullname: 'pound',
    type: 'imperial',
    conversion: {
      fn: x => x * 0.453592,
      unit: 'kg'
    }
  },
  'mi': {
    fullname: 'mile',
    type: 'imperial',
    conversion: {
      fn: x => x * 1.60934,
      unit: 'km'
    }
  },
  'km': {
    fullname: 'kilometer',
    type: 'metric',
    conversion: {
      fn: x => x / 1.60934,
      unit: 'mi'
    }
  },
  'kg': {
    fullname: 'kilogram',
    type: 'metric',
    conversion: {
      fn: x => x / 0.453592,
      unit: 'lbs'
    }
  },
  'l': {
    fullname: 'litre',
    type: 'metric',
    conversion: {
      fn: x => x / 3.78541,
      unit: 'gal'
    }
  }
}

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
      let number = inputMatch[1] === '' ? '1' : inputMatch[1]
      let unit = inputMatch[2].toLowerCase()
      
      // Find the quotient if fractions are provided
      number = number.split('/').map(Number).reduce((a, v) => a/v)
      if (number === Infinity) {
        return next(Error("invalid number"))
      }
      
      // Validate unit
      if (!(unit && Object.keys(units).includes(unit))) {
        return next(Error("invalid unit"))
      }

      // Convert between units
      const pluralize = (num, name) => num === 1 ? name : `${name}s`
      const {fullname, conversion} = units[unit]
      const returnNum = +(conversion.fn(number)).toFixed(5)
      const returnUnit = conversion.unit
      let string = `${number} ${pluralize(number, fullname)} converts to `
      string += `${returnNum} ${pluralize(returnNum, units[returnUnit].fullname)}`

      res.json({
        initNum: number,
        initUnit: unit,
        returnNum,
        returnUnit,
        string
      })

    })

  return router
  
}