function swichMode(){
    document.querySelector("body").classList.toggle("light")
}
//code for yesorno module
function yesorno(){
    document.querySelector("#yesorno-main").innerHTML = "let me think..."
    document.querySelector("#yesorno-maindiv").classList.remove("no")
    document.querySelector("#yesorno-maindiv").classList.remove("yes")
    document.querySelector("#yesorno-maindiv").classList.add("neutral")
    setTimeout(() => {
        yesornoanwser()
    }, 1000);
}
    function yesornoanwser(){
        document.querySelector("#yesorno-maindiv").classList.remove("neutral")
        var num = Math.random()*2;
            console.log("good "+ num )
            num = Math.floor(num);
            console.log("all good for now "+ num )
            if (num === 1){
                document.querySelector("#yesorno-main").innerHTML = "yes"
                document.querySelector("#yesorno-maindiv").classList.add("yes")
            }
            else if (num === 0){
                document.querySelector("#yesorno-main").innerHTML = "no"
                document.querySelector("#yesorno-maindiv").classList.add("no")
            }
            else{
                document.querySelector("#yesorno-main").innerHTML = "try again"
            }
    }
    

//end of yes or no code