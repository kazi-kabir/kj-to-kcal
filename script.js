function convertKjtoKcal(num) {
    console.log(num);
    let calorie = num/4.1855;
    return calorie
}

let kj = document.getElementById("kilojoule");

kj.addEventListener("keydown", function (e) {
    if (e.code === "Enter") {  //checks whether the pressed key is "Enter"
            let valueOfKj = document.getElementById("kilojoule").value
            let res = convertKjtoKcal(valueOfKj);
            console.log(res) 

        }
});


function myFunction() {
    let kilojoule = document.getElementById("kilojoule").value;
    console.log(convertKjtoKcal(kilojoule));
}

