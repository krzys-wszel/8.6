var a = 0;
var b = 0;
var value = (a * a) - (2 * a * b) + (b * b);
if (value > 0) {
    console.log('wynik dodatni');
} 
else if (value == 0) {
    console.log('wynik 0');
} 
else if (value < 0) {
    console.log('wynik ujemny');
} 
else {
    console.log('wartość nieprawidłowa');
}
