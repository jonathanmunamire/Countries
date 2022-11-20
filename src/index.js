import _ from 'lodash';
import './style.css';

const search = document.querySelector(".search_button");
const countryInput = document.querySelector(".country_input");
const capitalInput = document.querySelector(".capital_input");
const alphaInput = document.querySelector(".alpha_input");
const codeInput = document.querySelector(".code_input");
const message = document.querySelector(".message");



search.addEventListener('click', ()=>{
  if ( countryInput.value == '' && capitalInput.value =='' && alphaInput.value =='' && codeInput.value =='') {
    message.innerHTML = `Fill a Section`
    message.classList.remove('hide'); 
    setTimeout(() =>{
      message.classList.add('hide');
    },2000)
  }else if (countryInput.value) {
    getCountry(countryInput.value);
    countryInput.value = '';
  }else if (capitalInput.value) {
    getCapital(capitalInput.value);
    capitalInput.value = '';
  }else if (alphaInput.value) {
    getAlpha(alphaInput.value);
    alphaInput.value = '';
  }else if (codeInput.value) {
    getCode(codeInput.value);
    codeInput.value = '';
  }else {
    console.log("Hey");
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
  
  if (data.borders){
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
        <span> Population : </span> ${(+data.population /1000000).toFixed(1)}M - ${data.demonym}
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
  }else{
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
        <span> Population : </span> ${(+data.population /1000000).toFixed(1)}M - ${data.demonym}
      </p>
      <p>
        📏
        <span> Area : </span> ${data.area} <span>km<sup>2</sup></span>
      </p>
      <p>
        🚧
        <span> Borders : </span> None
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
  }
})
}

const getCapital = (input) =>{ 

  let capitalName = input;
  let url2 = `https://restcountries.com/v2/capital/${capitalName}`

  const request = new XMLHttpRequest();
  request.open('GET', `${url2}`);
  request.send();

  request.addEventListener('load', ()=> {
  const [data] = JSON.parse(request.responseText);
  console.log(data);
  
  const countriesContainer = document.querySelector(".country_section");

    if (data.borders){
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
        <span> Population : </span> ${(+data.population /1000000).toFixed(1)}M - ${data.demonym}
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
  }else{
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
        <span> Population : </span> ${(+data.population /1000000).toFixed(1)}M - ${data.demonym}
      </p>
      <p>
        📏
        <span> Area : </span> ${data.area} <span>km<sup>2</sup></span>
      </p>
      <p>
        🚧
        <span> Borders : </span> None
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
  }
})
}

const getAlpha = (input) =>{ 

  let alphaName = input;
  let url3 = `https://restcountries.com/v2/alpha/${alphaName}`

  const request = new XMLHttpRequest();
  request.open('GET', `${url3}`);
  request.send();

  request.addEventListener('load', ()=> {
  const data = JSON.parse(request.responseText);
  console.log(data);
  
  const countriesContainer = document.querySelector(".country_section");

    if (data.borders){
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
        <span> Population : </span> ${(+data.population /1000000).toFixed(1)}M - ${data.demonym}
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
  }else{
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
        <span> Population : </span> ${(+data.population /1000000).toFixed(1)}M - ${data.demonym}
      </p>
      <p>
        📏
        <span> Area : </span> ${data.area} <span>km<sup>2</sup></span>
      </p>
      <p>
        🚧
        <span> Borders : </span> None
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
  }
})
}

const getCode = (input) =>{ 

  let codeName = input;
  let url4 = `https://restcountries.com/v2/callingcode/${codeName}`

  const request = new XMLHttpRequest();
  request.open('GET', `${url4}`);
  request.send();

  request.addEventListener('load', ()=> {
  const [data] = JSON.parse(request.responseText);
  console.log(data);
  
  const countriesContainer = document.querySelector(".country_section");

    if (data.borders){
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
        <span> Population : </span> ${(+data.population /1000000).toFixed(1)}M - ${data.demonym}
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
  }else{
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
        <span> Population : </span> ${(+data.population /1000000).toFixed(1)}M - ${data.demonym}
      </p>
      <p>
        📏
        <span> Area : </span> ${data.area} <span>km<sup>2</sup></span>
      </p>
      <p>
        🚧
        <span> Borders : </span> None
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
  }
})
}