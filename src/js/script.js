(function(){
    class Parent{
        constructor(){
            console.log('create class');
        }
    }
    var p = new Parent;
    var a = new Parent;
    var b = new Parent;
}());