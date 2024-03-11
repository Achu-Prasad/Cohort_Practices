const myName:string = "Achu";
console.log(`hello ${myName}`)

function one(){
    console.log("one")
    setTimeout(two,5000)
    function two(){
        console.log("two")
    }
}
one();