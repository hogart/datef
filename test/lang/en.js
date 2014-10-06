var datef = require('../../datef');
require('chai').should();

describe('English laguage (en)', function() {
    beforeEach(function() {
        datef.lang('en');
    });
    it('should correct format the date', function() {
        'January_February_March_April_May_June_July_August_September_October_November_December'.split('_').forEach(function(month, index) {
            datef('MMMM', '2008-' + (index + 1) + '-05').should.be.equal(month);
        });
        'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_').forEach(function(month, index) {
            datef('MMM', '2008-' + (index + 1) + '-05').should.be.equal(month);
        });
        'Monday_Tuesday_Wednesday_Thursday_Friday_Saturday_Sunday'.split('_').forEach(function(day, index) {
            datef('DD', '2014-09-' + (index + 1)).should.be.equal(day);
        });
        'Mo_Tu_We_Th_Fr_Sa_Su'.split('_').forEach(function(day, index) {
            datef('D', '2014-09-' + (index + 1)).should.be.equal(day);
        });
    });
});
