
var convertType = 'miles'

document.addEventListener('submit', function (event) {
        event.preventDefault();
        var distance = parseFloat(document.getElementById('distance').value);
        var conversion = distance;
    
        if (convertType == 'miles') {
            conversion = (distance * 1.609).toFixed(4);
            document.getElementById('wakaka').innerHTML = `${distance} Miles equals ${conversion} Kilometers`;
            document.getElementById('wakaka').style.color = 'black';
        } if (convertType == 'kilometers') {
            conversion = (distance / 1.609).toFixed(4);
            document.getElementById('wakaka').innerHTML = `${distance} kilometers equals ${conversion} miles`;
            document.getElementById('wakaka').style.color = 'black';
        } 
    })


document.addEventListener('keydown', function(event){
    var key = event.code;

    if (key == 'KeyM') {
        convertType = 'miles';
        document.querySelector('h1').innerHTML = 'MILES TO KILOMETERS CONVERTER';
        document.querySelector('p').innerHTML = 'Type in a number of miles and click the button to convert the distance to kilometers.';
    } if(key == 'KeyK') {
        convertType = 'kilometers';
        document.querySelector('h1').innerHTML = 'KILOMETERS TO MILES CONVERTER';
        document.querySelector('p').innerHTML = 'Type in a number of kilometers and click the button to convert the distance to miles.';
    }
});