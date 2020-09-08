//--length converter---------//

//convert inch ot feet
document.getElementById("inchToFeet").addEventListener("click", function(){
    getLengthConvert("inch", "feet", 12, " Feet")
})
//convert meter to kilometer
document.getElementById("meterToKilometer").addEventListener("click", function(){
    getLengthConvert("meter", "kilometer",1000, " Kilometer");
})
//meter to kilometer convert
document.getElementById("meterToMile").addEventListener("click", function(){
    getLengthConvert("meter2","mile",1609.34, " Meter")
})
//convert centimeter to feet
document.getElementById("centimeterToFeet").addEventListener("click", function(){
    getLengthConvert("centimeter", "feet2", 30.48, " Feet")
})


//Length Converter function
function getLengthConvert(inputId,resultId, dividedNumber , content){
    var value = parseFloat(document.getElementById(inputId).value);
    function getFeet(inch){
        var result = inch/dividedNumber;
        var newResult = result.toFixed(2)
        document.getElementById(resultId).value = newResult + content
    }
    getFeet(value)
}


//---------Wood converter--------//


//find square feet wood for chari

//Find wood square feet for chair
document.getElementById("chairBtn").addEventListener("click", function(){
    getWoodConvert("chairInput", "chairWoodResult", 1)
})
//Find wood square feet for table
document.getElementById("tableBtn").addEventListener("click", function(){
    getWoodConvert("tableInput", "tableWoodResult", 3)
})
//Find wood square feet for bed
document.getElementById("bedBtn").addEventListener("click", function(){
    getWoodConvert("bedInput", "bedWoodResult", 5)
})
//find wood square feet for locker
document.getElementById("lockerBtn").addEventListener("click", function(){
    getWoodConvert("lockerInput", "lockerResult", 10)
})

//wood convert function
function getWoodConvert(inputId, resultId, multiply){
    var chairInput = parseFloat(document.getElementById(inputId).value);
    document.getElementById(resultId).value = chairInput * multiply + " Square Feet Wood";
}


//--------Bricks convert--------//
document.getElementById("bricksConvertBtn").addEventListener("click", function(){
    var numberOfFloor = parseFloat(document.getElementById("floor").value);
    function bricksCalculate(floorNumber){
        var bricks = 0;
    if (floorNumber <=10) {
        var totalFeet = floorNumber * 15;
        bricks = totalFeet * 1000;
        return bricks;
    }else if (floorNumber <=20) {
        var extraFeet = floorNumber - 10;
        var firstPartBricks = (10*15) * 1000;
        var extraFeetBricks = (extraFeet * 12) * 1000;
        bricks = firstPartBricks + extraFeetBricks;
        return bricks;
    }else if(floorNumber >20){
        var firstPartBricks = (10*15) * 1000;
        var secondPartBricks = (10*12) * 1000;
        var extraFeet = floorNumber - 20;
        var extraFeetBricks = (extraFeet * 10) * 1000;
        bricks = firstPartBricks + secondPartBricks + extraFeetBricks;
        return bricks;
    }
    }
    var result = bricksCalculate(numberOfFloor)
    document.getElementById("bricksResult").value = result + " bricks for all FL";
})

