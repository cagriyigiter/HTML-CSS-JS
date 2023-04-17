var btn = document.getElementById("btn");
btn.addEventListener("click", function () {
    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;
    if (!height || !weight) {
        alert("Please enter weight and height.")
    }
    else {
        let weightNum = parseFloat(weight);
        let heightNum = parseFloat(height);
        heightNum /= 100;
        let response = weightNum / (heightNum ** 2);
        let definitionCell = document.getElementById("definition");

        if (0 >= response) {
            alert("Control your entries.")
        }
        else if (response <= 18.5) {
            definitionCell.innerHTML = "Thin";
        }
        else if (18.5 < response && response <= 25) {
            definitionCell.innerHTML = "Normal weight";

        }
        else if (25 < response && response <= 30) {
            definitionCell.innerHTML = "Overweight";

        }
        else {
            definitionCell.innerHTML = "Obese";

        }
        document.getElementById("response").innerHTML = response;

    }
})