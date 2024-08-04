const inp = document.getElementById("inp");
const list = document.getElementById("list");

function add() {
    if (inp.value === '') {
        alert("Please enter something!")
    } else {
        let li = document.createElement("li");
        li.innerHTML = inp.value;
        list.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span)
    }
    inp.value = '';
    save();
}

list.addEventListener("click", function(e) {
    if (e.target.tagName === "LI" ) {
        e.target.classList.toggle("check");
        save();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        save();
    }
}, false);

function save() {
    localStorage.setItem("data", list.innerHTML);
}

function retrieve() {
    list.innerHTML = localStorage.getItem("data");
}

retrieve();