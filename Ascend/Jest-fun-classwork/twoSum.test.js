const twoSum = require('./twoSum.js')

describe('twoSum', () => {
    test('finds indices of two numbers that add up to target', () => {
      expect(twoSum([2, 7, 11, 15], 9)).toEqual(expect.arrayContaining([0, 1]));
    });

    test('works with negative numbers', () => {
        expect(twoSum([-3, 1, 3, 20], 0)).toEqual(expect.arrayContaining([0, 2]));
    });
  
  });