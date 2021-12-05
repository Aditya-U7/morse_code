
var alpha=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var morse_list=[".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
var input="";
var res="";


function texttomorse(){
input=document.getElementById("in").value;

for(var i=0;i<input.length;i++){
    for(var j=0;j<alpha.length;j++){
      if(input[i]==alpha[j])
      {
        res=res+(morse_list[j])+" ";
      }
    }
}

document.getElementById("out").value=res;




}

function morsetotext()
{
  input=document.getElementById("in").value;
input=input.split(" ");

 for(var i=0;i<input.length;i++){
      for(var j=0;j<morse_list.length;j++){
        if(input[i]==morse_list[j])
        {
          res=res+(alpha[j]);

        }
      }
}
document.getElementById("out").value=res;

}
