function convertKjtoKcal(num) {
    let calorie = num/4.1855;
    return calorie
}

let kj = document.getElementById("kilojoule");

kj.addEventListener("keydown", function (e) {
    if (e.code === "Enter") {  
            let valueOfKj = document.getElementById("kilojoule").value
            let res = convertKjtoKcal(valueOfKj);
            writeOutputToScreen(res.toFixed(2));
        }
});

function writeOutputToScreen(res) {
    document.getElementById("contentOutput").textContent = res + 'kcal';  
}

function convert() {
    let valueOfKj = document.getElementById("kilojoule").value
    let res = convertKjtoKcal(valueOfKj);
    writeOutputToScreen(res.toFixed(2));
}

