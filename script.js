const button = document.getElementById("button-confirm");



const sortear = () => {
    const min = Math.ceil( document.getElementById("value-one").value);
    const max = Math.floor( document.getElementById("value-second").value);
    const theEnd = document.querySelector("#result")

    const result = Math.floor( Math.random() * (max - min + 1) + min);

    theEnd.innerHTML = `O número sorteado foi ${result}.`


}


button.addEventListener("click", sortear)