function convertKjtoKcal(num) {
    console.log(num);
    let calorie = num/4.1855;
    return calorie
}

function myFunction() {
    let kilojoule = document.getElementById("kilojoule").value;
    console.log(convertKjtoKcal(kilojoule));
}

