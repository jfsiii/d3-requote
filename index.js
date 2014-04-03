(function() {
    !function() {
        var d3 = {
            version: "3.4.4"
        };
        d3.requote = function(s) {
            return s.replace(d3_requote_re, "\\$&");
        };
        var d3_requote_re = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;
        if (typeof define === "function" && define.amd) {
            define(d3);
        } else if (typeof module === "object" && module.exports) {
            module.exports = d3;
        } else {
            this.d3 = d3;
        }
    }();
})();