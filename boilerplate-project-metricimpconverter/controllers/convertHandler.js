/*
*
*
*       Complete the handler logic below
*       
*       
*/

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


function ConvertHandler() {
  
  this.getNum = function(input) {
    let number = input.split(/^([0-9/\.]*)([a-z]*)$/i)[1]
    
    // Check if division is necessary and assign quotient to number if valid
    const numParts = number.split('/')
    if (numParts.length > 1) {
      if (numParts.length > 2)  {
        return null
      }
      number = numParts.reduce((a, v) => a/v)
    }

    // If no number provided, assume 1 unit
    if (number === '') {
      return 1
    }

    if (Number.isNaN(number) || number === Infinity) {
      return null
    }

    return number
  }
  
  this.getUnit = function(input) {

    // Return null early if input is not a string
    if (typeof input !== 'string') {
      return null
    }

    let unit = input.split(/^([0-9/\.]*)([a-z]*)$/i)[2]
    if (!unit) {
      return null
    }
    // Validate unit exists and is one of known units
    if (!Object.keys(units).includes(unit.toLowerCase())) {
      return null
    }
    return unit;
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
