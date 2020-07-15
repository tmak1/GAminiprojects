
// NB: Changed the specification of the problems slightly
// Actual question: 
// Stage 1: show 10 sets of images with each scroll
// Stage 2: show 5 sets of images and further 5 upon pressing 'show more'

// What was implemented here:
// Stage 1 + 2: show 9 sets and further 9 on scrolling. Then do that again if 'show more' pressed.
// That is, on scroll show 9 images and show 18 images everytime 'show more' pressed
// refactored

var searchForm = document.querySelector('#search-form');
var searchInput = document.querySelector('#search-input');
var rowBox = document.querySelector('.row-box');
var loader = document.querySelector('.loader');
var showMoreBtn = document.querySelector('#show-more');
var trendingBtn = document.querySelector('#trending');


var offset = 0;
var limit = 9;
var mode = 'search';

var reset = () => {
    offset = 0;
    while (rowBox.firstChild) {
        rowBox.firstChild.remove();
    }
    showMoreBtn.style.display = '';
}

var partyParrot = e => {
    e.preventDefault();
    if (e.target.classList.contains('shake-horizontal')) {
        e.target.classList.remove('shake-horizontal');
    } else {
        e.target.classList.add('shake-horizontal');
        setTimeout(() => {
            e.target.classList.remove('shake-horizontal');       
        }, 850);      
    }
}


var createGifs = res => {
    for (let i = 0; i < limit; i++) {
        gif = res["data"][i]["images"]["original"]["url"];  
        div = document.createElement('div');
        div.classList = 'card';
        giphy = document.createElement('img');
        giphy.src = gif;
        div.appendChild(giphy);
        rowBox.appendChild(div);
    }
}
 
var handleResponse = res => {
    loader.style.display = 'block';
    setTimeout(() => {
        loader.style.display = 'none';
        createGifs(res);
        offset += (limit + 1);
        console.log(offset);
        window.addEventListener('scroll', handleScroll);  
    }, 1000);
    
}

var handleSearch = e => {
    e.preventDefault();
    if (mode === 'trending') {
        mode = 'search';
    }
    reset();  
    search = searchInput.value;
    var options = {
        url: `http://api.giphy.com/v1/gifs/search?api_key=zqQHB0ywSf2MWVWLIAavb0JOHLwyYxhI&offset=${offset}&limit=${limit}&q='${search}'`    
    };
    $.ajax(options).done(handleResponse);
}

var handleTrending = e => {
    e.preventDefault();
    if (mode === 'search') {
        mode = 'trending';       
    }
    reset();
    var options = {
        url: `http://api.giphy.com/v1/gifs/trending?api_key=zqQHB0ywSf2MWVWLIAavb0JOHLwyYxhI&offset=${offset}&limit=${limit}`
    };
    $.ajax(options).done(handleResponse);
}

var handleScroll = e => {
    e.preventDefault()
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        if (offset % 20 === 0) {
            showMoreBtn.style.display = 'block';
        } else {
            window.removeEventListener('scroll', handleScroll); 
            // pause the scroll till ajax returns response or else offset continues increasing even before
            // the next batch of gifs have been obtained from ajax's returned response
            search = searchInput.value;
            if (mode === 'search') {
                var url = `http://api.giphy.com/v1/gifs/search?api_key=zqQHB0ywSf2MWVWLIAavb0JOHLwyYxhI&offset=${offset}&limit=${limit}&q='${search}'`  
            } else if (mode === 'trending') {
                var url = `http://api.giphy.com/v1/gifs/trending?api_key=zqQHB0ywSf2MWVWLIAavb0JOHLwyYxhI&offset=${offset}&limit=${limit}`;
            }
            var options = {
                url: url,
            };    
            $.ajax(options).done(handleResponse);
        }
    }   
}

var handleShowmore = e => {
    e.preventDefault();
    window.removeEventListener('scroll', handleScroll);
    search = searchInput.value;
    if (mode === 'search') {
        var url = `http://api.giphy.com/v1/gifs/search?api_key=zqQHB0ywSf2MWVWLIAavb0JOHLwyYxhI&offset=${offset}&limit=${limit}&q='${search}'`
    } else if (mode === 'trending') {
        var url = `http://api.giphy.com/v1/gifs/trending?api_key=zqQHB0ywSf2MWVWLIAavb0JOHLwyYxhI&offset=${offset}&limit=${limit}`;
    }
    var options = {
        url: url,
    };
    
    $.ajax(options).done(handleResponse);
    showMoreBtn.style.display = '';
}


searchForm.addEventListener('submit', handleSearch);
trendingBtn.addEventListener('click', handleTrending);
showMoreBtn.addEventListener('click', handleShowmore);
rowBox.addEventListener('click', partyParrot);


