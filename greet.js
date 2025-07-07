// Payawal, Kyle
// WD - 302
module.exports = function (name){
    this.name = name;
    this.greet = function() {
        return 'Hello, ' + this.name;
    }
}
