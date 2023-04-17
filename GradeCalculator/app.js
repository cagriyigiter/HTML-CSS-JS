
var selector = document.getElementById("midtermSelector");
var calculator = document.getElementById("calculator");
var mid1 = document.getElementById("mid1");
var mid1_w = document.getElementById("mid1_w");
var mid2 = document.getElementById("mid2");
var mid2_w = document.getElementById("mid2_w");
var mid2_div = mid2.parentElement.parentElement;
var fin = document.getElementById("fin");
var fin_w = document.getElementById("fin_w");

selector.addEventListener("click", function () {
    let selectorName = selector.innerText;
    if (selectorName == "2 Midterm") {
        mid2_div.style.position = "static";
        mid2_div.style.visibility = "visible";
        selector.innerHTML = "1 Midterm";
    }
    else {
        mid2_div.style.position = "fixed";
        mid2_div.style.visibility = "hidden";
        mid2.value = null;
        mid2_w.value = null;
        selector.innerHTML = "2 Midterm";
    }
});

calculator.addEventListener("click", function () {
    let inputs = document.getElementsByTagName("input");
    let empty = false;
    Array.from(inputs).forEach(function (e) {
        if (e.parentElement.parentElement.style.visibility != "hidden") {
            let value = e.value;
            if (!value) {
                empty = true;
            }
        }
    })

    if (empty) {
        alert("Enter all inputs!");
    }
    else {
        let mid1_w_val = parseFloat(mid1_w.value);
        let mid2_w_val = parseFloat(mid2_w?.value || 0);
        let fin_w_val = parseFloat(fin_w.value);
        if (mid1_w_val + mid2_w_val + fin_w_val != 100) {
            alert("Weight total should be 100.");
        }
        else {
            let mid1_val = parseFloat(mid1.value);
            let mid2_val = parseFloat(mid2?.value || 0);
            let fin_val = parseFloat(fin.value);
            let average = (mid1_val * mid1_w_val / 100) + (mid2_val * mid2_w_val / 100) + (fin_val * fin_w_val / 100);
            document.getElementById("grade").innerHTML = average;
        }
    }

})



