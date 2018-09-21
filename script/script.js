function storeData(id) {
    let attrName = document.getElementById(id).id;
    let attrVal = document.getElementById(id).value;

    sessionStorage.setItem(attrName, attrVal);
}

function getSalaryAmt() {
    let salaryAmt = sessionStorage.getItem("salary-amt");
    let slider = document.getElementById("save-amt");
    slider.setAttribute("max", salaryAmt);
    document.getElementById("slider-field").appendChild(slider);

    return salaryAmt;
}


function createSlider() {
    let maxVal = sessionStorage.getItem("salary-amt");
    let slider = document.createElement("INPUT");
    slider.setAttribute("type", "range");
    slider.setAttribute("name", "save-amt");
    slider.setAttribute("class", "save-amt");
    slider.setAttribute("id", "save-amt");
    slider.setAttribute("min", "0");
    slider.setAttribute("max", maxVal);
    document.getElementById("slider-field").appendChild(slider);
}

function snapSavingsValue() {
    let snapVal = document.getElementById("value").value;

    let slider = document.getElementById("save-amt");

    slider.value = snapVal;
}