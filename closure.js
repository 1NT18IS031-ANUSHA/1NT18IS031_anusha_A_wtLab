let m="to the program" ;
function cat(a){
  return function(b){
    return function(c){
      return a+b+c+m;
    }
  }
    
}

console.log("Output= ");
console.log(cat('we')('lco')('me '))


let r ;
function disp(){
    let msg = "good";
    r = msg;
    return function (){
        msg = msg+" "+"morning";
        return msg;
    }
    
}
console.log(r);
console.log(disp()());
console.log(r);