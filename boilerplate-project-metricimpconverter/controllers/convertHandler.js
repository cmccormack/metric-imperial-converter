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
    const number = input.split(/^([0-9/\.]*)([a-z]*)$/i)[1]
    return number === '' ? '1' : number
  }
  
  this.getUnit = function(input) {
    var result;
    
    return result;
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
