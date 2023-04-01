

function getTime() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': APIKEY ,
            'X-RapidAPI-Host': 'world-time2.p.rapidapi.com'
        }
    };
  
    
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
