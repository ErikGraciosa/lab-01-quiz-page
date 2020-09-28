//Function to test if input is a yes



export function isThisAYes(input) {
    const letterCheck = input.charAt(0).toUpperCase();
    if (letterCheck === 'Y') {
        return true;
    } else {
        return false;
    }
}