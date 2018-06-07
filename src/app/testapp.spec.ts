
describe('testapp', () => {
    let testapp = '';
    let notTestapp = '';
    let containsTest = null;
    beforeEach(() => {
        testapp = 'testapp';
        notTestapp = 'notTestapp';
        containsTest = new RegExp(/^test/);
    });
    afterEach(() => {
        testapp = '';
        notTestapp = '';
    });
    it('checks if nottestapp is testapp', 
        () => expect(notTestapp).not.toBe(testapp)
    );
    it('checks if testapp is testapp', 
        () => expect(testapp).toBe(testapp)
    );
    it('checks if testapp contains test', 
        () => expect(testapp).toMatch(containsTest)
    );
});