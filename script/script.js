const totalBills = [];
const reduceBillsArr = (accum, currentVal) => accum + currentVal;


function storeData(id) {
    let attrVal = document.getElementById(id).value;
    attrVal = parseInt(attrVal);
    totalBills.push(attrVal);
    getBills();
}

function getBills() {
    let bills = totalBills.reduce(reduceBillsArr);
    console.log(bills);
    sessionStorage.setItem("bills", bills);
    document.getElementById("total-bills").innerHTML = bills;
}

function storeSalary(id) {
    let attrName = document.getElementById(id).id;
    let attrVal = document.getElementById(id).value;
    let errorMsg = document.getElementById("error-msg");

    sessionStorage.setItem(attrName, attrVal);
    errorMsg.innerHTML = "";
    getSalaryAmt();
}

function validateForm() {
    var fields = document.getElementsByClassName("input-field").value;
    console.log(fields);

    if (fields == undefined) {
        document.getElementById("slide").style.backgroundColor = "red";
        document.getElementById("error-msg").innerHTML = "* Field is required! ";
        document.getElementById("error-msg").style.color = "red";
        document.getElementById("error-msg").style.marginLeft = "80px";
        document.getElementById("error-msg").style.fontStyle = "italic";
    }
    else{
        tabulateWeeklyBudget();
    }
}

function getSalaryAmt() {
    let salaryAmt = sessionStorage.getItem("salary-amt");
    let slider = document.getElementById("save-amt");

    slider.setAttribute("max", salaryAmt);
    let sliderDiv = document.getElementById("slider-field");
    sliderDiv.insertBefore(slider, sliderDiv.childNodes[2]);
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

function tabulateWeeklyBudget() {
    let salary = sessionStorage.getItem("salary-amt");
    parseInt(salary);
    let totalBills = sessionStorage.getItem("bills")
    parseInt(totalBills);

    let amtAfterReduc = salary - totalBills;

    parseInt(amtAfterReduc);
    let savings = document.getElementById("save-amt").value;
    parseInt(savings);

    amtAfterReduc = (amtAfterReduc - savings) / 4;
    sessionStorage.setItem("budget", amtAfterReduc);
}

function getWeeklyBudget(){
    let parentDiv = document.getElementById("circle-amt");
    let para = document.createElement("p");
    let weeklyBudget = sessionStorage.getItem("budget");
    parseFloat(weeklyBudget);
    weeklyBudget = Math.floor(weeklyBudget);
    var budget = document.createTextNode(weeklyBudget);
    para.appendChild(budget);  
    console.log(para);

    parentDiv.appendChild(para);
}