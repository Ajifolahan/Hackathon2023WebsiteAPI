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
        resultElement.innerHTML = `Day Of the Year: ${response.day_of_year}`;
        const resultElement1 = document.getElementById('result1');
        resultElement1.innerHTML = `Date and Time: ${response.datetime}`;
        const resultElement2 = document.getElementById('result2');
        resultElement2.innerHTML = `Day Of the Week: ${response.day_of_week}`;
        const resultElement3 = document.getElementById('result3');
        resultElement3.innerHTML = `Timezone: ${response.timezone}`;
        const resultElement4 = document.getElementById('result4');
        resultElement4.innerHTML = `Week of the Year: ${response.week_number}`;})
        .catch(err => console.error(err));
}