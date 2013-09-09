$(function() {

    // fixes any spaces between the .pure-u-* classes which bounce the last unit onto the next line
    $('.pure-g-r, .pure-g').contents().filter(function() { return this.nodeType === 3; }).remove();

});
