function result()
{
    var x= document.getElementById("display").value;
    try{
        document.getElementById("display").value=eval(x);
    }
    catch(err){
        document.getElementById("display").value="Invalid Syntax";
    }
}
