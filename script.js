function result()
{
    var x= document.getElementById("disp").value;
    try{
        document.getElementById("disp").value=eval(x);
    }
    catch(err){
        document.getElementById("disp").value="Invalid Syntax";
    }
}