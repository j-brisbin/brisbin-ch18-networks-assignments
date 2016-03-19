/**
 * Created by User on 3/23/2015.
 */
var convertResultDiv;
var firstLastResultDiv;
var addressInput1;
var addressInput2;
var addressInput3;
var addressInput4;
var findButton;
var convertButton;
var conversionTypes;
var inputTypes;
window.onload = init;

function init(){
    //Initializes the necessary elements for the various methods.
    convertResultDiv = document.getElementById("convertNotationsResult");
    firstLastResultDiv = document.getElementById("firstLastAddressResult");
    convertButton = document.getElementById("convertButton");
    findButton = document.getElementById("findButton");
    addressInput1 = document.getElementById("addressInput1");
    addressInput2 = document.getElementById("addressInput2");
    addressInput3 = document.getElementById("addressInput3");
    addressInput4 = document.getElementById("addressInput4");
    conversionTypes = document.getElementById("outputNotation");
    inputTypes = document.getElementById("inputNotation");
    convertButton.onclick = convertNotations;
    findButton.onclick = findFirstLastAddresses;
}

function convertNotations(){
    /*Gets the selected value from the drop down in order to select the appropriate conversion,
    using the inputted value.
    * Some research from StackOverflow was used for this method.*/
    //Sets up initial variables, then grabs the inputs from the text fields and conversion type from the dropdowns.
    var conversionResult1;
    var conversionResult2;
    var conversionResult3;
    var conversionResult4;
    var input1 = addressInput1.value;
    var input2 = addressInput2.value;
    var input3 = addressInput3.value;
    var input4 = addressInput4.value;
    var outputType = conversionTypes.options[conversionTypes.selectedIndex].text;
    //Conversion method is chosen based on the method chosen from the output drop-down menu.
    if(outputType === "Binary Notation"){
        conversionResult1 = convertToBinary(input1);
        conversionResult2 = convertToBinary(input2);
        conversionResult3 = convertToBinary(input3);
        conversionResult4 = convertToBinary(input4);
    }
    else if(outputType === "Decimal Notation"){
        conversionResult1 = convertToDecimal(input1);
        conversionResult2 = convertToDecimal(input2);
        conversionResult3 = convertToDecimal(input3);
        conversionResult4 = convertToDecimal(input4);
    }
    else if(outputType === "Hexadecimal Notation"){
        conversionResult1 = convertToHexadecimal(input1);
        conversionResult2 = convertToHexadecimal(input2);
        conversionResult3 = convertToHexadecimal(input3);
        conversionResult4 = convertToHexadecimal(input4);
    }
    //Results are outputted to a separate div.
    convertResultDiv.innerHTML = "Convert to " + outputType + " result: " + "<strong>" + conversionResult1 + " " +
    conversionResult2 + " " + conversionResult3 + " " + conversionResult4 + "</strong>";
}

function convertToBinary(binaryInput){
    /*Converts a given number to binary, can be done
    in either decimal or hexadecimal format.
    Some research from StackOverflow, Mozilla Developer Network, and About.com was used for this method*/
    try{
        var binaryConvertResult;
        var inputType = inputTypes.options[inputTypes.selectedIndex].text;
        console.log(inputType);
        if(inputType === "Binary Notation"){
            binaryConvertResult = binaryInput;
        }
        else if(inputType === "Decimal Notation"){
            binaryConvertResult = parseInt(binaryInput).toString(2);
        }
        else if(inputType === "Hexadecimal Notation"){
            binaryConvertResult = parseInt(binaryInput,16).toString(2);
        }
        console.log("Binary Conversion Result: " + binaryConvertResult);
        return binaryConvertResult;
    }
    catch(ex){
        window.alert("An error has occurred.\n" + ex.toString());
    }

}

function convertToDecimal(decimalInput){
    /*Converts a given number to decimal, can be done
     in either binary or hexadecimal format.
     Some research from StackOverflow, Mozilla Developer Network, and About.com was used for this method*/
    try{
        var decimalConvertResult;
        var inputType = inputTypes.options[inputTypes.selectedIndex].text;
        if(inputType === "Binary Notation"){
            decimalConvertResult = parseInt(decimalInput,2).toString(10);
        }
        else if(inputType === "Decimal Notation"){
            decimalConvertResult = decimalInput;
        }
        else if(inputType === "Hexadecimal Notation"){
            decimalConvertResult = parseInt(decimalInput,16).toString(10);
        }
        else{
            decimalConvertResult = 0;
            window.alert("Please use only binary (0.0) or hexadecimal (FF) formats for this conversion.")
        }
        console.log("Decimal Conversion Result: " + decimalConvertResult);
        return decimalConvertResult;
    }
    catch(ex){
        window.alert("An error has occurred.\n" + ex.toString());
    }

}

function convertToHexadecimal(hexadecimalInput){
    /*Converts a given number to hexadecimal, can be done
     in either decimal or binary format.
     Some research from StackOverflow, Mozilla Developer Network, and About.com was used for this method*/
    try{
        var hexadecimalConvertResult;
        var inputType = inputTypes.options[inputTypes.selectedIndex].text;
        if(inputType === "Binary Notation"){
            hexadecimalConvertResult = parseInt(hexadecimalInput,2).toString(16);
        }
        else if(inputType === "Decimal Notation"){
            hexadecimalConvertResult = parseInt(hexadecimalConvertResult,16);
        }
        else if(inputType === "Hexadecimal Notation"){
            hexadecimalConvertResult = "0x" + hexadecimalInput;
        }
        hexadecimalConvertResult = parseInt(hexadecimalInput).toString(16);
        console.log("Hexadecimal Conversion Result: " + hexadecimalConvertResult);
        return hexadecimalConvertResult;
    }
    catch(ex){
        window.alert("An error has occurred.\n" + ex.toString());
    }

}

function findFirstLastAddresses(){
    /*Converts an IP address from the fields to binary, then finds the first and last addresses. */
    var input1 = convertToBinary(addressInput1.value);
    var input2 = convertToBinary(addressInput2.value);
    var input3 = convertToBinary(addressInput3.value);
    var input4 = convertToBinary(addressInput4.value);
    if(input1.length < 8){
        var zeros1 = "";
        for(var i=0;i<(8-input1.length);i++){
            zeros1 += "0";
        }
        input1 = zeros1.concat(input1);
    }
    if(input2.length < 8){
        var zeros2 = "";
        for(i=0;i<(8-input2.length);i++){

            zeros2 += "0";
        }
        input2 = zeros2.concat(input2);
    }
    if(input3.length < 8){
        var zeros3 = "";
        for(i=0;i<(8-input3.length);i++){

            zeros3 += "0";
        }
        input3 = zeros3.concat(input3);
    }
    if(input4.length < 8){
        var zeros4 = "";
        for(i=0;i<(8-input4.length);i++){
            zeros4 += "0";
        }
        input4 = zeros4.concat(input4);
    }
    var fullAddress = "" + input1 + input2 + input3 + input4;
    var prefixLength = document.getElementById("prefixLength").value;
    var firstAddress = firstAddressFind(fullAddress, prefixLength).toString(2);
    var lastAddress = lastAddressFind(fullAddress, prefixLength).toString(2);
    /*Processes the first and last address into the first 8 bits, then outputs them by adding them to paragraph tags
        using the innerHTML function.
     */
    var firstBits07 = parseInt(firstAddress.substring(0,8),2);
    var firstBits815 = parseInt(firstAddress.substring(8,16),2);
    var firstBits1624 = parseInt(firstAddress.substring(16,24),2);
    var firstBits2432 = parseInt(firstAddress.substring(24,32),2);
    var lastBits07 = parseInt(lastAddress.substring(0,8),2);
    var lastBits815 = parseInt(lastAddress.substring(8,16),2);
    var lastBits1624 = parseInt(lastAddress.substring(16,24),2);
    var lastBits2432 = parseInt(lastAddress.substring(24,32),2);
    document.getElementById("firstAddressResult").innerHTML = "First Address: " + firstBits07 + "." + firstBits815 + "." +
    firstBits1624 + "." + firstBits2432;
    document.getElementById("lastAddressResult").innerHTML = "Last Address: " + lastBits07 + "." + lastBits815 + "." +
    lastBits1624 + "." + lastBits2432;
}

function firstAddressFind(input, prefixLength){
    /*Finds the first address for a given input and prefix length by sorting the changed and unchanged bits into
    * different arrays, with the unchanged bits being looked at for 1s to be changed to 0s.
    */
    try{
        var s = "";
        var mask;
        var firstAddress;
        for(var i=0;i<32;i++){
            if(i<prefixLength){
                s+="1";
            }
            else{
                s+="0";
            }
        }
        mask = parseInt(s,2);
        input = parseInt(input,2);
        firstAddress = mask & input;
        return firstAddress;
    }
    catch(ex){
        window.alert("An error has occurred.\n" + ex.toString());
    }
}

function lastAddressFind(input, prefixLength){
    /*Finds the last address for a given input and prefix length by sorting the changed and unchanged bits into
     * different arrays, with the unchanged bits being looked at for 0s to be changed to 1s.
     */
    try{
        var s = "";
        var mask;
        var lastAddress;
        for(var i=0;i<32;i++){
            if(i<prefixLength){
                s+="0";
            }
            else{
                s+="1";
            }
        }
        mask = parseInt(s,2);
        input = parseInt(input,2);
        lastAddress = mask | input;
        return lastAddress;
    }
    catch(ex){
        window.alert("An error has occurred.\n" + ex.toString());
    }
}