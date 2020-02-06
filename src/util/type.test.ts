import { tuple, tupleNum } from './type'

describe('type', () => {
  describe('tupe()', () => {
    it('should return a string[]', () => {
      expect(tuple('foo', 'bar')).toEqual(['foo', 'bar'])
    })

    it('should return a number[]', () => {
      expect(tupleNum(1, 2, 3)).toEqual([1, 2, 3])
    })
  })
})
