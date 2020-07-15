var pt = {

    alamein : ['flinders street','richmond','east richmond','burnley','hawthorn','glenferrie'],

    glenWaverly : ['flagstaff','melbourne central','parliament','richmond','kooyong','tooronga'],

    sandringham : ['southern cross','richmond','south yarra','prahan','windsor']
}

//var origin = prompt('Origin?');
//var destination = prompt('Destination?');

var origin = '';
var destination = '';
var intersection = 'richmond';

var startingLine = '';
var endingLine = '';
var sameLine = '';

var startingLineColor = '';
var endingLineColor = '';
var sameLineColor = '';
var stationColor = 'black';
var intersecStationColor = 'orange';

var startOriginIndex;
var endDestIndex;
var startIntersecIndex= '';
var endIntersecIndex= '';

var startingLineArray = [];
var endingLineArray = [];
var sameLineArray = [];

var timer1 = [];
var timer2 = [];
var params = [];
var nextParams = [];

var initiate = function () {
    var alameinStops = document.querySelectorAll(".alamein > rect");
    alameinStops.forEach(function(item) {
        item.style.fill = 'purple';
    });

    var glenWaverlyStops = document.querySelectorAll(".glenWaverly > rect");
    glenWaverlyStops.forEach(function(item) {
        item.style.fill = 'yellow';
    });

    var sandringhamStops = document.querySelectorAll(".sandringham > rect");
    sandringhamStops.forEach(function(item) {
        item.style.fill = 'blue';
    });
}



var clearAllStations = function () {
    var highlightedItems = document.querySelectorAll("rect, ellipse");
    highlightedItems.forEach(function(item) {
        item.style.fill = 'white';
    });
    document.querySelector('#svg_39').style.fill = 'white';
}

var clearTimers = function () {
    timer1.forEach(function (timeId) {
        window.clearTimeout(timeId);
    })

    timer2.forEach(function (timeId) {
        window.clearTimeout(timeId);
    })
}

var clearSvg = function () {
    const parent = document.getElementById("mapSvg");
    while (parent.firstChild) {
        parent.firstChild.remove();
    }
}

var resetAll = function () {
    intersection = 'richmond';
    
    startingLine = '';
    endingLine = '';
    sameLine = '';
    
    startingLineColor = '';
    endingLineColor = '';
    sameLineColor = '';
    stationColor = 'black';
    intersecStationColor = 'orange';

    startOriginIndex;
    endDestIndex;
    startIntersecIndex= '';
    endIntersecIndex= '';
    
    startingLineArray.length = 0;
    endingLineArray.length = 0;
    sameLineArray.length = 0;

    clearTimers();

    timer1.length = 0;
    timer2.length = 0;

    clearAllStations();

    params.length = 0;
    nextParams.length = 0;

    clearSvg();
}

var draw = function (stationColor, stationName, rectYCounter, ellipseCYCounter, stYCounter, tmYCounter, timeCounter, lastStation, diff) {
    
    //console.log('In draw');
    //console.log(stationColor);
    //console.log(stationName);
    var svgns = "http://www.w3.org/2000/svg";
    var diva = document.createElementNS(svgns, 'g');
     
    if (!lastStation) {
        var rect = document.createElementNS(svgns, 'rect');
        rect.setAttributeNS(null, 'x', 34);
        rect.setAttributeNS(null, 'y', rectYCounter);
        rect.setAttributeNS(null, 'height', '50');
        rect.setAttributeNS(null, 'width', '13');
        rect.setAttributeNS(null, 'fill', stationColor);
        diva.appendChild(rect);
    }
        var ellipse = document.createElementNS(svgns, 'ellipse');
        ellipse.setAttributeNS(null, 'cx', 40);
        ellipse.setAttributeNS(null, 'cy', ellipseCYCounter);
        ellipse.setAttributeNS(null, 'rx', 12);
        ellipse.setAttributeNS(null, 'ry', 12);
        ellipse.setAttributeNS(null, 'fill', stationColor);
        diva.appendChild(ellipse);
        //console.log('in else ' + lastStation);

      
        var stationTxt = document.createElementNS(svgns, 'text');
        stationTxt.setAttributeNS(null, 'x', 80);
        stationTxt.setAttributeNS(null, 'y', stYCounter);
        stationTxt.setAttributeNS(null, 'font-family', 'serif');
        stationTxt.setAttributeNS(null, 'font-size', '26px');
        stationTxt.setAttributeNS(null, 'fill', '#green');
        stationTxt.setAttributeNS(null, 'class', 'station-text');
        stationTxt.textContent = '';
        stationTxt.textContent = stationName;
        diva.appendChild(stationTxt);

        var timeTxt = document.createElementNS(svgns, 'text');
        timeTxt.setAttributeNS(null, 'x', 80);
        timeTxt.setAttributeNS(null, 'y', tmYCounter);
        timeTxt.setAttributeNS(null, 'font-family', 'serif');
        timeTxt.setAttributeNS(null, 'font-size', '26px');
        timeTxt.setAttributeNS(null, 'fill', '#green');
        timeTxt.setAttributeNS(null, 'class', 'time-text');
        timeTxt.textContent = timeCounter;
        diva.appendChild(timeTxt);
        
        nextParams = [rectYCounter, ellipseCYCounter, stYCounter, tmYCounter, diff];

        document.querySelector('#mapSvg').appendChild(diva);
}

var machine = function () { 
    // var pt = {
    //     alamein : ['Flinders Street','Richmond','East Richmond','Burnley','Hawthorn','Glenferrie'],

    //     glenWaverly : ['Flagstaff','Melbourne Central','Parliament','Richmond','Kooyong','Tooronga'],

    //     sandringham : ['Southern Cross','Richmond','South Yarra','Prahran','Windsor']
    // }


    for (var key in pt) {
        if (pt[key].indexOf(origin) !== -1) {
            startingLine = key;
            startOriginIndex = pt[key].indexOf(origin);
        }
        if (pt[key].indexOf(destination) !== -1) {
            endingLine = key;
            endDestIndex = pt[key].indexOf(destination);
        }

        if ((startingLine !== '') && (endingLine !== '')) {
            if (startingLine !== endingLine) {
                startIntersecIndex = pt[startingLine].indexOf(intersection);
                endIntersecIndex = pt[endingLine].indexOf(intersection);
            } else {
                sameLine = startingLine;
            }
            break;        
        }
    }


    if (startingLine === endingLine) {
    
        if ((startOriginIndex - endDestIndex) < 0) {
            for (var i = startOriginIndex; i <= endDestIndex; i++) {
                sameLineArray.push(pt[startingLine][i]);
            }
        } else if ((startOriginIndex - endDestIndex) > 0) {
            for (var i = startOriginIndex; i >= endDestIndex; i--) {
                sameLineArray.push(pt[startingLine][i]);
            }
        }   
    } else {

        if ((startOriginIndex - startIntersecIndex) < 0 ){
            
            for (var i = startOriginIndex; i <= startIntersecIndex; i++) {
                startingLineArray.push(pt[startingLine][i]);
            }
        } else if ((startOriginIndex - startIntersecIndex) > 0 ){
            for (var i = startOriginIndex; i >= startIntersecIndex; i--) {
                startingLineArray.push(pt[startingLine][i]);
            }
        }


        if ((endDestIndex - endIntersecIndex) < 0 ){
    
            for (var i = endIntersecIndex; i >= endDestIndex; i--) {
                endingLineArray.push(pt[endingLine][i]);
            }
        } else if ((endDestIndex - endIntersecIndex) > 0 ){
        
            for (var i = endIntersecIndex; i <= endDestIndex; i++) {
                endingLineArray.push(pt[endingLine][i]);
            }
        }

    }


    // console.log(startingLine);
    // console.log(endingLine);
    // console.log(sameLine);

    // console.log(startOriginIndex);  
    // console.log(endDestIndex);




    // console.log(startingLineArray);
    // console.log(endingLineArray);
    // console.log(sameLineArray);

    var setLineColor = function () { 

        if (sameLine !== '') {
            switch (sameLine) {
                case 'alamein': 
                    sameLineColor = 'purple';
                    break;
                case 'glenWaverly': 
                    sameLineColor = 'yellow'; 
                    break;
                case 'sandringham': 
                    sameLineColor = 'blue';
                    break;
                default:
                sameLineColor = 'white';                       
            }
        }
        if (startingLine !== '') {
            switch (startingLine) {
                case 'alamein': 
                    startingLineColor = 'purple';
                    break;
                case 'glenWaverly': 
                    startingLineColor = 'yellow';
                    break;   
                case 'sandringham': 
                    startingLineColor = 'blue';
                    break;
                default:
                startingLineColor = 'white';                       
            }
        }
        if (endingLine !== '') {
            switch (endingLine) {
                case 'alamein': 
                    endingLineColor = 'purple';
                    break;
                case 'glenWaverly': 
                    endingLineColor = 'yellow';
                    break;   
                case 'sandringham': 
                    endingLineColor = 'blue';
                    break;
                default:
                endingLineColor = 'white';                       
            }
        }
    }

    setLineColor();

    var forwardSameLine = function () {
        //console.log(sameLineArray);

        for (let i = startOriginIndex; i <= endDestIndex; i++) {
            (function(ind) {
                var time1 = setTimeout(function(){
                   // console.log(sameLineArray[ind - startOriginIndex]);
                    if (sameLineArray[ind - startOriginIndex] === 'richmond') {
                        document.querySelector('#svg_39').style.fill = intersecStationColor; 
                    }
                    document.querySelectorAll('.' + sameLine + ' > ellipse')[ind].style.fill = stationColor;
                    document.querySelectorAll('.' + sameLine + ' > ellipse')[ind].setAttribute('rx', '13');
                    document.querySelectorAll('.' + sameLine + ' > ellipse')[ind].setAttribute('ry', '11');
                    if (ind < (endDestIndex)) {
                        document.querySelector('#line-grad > stop').setAttribute('stop-color', sameLineColor);
                        document.querySelectorAll('.' + sameLine + ' > rect')[ind].style.fill = 'url(#line-grad)';
                        var time2 = setTimeout(function(){
                            document.querySelectorAll('.' + sameLine + ' > rect')[ind].style.fill = sameLineColor;
                            //console.log('ind ' + ind + ' + 1');
                        }, 900);
                        timer2.push(time2);  
                    }                           
                }, 1500 * ind);
                timer1.push(time1);
                //console.log('t1 :' + timer1 + '  t2: ' + timer2);
            })(i);
        }
    }

    var backwardSameLine = function () {
        //console.log(sameLineArray);
        for (let i = startOriginIndex; i >= endDestIndex; i--) {
            (function(ind) {    
                var time1 = setTimeout(function(){
                    //console.log(ind + ' asd');
                    ind -= endDestIndex;
                    var bind = startOriginIndex - ind;
                    //console.log(ind + ' asd');
                    //console.log(bind + ' asd');
                    //console.log(sameLineArray[ind]);
                    if (sameLineArray[ind] === 'richmond') {
                        document.querySelector('#svg_39').style.fill = intersecStationColor; 
                    }
                    document.querySelectorAll('.' + sameLine + ' > ellipse')[bind].style.fill = stationColor;
                    document.querySelectorAll('.' + sameLine + ' > ellipse')[bind].setAttribute('rx', '13');
                    document.querySelectorAll('.' + sameLine + ' > ellipse')[bind].setAttribute('ry', '11');
                    if (bind > (endDestIndex)) {
                        document.querySelectorAll('#line-grad-back > stop')[1].setAttribute('stop-color', sameLineColor);
                        document.querySelectorAll('.' + sameLine + ' > rect')[bind - 1].style.fill = 'url(#line-grad-back)';
                        var time2 = setTimeout(function(){
                            document.querySelectorAll('.' + sameLine + ' > rect')[bind - 1].style.fill = sameLineColor;
                            //console.log('ind ' + ind);
                        }, 900);
                        timer2.push(time2);  
                    }
                    timer1.push(time1);                           
                }, 1500 * ind);
            })(i);
        }
    }

    var forwardEndingLine = function () {
        //console.log(endingLineArray);
        for (let i = endIntersecIndex; i <= endDestIndex; i++) {
            (function(vind) {
                var time1 = setTimeout(function(){
                    //console.log('vind ' + vind);
                    //console.log(endingLineArray[vind - endIntersecIndex]);
                    if (endingLineArray[vind - endIntersecIndex] === 'richmond') {
                        document.querySelector('#svg_39').style.fill = intersecStationColor; 
                    }
                    document.querySelectorAll('.' + endingLine + ' > ellipse')[vind].style.fill = stationColor;
                    document.querySelectorAll('.' + endingLine + ' > ellipse')[vind].setAttribute('rx', '13');
                    document.querySelectorAll('.' + endingLine + ' > ellipse')[vind].setAttribute('ry', '11');
                    if (vind < (endDestIndex)) {
                        document.querySelector('#line-grad > stop').setAttribute('stop-color', endingLineColor);
                        document.querySelectorAll('.' + endingLine + ' > rect')[vind].style.fill = 'url(#line-grad)';
                        var time2 = setTimeout(function(){
                            document.querySelectorAll('.' + endingLine + ' > rect')[vind].style.fill = endingLineColor;
                            //console.log('vindi ' + vind);
                        }, 900);
                        timer2.push(time2);  
                    }                           
                }, 1500 * vind);
                timer1.push(time1);
            })(i);
        }
    }

    var backwardEndingLine = function () {
        //console.log(endingLineArray);
        for (let i = endIntersecIndex; i >= endDestIndex; i--) {
            (function(vind) {
                var time1 = setTimeout(function(){
                    //console.log('vind ' + vind);
                    vind -= endDestIndex;
                    var bind = endIntersecIndex - vind;
                    //console.log('vind ' + vind);
                    //console.log('bind ' + bind);
                    //console.log(endingLineArray[vind]);
                    if (endingLineArray[vind] === 'richmond') {
                        document.querySelector('#svg_39').style.fill = intersecStationColor; 
                    }
                    document.querySelectorAll('.' + endingLine + ' > ellipse')[bind].style.fill = stationColor;
                    document.querySelectorAll('.' + endingLine + ' > ellipse')[bind].setAttribute('rx', '13');
                    document.querySelectorAll('.' + endingLine + ' > ellipse')[bind].setAttribute('ry', '11');
                    if (bind > (endDestIndex)) {
                        document.querySelectorAll('#line-grad-back > stop')[1].setAttribute('stop-color', endingLineColor);
                        document.querySelectorAll('.' + endingLine + ' > rect')[bind - 1].style.fill = 'url(#line-grad-back)';
                        var time2 = setTimeout(function(){
                            document.querySelectorAll('.' + endingLine + ' > rect')[bind - 1].style.fill = endingLineColor;
                            //console.log('vindi ' + bind);
                        }, 900);
                        timer2.push(time2);  
                    }                           
                }, 1500 * vind);
                timer1.push(time1);
            })(i);
        }
    }

    var forwardStartingLine = function () {
        //console.log(startingLineArray);
        for (let i = startOriginIndex; i <= startIntersecIndex; i++) {
            (function(ind) {
                var time1 = setTimeout(function(){
                    //console.log('ind ' + ind);
                    //console.log(startingLineArray[ind - startOriginIndex]);
                    if (startingLineArray[ind - startOriginIndex] === 'richmond') {
                        document.querySelector('#svg_39').style.fill = intersecStationColor; 
                    }
                    document.querySelectorAll('.' + startingLine + ' > ellipse')[ind].style.fill = stationColor;
                    document.querySelectorAll('.' + startingLine + ' > ellipse')[ind].setAttribute('rx', '13');
                    document.querySelectorAll('.' + startingLine + ' > ellipse')[ind].setAttribute('ry', '11');
                    if (ind < (startIntersecIndex)) {
                        document.querySelector('#line-grad > stop').setAttribute('stop-color', startingLineColor);
                        document.querySelectorAll('.' + startingLine + ' > rect')[ind].style.fill = 'url(#line-grad)';
                        var time2 = setTimeout(function(){
                            document.querySelectorAll('.' + startingLine + ' > rect')[ind].style.fill = startingLineColor;
                            //console.log('indi ' + ind);
                        }, 900);
                        timer2.push(time2);  
                    }          
                    if (ind >= startIntersecIndex) {
                        if ((endDestIndex - endIntersecIndex) < 0 ) {
                            backwardEndingLine(); 
                        } else if ((endDestIndex - endIntersecIndex) > 0 ) {
                            forwardEndingLine();
                        }    
                    }           
                }, 1500 * ind);
                timer1.push(time1);
            })(i);
        }
    }

    var backwardStartingLine = function () {
        //console.log(startingLineArray);
        for (let i = startOriginIndex; i >= startIntersecIndex; i--) {
            (function(ind) {
                var time1 = setTimeout(function(){
                    //console.log(ind + ' 1asd');
                    ind -= startIntersecIndex;
                    var bind = startOriginIndex - ind;
                    //console.log(ind + ' 2asd');
                    //console.log(bind + ' 3asd');    
                    //console.log('bind ' + bind);
                    //console.log('ind ' + ind);
                    //console.log('blah ' + startingLineArray[ind]);
                    if (startingLineArray[ind] === 'richmond') {
                        document.querySelector('#svg_39').style.fill = intersecStationColor; 
                    }
                    document.querySelectorAll('.' + startingLine + ' > ellipse')[bind].style.fill = stationColor;
                    document.querySelectorAll('.' + startingLine + ' > ellipse')[bind].setAttribute('rx', '13');
                    document.querySelectorAll('.' + startingLine + ' > ellipse')[bind].setAttribute('ry', '11');
                    if (bind > (startIntersecIndex)) {
                        document.querySelectorAll('#line-grad-back > stop')[1].setAttribute('stop-color', startingLineColor);
                        document.querySelectorAll('.' + startingLine + ' > rect')[bind - 1].style.fill = 'url(#line-grad-back)';
                        var time2 = setTimeout(function(){
                            document.querySelectorAll('.' + startingLine + ' > rect')[bind - 1].style.fill = startingLineColor;
                            console.log('indi ' + ind);
                        }, 900);
                        timer2.push(time2);  
                    }          
                    if (bind <= startIntersecIndex) {
                        if ((endDestIndex - endIntersecIndex) < 0 ) {
                            backwardEndingLine(); 
                        } else if ((endDestIndex - endIntersecIndex) > 0 ) {
                            forwardEndingLine();
                        }    
                    }            
                }, 1500 * ind);
                timer1.push(time1);
            })(i);
        }
    }

    if (startingLine === endingLine) {
        if ((startOriginIndex - endDestIndex) < 0) {
            forwardSameLine();
        } else if ((startOriginIndex - endDestIndex) > 0) {
            backwardSameLine();
        }
    } 
    else {
        if ((startOriginIndex - startIntersecIndex) < 0 ) {
            forwardStartingLine();
        } else if ((startOriginIndex - startIntersecIndex) > 0 ) {
            backwardStartingLine();
        }
    }
}   



initiate();



var searchBtn = document.querySelector('#search-btn');
var exchangeBtn = document.querySelector('#exchange-btn');

searchBtn.addEventListener('click', function () {
    origin = document.querySelector('#fromInput').value.trim().toLowerCase();
    //console.log(origin);
    destination = document.querySelector('#toInput').value.trim().toLowerCase();
    //console.log(destination);
    if ((origin !== '') && (destination !== '')) {
        //console.log('at1 :' + timer1 + '  at2: ' + timer2);
        resetAll();
        //console.log('rt1 :' + timer1 + '  rt2: ' + timer2);
        machine();
        //console.log('ft1 :' + timer1 + '  ft2: ' + timer2);
        //console.log('machine end1');

        params = [60, 50, 50, 70, 0];

        var repeater = function (stationColor, arr, params) {
            var currentdate = new Date(); 
            var rectYCounter = params[0];
            var ellipseCYCounter = params[1];
            var stYCounter = params[2];
            var tmYCounter = params[3];
            var diff = params[4];
            var lastStation = false;

            //console.log(arr);
            
            for (var i = 0; i < arr.length; i++) {
                if (i === (arr.length - 1)) {
                    lastStation = true;
                }

                var newDate = new Date(currentdate.getTime() + diff*60000);
                var timeCounter = newDate.getHours() + ' : ' + newDate  .getMinutes();

                draw(stationColor, arr[i], rectYCounter, ellipseCYCounter, stYCounter,  tmYCounter, timeCounter, lastStation, diff);
                
                //console.log('ASDASDASDASDS ' + timeCounter);
                ellipseCYCounter += 55;
                rectYCounter += 54;
                stYCounter += 55;
                tmYCounter += 55;
                diff += 30;
                
            }      
        }
        if (startingLine === endingLine) {
            repeater(sameLineColor, sameLineArray, params);
            //console.log('same line array ' + sameLineArray);
        } else {
            //console.log('in pramas XCXCXCXCXC' + nextParams);
            repeater(startingLineColor, startingLineArray, params);
            //console.log('in pramas ASDASDASDAS' + nextParams);
            repeater(endingLineColor, endingLineArray, nextParams);
            //console.log('starting line array ' + startingLineArray);
            //console.log('====');
            //console.log('ending line array ' + endingLineArray);
        }
        
        //console.log('machine end2');
    }
})

exchangeBtn.addEventListener('click', function () {
    var temp = document.querySelector('#fromInput').value;
    document.querySelector('#fromInput').value = document.querySelector('#toInput').value;
    document.querySelector('#toInput').value = temp;
})

