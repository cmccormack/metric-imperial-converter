# metric-imperial-converter
Convert values between imperial and metric

- [X] I will help prevent the client from trying to guess(sniff) the MIME type.
- [X] I will prevent cross-site scripting (XSS) attacks.
- [X] I can GET /api/convert with a singler parameter containing an accepted number and unit and have it converted.
- [X] Hint: Split the input by looking for the index of the first character.
- [X] I can convert 'gal' to 'L' and vice versa. (1 gal to 3.78541 L)
- [X] I can convert 'lbs' to 'kg' and vice versa. (1 lbs to 0.453592 kg)
- [X] I can convert 'mi' to 'km' and vice versa. (1 mi to 1.60934 km)
- [X] If my unit of measurement is invalid, returned will be 'invalid unit'.
- [X] If my number is invalid, returned with will 'invalid number'.
- [X] If both are invalid, return will be 'invalid number and unit'.
- [X] I can use fractions, decimals or both in my parameter(ie. 5, 1/2, 2.5/6), but if nothing is provided it will default to 1.
- [X] My return will consist of the initNum, initUnit, returnNum, returnUnit, and string spelling out units in format {initNum} {initial_Units} converts to {returnNum} {return_Units} with the result rounded to 5 decimals.
- [ ] All 16 unit tests are complete and passing.
- [ ] All 5 functional tests are complete and passing.

Example usage:
------
```
/api/convert?input=4gal
/api/convert?input=1/2km
/api/convert?input=5.4/3lbs
/api/convert?input=kg
```

Example return:
-----
```
{initNum: 3.1, initUnit: 'mi', returnNum: 5, returnUnit: 'km', string: '3.1 miles converts to 4.98895 kilometers'}
```