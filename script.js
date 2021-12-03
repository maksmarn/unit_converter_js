function convert() {
    let kmInt = document.getElementById("unitInput").value;
    result.textContent = kmInt + " KM equals " + kmInt * 0.621371 + " miles.";
}