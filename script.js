
function myFunction() {
    let kilojoule = document.getElementById("kilojoule").value
    console.log(kilojoule);
}

function convertKjtoKcal(num) {
    return num/4.184;
}

console.log(convertKjtoKcal(1000));