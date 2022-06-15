import { test } from "../client/someFile";


describe('Something', () => {
    it('should be a string', () => {
        expect(test('asd')).toBe('asd');
    });
})