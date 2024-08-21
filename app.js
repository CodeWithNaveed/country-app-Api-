// fetch('https://restcountries.com/v3.1/name/all')
//     .then(res => res.json())
//     .then(data1 =>data1.forEach((data2) => 
//      {
//         console.log(data2);
//         document.querySelector('img').src = data2.flags.svg;
//         document.querySelector('.country_name').textContent = data2.name.common;
//         document.querySelector('.capital').textContent = data2.capital;
//         document.querySelector('.continent').textContent = data2.region;
//         document.querySelector('.population').textContent = data2.population;
//         document.querySelector('.currency').textContent = data2.currencies.EUR.name;
//         document.querySelector('.languages').textContent = data2.languages.eng;
//     }))
//     .catch(err => console.log (err));

const section = document.getElementById('section-container')

async function fetchData() {
    try {
        const res = await fetch('https://restcountries.com/v3.1/all');
        const data1 = await res.json();
        data1.forEach(data2 => {
            section.innerHTML += `
                <div class="card">
                    <img src="${data2.flags.svg}" title="name" >
                    <div class="info"> 
                        <h2>${data2.name.common}</h2><br>

                        <strong>Capital: </strong><span>${data2.capital}</span><br>
                    
                        <strong>Continent: </strong><span>${data2.region}</span><br>

                        <strong>Population: </strong><span>${data2.population}</span><br>

                        <strong>Currency: </strong><span>${data2.currencies[Object.keys(data2.currencies)[0]].symbol}</span><br>

                        <strong>Common Languages: </strong><span>${Object.keys(data2.languages)[0]}</span>
                    </div>
                </div>
            `
        })
    } catch (err) {
        console.log(err);
    }
}

fetchData() 



