function getInputValueById(inputId){
    const inputField = document.getElementById(inputId);
    const inputValue = parseFloat(inputField.value);
    inputField.value = '';
    return inputValue;
}

function getElementValueById(elementId){
    const element = document.getElementById(elementId);
    const value = parseFloat(element.innerText);
    return value;
}

function setElementValue(element, value){
    const setElement = document.getElementById(element);
    setElement.innerText = value;
}