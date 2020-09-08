//-----------LENGTH----------//
//Inch to feet event handler
var inchToFeet = document.getElementById("inchToFeet");
inchToFeet.addEventListener("click", function(){
getLengthConvert("inch", "feet", 12);
})

//meter to km event handler
var meterToKm = document.getElementById("meterToKm");
meterToKm.addEventListener("click", function(){
getLengthConvert("meter", "km", 1000);
})


//Meter to mile event handler
var meterToMile = document.getElementById("meterToMile");
meterToMile.addEventListener("click", function(){
getLengthConvert("meter2", "mile", 1609.34);
})


//Centimeter to feet event handler

var cmToFeet = document.getElementById("cmToFeet");
cmToFeet.addEventListener("click", function(){
getLengthConvert("cm", "feet2", 30.48);
})



//Get converter function
function getLengthConvert(getNumber,setNumber,dividedNumber){
    var number = parseFloat(document.getElementById(getNumber).value);
    function convert(number){
        var result = number / dividedNumber;
        return result
    }
    var output = convert(number);
    var newOutput = output.toFixed(2)
    document.getElementById(setNumber).value = newOutput;
};


//----------WOOD CALCULATE --------//

//chair button event handler
document.getElementById("chairBtn").addEventListener("click", function(){
    getWoodConvert("chair", "chairText", 1)
})

//table button event handler
document.getElementById("tableBtn").addEventListener("click", function(){
    getWoodConvert("table", "tableText", 3)
})

//bed button event handler
document.getElementById("bedBtn").addEventListener("click", function(){
    getWoodConvert("bed", "bedText", 5);
})

//wood convert function
function getWoodConvert(getValueId, setResultId, multiply){
    var getValue = parseFloat(document.getElementById(getValueId).value);
    document.getElementById(setResultId).innerText = getValue * multiply + " square feet wood";
}



//------BRICKS CALCULATE-------//


//add event handler in covert button
document.getElementById("bricksConvertBtn").addEventListener("click", function(){
    //Find floor value;
    var floor = parseFloat(document.getElementById("floor").value);

    //Compare for different floor
    if (floor <=10) {
        var totalFeet = floor * 15;
        var totalBricks = totalFeet * 1000;
        document.getElementById("bricksConvertResult").innerText = totalBricks
    }else if(floor <=20){
        var extraFeet = floor-10;
        var extraFeetBricks = (extraFeet * 12) * 1000;
        var totalBricks = extraFeetBricks + 150000;
        document.getElementById("bricksConvertResult").innerText = totalBricks;
    }else if (floor >20) {
        var extraFeet = floor -20;
        var extraFeetBricks = (extraFeet * 10) * 1000;
        var totalBricks = extraFeetBricks + 270000;
        document.getElementById("bricksConvertResult").innerText = totalBricks;
    }
})
