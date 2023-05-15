var addButtun = document.getElementById("btnAdd")
var input = document.getElementById("addApp")
var ul = document.querySelector("ul")
var myArray = []



addButtun.onclick = function () {
    ul.innerHTML += `<li>
    <span>${input.value}</span>
    <input type="text" value=${input.value} style="display:none ;" id="edit">
    <div>
        <button class="edit">Edit</button>
        <button class="remove">Remove</button>
    </div>
</li>`
    myArray.push(input.value)
    input.value = ""
};
window.onclick = function (e) {
    if (e.target.classList == "remove") {
        e.target.parentElement.parentElement.remove()
    }
    if (e.target.classList == "edit") {
        var buttonEidt = e.target
        var span = buttonEidt.parentElement.parentElement.querySelector("span")
        var spanInput = buttonEidt.parentElement.parentElement.querySelector("input")
        span.textContent = spanInput.value
        if (spanInput.style.display == "none") {
            span.style.display = "none"
            buttonEidt.textContent = "Save"
            spanInput.style.display = "block"
        }
        else {
            span.style.display = "block"
            buttonEidt.textContent = "Edit"
            spanInput.style.display = "none"
        }
        console.log(span);
    }
}
