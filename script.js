function genr(len) {
    var arr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!#$%&()";
    var alen = arr.length;
    var pass = "";
    for(var i=0; i<len; i++) {
        pass += arr[Math.floor(Math.random()*alen)];
    }
    return pass;
    }
   function load() {
        var len = 7
        len = parseInt(len);
        if(len => 7 && len <= 9) {
            console.log('p' + genr(len)); 
        }
        else {
            console.log("The length must be between 8 and 32 !");
        }
    }
    load()