var input=document.getElementById('myinput');

function diplay(num){
    input.value += num;
}
function Calculate(){
    try{
        input.value=eval(input.value);
    }
    catch(err){
        alert("invalid")
    }
}
function Cl(){
    input.value="";
}
function del(){
    input.value=input.value.slice(0,-1);

}