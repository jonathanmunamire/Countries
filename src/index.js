import _ from 'lodash';
import './style.css';

const search = document.querySelector(".search_button");
const countryInput = document.querySelector(".country_input");
const message = document.querySelector(".message");



search.addEventListener('click', ()=>{
  if ( countryInput.value == '' ) {
    message.innerHTML = `Add Country`
    message.classList.remove('hide')
    setTimeout(() =>{
      message.classList.add('hide');
    },2000)
  }else {
    getCountry(countryInput.value);
    countryInput.value = '';
  }
})


const getCountry = (input) =>{ 

  let countryName = input;
  let url = `https://restcountries.com/v2/name/${countryName}`

  const request = new XMLHttpRequest();
  request.open('GET', `${url}`);
  request.send();

  request.addEventListener('load', ()=> {
  const [data] = JSON.parse(request.responseText);
  console.log(data);
  
  const countriesContainer = document.querySelector(".country_section");
  countriesContainer.innerHTML = `<article class="country_card">
  <img
    class="country_image"
    src="${data.flag}"
    alt=""
  />
  <div class="country_data">
    <h2 class="country_name">${data.name}</h2>
    <h3 class="country_region">${data.region}</h3>
    <p>
      🕔
      <span> Time-Zone : </span> ${[data.timezones.join(", ")]}
    </p>
    <p>
      🏢
      <span> Capital : </span>${data.capital}
    </p>
    <p>
      🗣️
      <span> Languages : </span> ${data.languages[0].name}
    </p>
    <p>
      📞
      <span> Code : +</span>${data.callingCodes}
    </p>
    <p>
      🧑🏻‍🤝‍🧑🏾
      <span> Population : </span> ${(+data.population /1000000).toFixed(1)}M
    </p>
    <p>
      📏
      <span> Area : </span> ${data.area} <span>km<sup>2</sup></span>
    </p>
    <p>
      🚧
      <span> Borders : </span> ${[data.borders.join(", ")]}
    </p>
    <p>
      💵
      <span> Currencies : </span> ${data.currencies[0].name} (${data.currencies[0].symbol})
    </p>
    <p>
      🌍
      <span> Lat-Long : </span> (${data.latlng})
    </p>
  </div>
  </article>`;
})
}





  