import { describe, test, expect } from 'vitest';
import { merge } from './merge';

describe('Merge', () => {
    test('merge with equal array length', ()=> {
        const result = merge([1,2,3], [1,2,3], [3,2,1]);
        expect(result).toStrictEqual([1,1,1,2,2,2,3,3,3]);
    });

    test('merge with unequal array length 1', ()=> {
        const result = merge([1,2,3,4], [1,2,3,4,5], [3,2,1]);
        expect(result).toStrictEqual([1,1,1,2,2,2,3,3,3,4,4,5]);
    });

    test('merge with unequal array length 2', ()=> {
        const result = merge([1,2,3,4], [1,2,3], [5,4,3,2,1]);
        expect(result).toStrictEqual([1,1,1,2,2,2,3,3,3,4,4,5]);
    });

    test('merge with unequal array length 3', ()=> {
        const result = merge([1,2,3,3,4,5,6,7], [1], [5,4,3,2,2,1]);
        expect(result).toStrictEqual([1,1,1,2,2,2,3,3,3,4,4,5,5,6,7]);
    });

    test('merge with empty array 1', ()=> {
        const result = merge([1,3,9,10], [], [5,3,2,0]);
        expect(result).toStrictEqual([0,1,2,3,3,5,9,10]);
    });

    test('merge with empty array 2', ()=> {
        const result = merge([], [], [5,3,2,0]);
        expect(result).toStrictEqual([0,2,3,5]);
    });

    test('merge with negative numbers', ()=> {
        const result = merge([-4,-3,-2,-1], [1,2,3,4,5], [3,2,1,-5,-6,-7]);
        expect(result).toStrictEqual([-7,-6,-5,-4,-3,-2,-1,1,1,2,2,3,3,4,5]);
    });

});