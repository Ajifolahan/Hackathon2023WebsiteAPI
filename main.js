function getTime() {
    // const location = document.getElementById('city').value;
    // const area = document.getElementById('area').value;
    // const apiPass = `${location}/${area}`;

    //const url = `https://world-time2.p.rapidapi.com/timezone/${apiPass}`;

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '2c1aa69a2cmsh459677a0cc807a5p1c8204jsn71a2effba083',
            'X-RapidAPI-Host': 'world-time2.p.rapidapi.com'
        }
    };

    // fetch(url, options)
    // .then(response => response.json())
    // .then(response => {
    //     console.log(response)
    //     // const resultElement = document.getElementById('result');
    //     // resultElement.innerHTML = `Datetime: ${response.datetime}`;
    // })
    // .catch(err => console.error(err));

    
    
    fetch('https://world-time2.p.rapidapi.com/ip', options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
             const resultElement = document.getElementById('result');
        resultElement.innerHTML = `Datetime: ${response.day_of_year}`;})
        .catch(err => console.error(err));
}