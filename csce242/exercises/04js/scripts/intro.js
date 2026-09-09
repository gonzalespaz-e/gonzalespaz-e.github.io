document.getElementById("btn-show-message").onclick = (e) => {
    document.getElementById("p-message").innerHTML = "helloworld";
    e.target.innerHTML = "done";
};

