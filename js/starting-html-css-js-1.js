const heading1 = document.querySelector("span")
heading1.textContent= "Hello World!"
heading1.textContent = "Hello"
let var1 = 10;          //=== for equal check , !,!== for non equal check
let var2 = var1 + "hello"
heading1.textContent=var2
heading1.textContent=20===10
heading1.textContent=!(20===10)
heading1.textContent=20!==10

alert("it is true")

{
var var3="dfs"
}

function add(num1, num2){
    var var4="dssv1"
    return var2;
}

heading1.textContent=add(2,"hi")  //result NaN
heading1.textContent=add(2,"0.3")  // results 0.6
heading1.addEventListener('click', function(){
    heading1.textContent=var3
})

let name=localStorage.getItem("name");
if(name){
    heading1.textContent=name;
}
else{
    setusername();
}
function setusername(){
    localStorage.setItem("name",prompt("enter your name"));
    heading1.textContent=localStorage.getItem("name");
}