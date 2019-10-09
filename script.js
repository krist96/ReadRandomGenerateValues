let divOne = document.getElementById("divOne");
let divTwo = document.getElementById("divTwo");
let divThree = document.getElementById("divThree");

function randomize(){
    const tab = ["cos1", "cos2", "cos3", "cos4"];
    return tab[ parseInt(Math.random() * 4)];
}
setInterval(function()
{
    divOne.innerHTML = randomize();
    divTwo.innerHTML = randomize();
    divThree.innerHTML = randomize();

}, 3000);

divOne.addEventListener("click", fun = (e) => {console.log(e.explicitOriginalTarget.firstChild.data)});
divTwo.addEventListener("click", fun = (e) => {console.log(e.explicitOriginalTarget.firstChild.data)});
divThree.addEventListener("click", fun = (e) => {console.log(e.explicitOriginalTarget.firstChild.data)});

