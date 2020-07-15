var sel = document.querySelector('#city-type');

cities = ['nyc', 'sf', 'la', 'syd', 'atx'];

cities.forEach(city => {
    opt = document.createElement('option');
    opt.value = city;
    opt.innerHTML = city.toUpperCase();
    sel.add(opt); 
});


sel.addEventListener('change', () => {
    var selCity = ''
    optVal = sel.options[sel.options.selectedIndex].value;
    switch(optVal) {
        case 'syd':
        selCity = 'sydney';
        break;
        case 'atx':
        selCity = 'austin';
        break;
        default:
        selCity = optVal.toLowerCase();
    }
    document.body.classList = `${selCity}` 
});



