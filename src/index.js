import _ from 'lodash';
import './style.css';

// const countriesContainer = document.querySelector(".country_section");
const search = document.querySelector(".search_button");
const input = document.querySelector(".input");
const message = document.querySelector(".message");

search.addEventListener('click', ()=>{
  if (input.value = '') {
    message.innerHTML = `Add Country`
  }else {
    countryName = "portugal";
    message.innerHTML = countryName;
    console.log(countryName);
  }
})

// console.log(countryName);

// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v2/name/${countryName}`);
// request.send();

// request.addEventListener('load', ()=> {
//   const [data] = JSON.parse(request.responseText);
//   console.log(data);

//   countriesContainer.innerHTML = `<article class="country_card">
//   <img
//     class="country_image"
//     src="${data.flag}"
//     alt=""
//   />
//   <div class="country_data">
//     <h2 class="country_name">${data.name}</h2>
//     <h3 class="country_region">${data.region}</h3>
//     <p>
//       🕔
//       <span> Time-Zone : </span> ${data.timezones[0]}
//     </p>
//     <p>
//       🏢
//       <span> Capital : </span>${data.capital}
//     </p>
//     <p>
//       🗣️
//       <span> Languages : </span> ${data.languages[0].name}
//     </p>
//     <p>
//       📞
//       <span> Code : +</span>${data.callingCodes}
//     </p>
//     <p>
//       🧑🏻‍🤝‍🧑🏾
//       <span> Population : </span> ${data.population}
//     </p>
//     <p>
//       📏
//       <span> Area : </span> ${data.area} <span>km<sup>2</sup></span>
//     </p>
//     <p>
//       🚧
//       <span> Borders : </span> ${[data.borders]}
//     </p>
//     <p>
//       💵
//       <span> Currencies : </span> ${data.currencies[0].name} (${data.currencies[0].symbol})
//     </p>
//     <p>
//       🤝
//       <span> Block : </span> ${data.regionalBlocs[0].name}
//     </p>
//     <p>
//       🌍
//       <span> Lat-Long : </span> (${data.latlng})
//     </p>
//   </div>
// </article>`;
// })

let countryName = "portugal";
let url = `https://restcountries.com/v2/name/${countryName}`

const getCountry = () =>{
  fetch(url,{method: 'GET'})

  .then((res)=> res.json())
  .then((data)=>{
    const countriesContainer = document.querySelector(".country_section");
    countriesContainer.innerHTML = ``;

    return data.result.forEach(element => {
      const countriesContainer = document.querySelector(".country_section");
      countriesContainer.innerHTML = `${element.name}`;
    });
  })
}

getCountry();


{/* <article class="country_card">
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
      <span> Time-Zone : </span> ${data.timezones[0]}
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
      <span> Population : </span> ${data.population}
    </p>
    <p>
      📏
      <span> Area : </span> ${data.area} <span>km<sup>2</sup></span>
    </p>
    <p>
      🚧
      <span> Borders : </span> ${[data.borders]}
    </p>
    <p>
      💵
      <span> Currencies : </span> ${data.currencies[0].name} (${data.currencies[0].symbol})
    </p>
    <p>
      🤝
      <span> Block : </span> ${data.regionalBlocs[0].name}
    </p>
    <p>
      🌍
      <span> Lat-Long : </span> (${data.latlng})
    </p>
  </div>
</article> */}