let kilojoule = document.getElementById("kilojoule").value

function convertKjtoKcal(num) {
    return num/4.184;
}

console.log(kilojoule)
console.log(convertKjtoKcal(1000));