const api = {
    key: 'e5e9af15bc37dcf35670805e4b4c146c',
    base: 'api.openweathermap.org/data/2.5/'
};

const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt){
    //13 is equivalent of ENTER key
    if(evt.keyCode == 13){
        getResults(searchbox.value); 
        console.log(searchbox.value);
        //once this has ran we run fetch request
    }
}

//FETCH REQUEST
function getResults(query){
    fetch(`${api.base}weather?q=${query}&units=standard&APPID=${api.key}`)
    .then(weather => { // returns weatherf5
        return weather.json();  
    }) .then(displayResults); //passes through to displayresults function
}

function displayResults(weather){
    console.log(weather); 
    let city = document.querySelector('.location .city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    let now = new Date();
    let date = document.querySelector('.location .date');
    date.innerText = dateBuilder(now);
}

function dateBuilder(d){
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 
    'August', 'September', 'October', 'November', 'December'];

    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
}