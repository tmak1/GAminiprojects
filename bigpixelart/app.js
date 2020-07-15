var brushBox = document.querySelector('#brush-box');
var setColorBtn = document.querySelector('#set-color');
var setMovieBtn = document.querySelector('#set-movie');
var setColorInput = document.querySelector('#color-input');
var setMovieInput = document.querySelector('#movie-input');
var canvas = document.querySelector('#canvas');

var handleColorSetting = evt => {
    brushBox.style.backgroundColor = setColorInput.value.trim();
}

var handleClick = evt => {
    evt.target.style.backgroundColor = setColorInput.value.trim();
}

var handleMovieSetting = evt => {
    var title = setMovieInput.value;
    var options = {
        url: `http://www.omdbapi.com/?t=${title}&apikey=2f6435d9`
    };
    $.ajax(options).done(handleResponse);
}

setColorBtn.addEventListener('click', handleColorSetting);
setMovieBtn.addEventListener('click', handleMovieSetting);

document.querySelector('#color-form').addEventListener('submit', handleColorSetting);
document.querySelector('#movie-form').addEventListener('submit', handleMovieSetting);


for (var i = 0; i < 3111; i++) {
    var div = document.createElement('div');
    div.classList = 'pixel';
    div.style.width = '12px';
    div.style.height = '12px';
    div.style.border = '1px solid black';
    div.style.borderRadius = '10%';  
    div.addEventListener('mouseover', handleClick);
    canvas.appendChild(div);
}

var handleResponse = res => {
    canvas.style.backgroundImage = `url('${res.Poster}')`;
    canvas.style.backgroundSize = '100%';
    canvas.style.backgroundRepeat = 'fixed';
}



