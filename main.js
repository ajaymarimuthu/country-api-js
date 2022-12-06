const searchBtn = document.getElementById("btn");
const h1text = document.getElementById("World_Countries");
const countrydetails = document.getElementById("country-details");

// const countrydetailslist=document.getElementsByClassName("country-details-list");

const emptycontainer = document.getElementById("empty-container");

const allcountires = document.getElementById("allcountires");
const topCountries = document.getElementById("topCountries");
const input = document.getElementById("input-field");
const clear = document.getElementById("clear");
const region = document.getElementById("region");
const regioncountry = document.getElementById("region-countries");
const dropdownitem = document.querySelectorAll(".dropdown-item");

// site :
// https://restcountries.com/

const ALL_COUNRIES = "https://restcountries.com/v3.1/all";
const COUNTRY_NAME = "https://restcountries.com/v3.1/name/";
const CODE_API = "https://restcountries.com/v3.1/alpha/";
const Language_API = "https://restcountries.com/v2/lang/";
const CAPITAL_API = "https://restcountries.com/v2/capital/";
const CONTINENT = "https://restcountries.com/v2/region/";
const REGION = "https://restcountries.com/v3.1/region/";

var countryDataArr = [];

// -------------------Automatic display of countries-------------------

const automaticDisplay = async (ALL_COUNRIES) => {
  countryDataArr = [];
  const response = await fetch(ALL_COUNRIES);
  const data = await response.json();

  countryDataArr = data;

  displayCountry();
};
window.onload = automaticDisplay(ALL_COUNRIES);

// ------------------End of Automatic display of countries--------------

// --------------------input field value accessing------------------

var input_value;

input.addEventListener("keyup", (e) => {
  input_value = e.target.value;
});

// ----------End of input field value accessing---------------

// ------------------Search of countries--------------

searchBtn.addEventListener("click", (e) => {
  window.stop();
  if (input_value == "") {
    console.log("null");

    h1text.innerHTML = "<h2>Oops No Country Found....</h2>";
  } else {
    h1text.innerHTML = "World Countries";

    fetchInputCountry(input_value);
  }

  e.preventDefault();
});

//  -------------Method to fetch single  COuntry Detail-----------
// -------------Method to  fetch single  COuntry Detail---------

const fetchInputCountry = async (input_value) => {
  if (input_value == null) {
    return;
  }

  countryDataArr = [];

  const response = await fetch(`${COUNTRY_NAME}${input_value}`);

  h1text.innerHTML = `<h5>${input_value.toUpperCase()} </h5>`;
  if (response.status >= 200 && response.status < 300) {
    const myJson = await response.json();

    countrydetails.classList.add("hide");

    countryDataArr = myJson;

    displayCountryOne();
  } else {
    console.log(response.status, response.statusText);

    return;
  }

  countryDataArr = [];
};



// --------------END OF METHOD TO FETCH SINGLE COUNTRY  ----------

// --------------NAVLINk ALL_COUNRIES buttton GETTING CLICK  ----------

allcountires.addEventListener("click", () => {
  h1text.innerHTML = "World Countries";
  countryDataArr = [];

  countrydetails.classList.remove("hide");
  automaticDisplay(ALL_COUNRIES);
});

dropdownitem.forEach((val) => {
  val.addEventListener("click", () => {
    regioncountry.classList.remove("hide");
    fetchApiData(`${REGION}${val.text}`);
  });
});

// ------------Clear button functionality-----------------

clear.addEventListener("click", (e) => {
  countrydetails.classList.add("hide");
  regioncountry.classList.add("hide");
  emptycontainer.classList.add("hide");

  input.value = "";
  h1text.innerHTML = " ";
  e.preventDefault();
});

// ------------End of Clear button functionality-----------------




// //  -------------Method to fetch  COuntry Detail based on click in UI-----------
// // -------------Method to  fetch  COuntry Detail  based on click in UI---------

const fetchApiData = async (country) => {

  //  let len=countryDataArr.length;

  countrydetails.classList.add("hide");

  // countryDataArr.slice(0,len-1);
  countryDataArr = [];

  const response = await fetch(country);

  const data = await response.json();

  countryDataArr = data;

  displayRegionCountry();
};



function displayRegionCountry() {
  // console.log("display region country");

  countryDataArr.forEach((country) => {
    console.log("display region country loop");
    const maindiv = document.createElement("div");
    maindiv.classList.add("card");

    const subdiv = document.createElement("div");
    subdiv.classList.add("card-body");

    const img = document.createElement("img");
    img.src = country.flags.png;
    img.setAttribute("height", "matchparent");
    img.setAttribute("width", "25%");
    subdiv.append(img);

    const h5 = document.createElement("h5");
    h5.classList.add("card-title");
    h5.innerHTML = ` Country : ${country.name.common}`;
    subdiv.append(h5);

    const p = document.createElement("p");
    p.classList.add("card-text");
    p.innerHTML = ` Capital : ${country.capital}`;
    subdiv.append(p);

    const p2 = document.createElement("p");
    p2.classList.add("card-text");
    p2.innerHTML = ` Population : ${country.population}`;
    subdiv.append(p2);

    const p3 = document.createElement("p");
    p3.classList.add("card-text");
    p3.innerHTML = ` TimeZone : ${country.timezones[0]}`;

    subdiv.append(p3);

    const p4 = document.createElement("p");
    p4.classList.add("card-text");
    p4.innerHTML = ` Continent : ${country.continents}`;

    subdiv.append(p4);

    const p5 = document.createElement("p");
    p5.classList.add("card-text");
    p5.innerHTML = ` SubRegion : ${country.subregion}`;

    subdiv.append(p5);

    const p6 = document.createElement("p");
    p6.classList.add("card-text");
    p6.innerHTML = ` UnMember : ${country.unMember}`;

    subdiv.append(p6);

    const p7 = document.createElement("p");
    p7.classList.add("card-text");
    p7.innerHTML = ` Independent : ${country.independent}`;

    subdiv.append(p7);

    const p8 = document.createElement("p");
    p8.classList.add("card-text");
    p8.innerHTML = ` CountryCode : ${country.cca2}`;

    subdiv.append(p8);

    // --------------------------------------------------

    maindiv.append(subdiv);
    regioncountry.append(maindiv);
  });
}


// ---------------------------------------------------------




// -----------------------------------------------------------

function displayCountryOne() {
  countryDataArr.forEach((country) => {
    // console.log("Insde empty containers");

    const maindiv = document.createElement("div");
    maindiv.classList.add("card");

    const subdiv = document.createElement("div");
    subdiv.classList.add("card-body");

    const img = document.createElement("img");
    img.src = country.flags.png;
    img.setAttribute("height", "matchparent");
    img.setAttribute("width", "25%");
    subdiv.append(img);

    const h5 = document.createElement("h5");
    h5.classList.add("card-title");
    h5.innerHTML = ` Country : ${country.name.common}`;
    subdiv.append(h5);

    const p = document.createElement("p");
    p.classList.add("card-text");
    p.innerHTML = ` Capital : ${country.capital}`;
    subdiv.append(p);

    const p2 = document.createElement("p");
    p2.classList.add("card-text");
    p2.innerHTML = ` Population : ${country.population}`;
    subdiv.append(p2);

    const p3 = document.createElement("p");
    p3.classList.add("card-text");
    p3.innerHTML = ` TimeZone : ${country.timezones[0]}`;

    subdiv.append(p3);

    const p4 = document.createElement("p");
    p4.classList.add("card-text");
    p4.innerHTML = ` Continent : ${country.continents}`;

    subdiv.append(p4);

    const p5 = document.createElement("p");
    p5.classList.add("card-text");
    p5.innerHTML = ` SubRegion : ${country.subregion}`;

    subdiv.append(p5);

    const p6 = document.createElement("p");
    p6.classList.add("card-text");
    p6.innerHTML = ` UnMember : ${country.unMember}`;

    subdiv.append(p6);

    const p7 = document.createElement("p");
    p7.classList.add("card-text");
    p7.innerHTML = ` Independent : ${country.independent}`;

    subdiv.append(p7);

    const p8 = document.createElement("p");
    p8.classList.add("card-text");
    p8.innerHTML = ` CountryCode : ${country.cca2}`;

    subdiv.append(p8);

    // --------------------------------------------------

    maindiv.append(subdiv);
    emptycontainer.append(maindiv);
  });
}

// ---------------------------------------------------------

//  -------------Method to display all the COuntry Details-----------
// -------------Method to display all the COuntry Details-----------

function displayCountry() {
  countryDataArr.forEach((country) => {
    const maindiv = document.createElement("div");
    maindiv.classList.add("card");
    

    const subdiv = document.createElement("div");
    subdiv.classList.add("card-body");

    const img = document.createElement("img");
    img.src = country.flags.png;
    img.setAttribute("height", "matchparent");
    img.setAttribute("width", "25%");
    // img.setAttribute("background-image",)
    // img.style.background=url('');
    subdiv.append(img);

    const h5 = document.createElement("h5");
    h5.classList.add("card-title");
    h5.innerHTML = ` Country : ${country.name.common}`;
    subdiv.append(h5);

    const p = document.createElement("p");
    p.classList.add("card-text");
    p.innerHTML = ` Capital : ${country.capital}`;
    subdiv.append(p);

    const p2 = document.createElement("p");
    p2.classList.add("card-text");
    p2.innerHTML = ` Population : ${country.population}`;
    subdiv.append(p2);

    const p3 = document.createElement("p");
    p3.classList.add("card-text");
    p3.innerHTML = ` TimeZone : ${country.timezones[0]}`;

    subdiv.append(p3);

    const p4 = document.createElement("p");
    p4.classList.add("card-text");
    p4.innerHTML = ` Continent : ${country.continents}`;

    subdiv.append(p4);

    const p5 = document.createElement("p");
    p5.classList.add("card-text");
    p5.innerHTML = ` SubRegion : ${country.subregion}`;

    subdiv.append(p5);

    const p6 = document.createElement("p");
    p6.classList.add("card-text");
    p6.innerHTML = ` UnMember : ${country.unMember}`;

    subdiv.append(p6);

    const p7 = document.createElement("p");
    p7.classList.add("card-text");
    p7.innerHTML = ` Independent : ${country.independent}`;

    subdiv.append(p7);

    const p8 = document.createElement("p");
    p8.classList.add("card-text");
    p8.innerHTML = ` CountryCode : ${country.cca2}`;

    subdiv.append(p8);

    // --------------------------------------------------

    maindiv.append(subdiv);
    countrydetails.append(maindiv);
  });
}

// ---------------

// topCountries.addEventListener("click", () => {
//   // console.log("hi");
//   countryDataArr=[];
//   countrydetails.classList.remove("hide");

//   countryDataArr = [
//     {
//       name: "United States of America",
//       topLevelDomain: [".us"],
//       alpha2Code: "US",
//       alpha3Code: "USA",
//       callingCodes: ["1"],
//       capital: "Washington, D.C.",
//       altSpellings: ["US", "USA", "United States of America"],
//       subregion: "Northern America",
//       region: "Americas",
//       population: 329484123,
//       latlng: [38.0, -97.0],
//       demonym: "American",
//       area: 9629091.0,
//       gini: 41.4,
//       timezones: [
//         "UTC-12:00",
//         "UTC-11:00",
//         "UTC-10:00",
//         "UTC-09:00",
//         "UTC-08:00",
//         "UTC-07:00",
//         "UTC-06:00",
//         "UTC-05:00",
//         "UTC-04:00",
//         "UTC+10:00",
//         "UTC+12:00",
//       ],
//       borders: ["CAN", "MEX"],
//       nativeName: "United States",
//       numericCode: "840",
//       flags: {
//         svg: "https://flagcdn.com/us.svg",
//         png: "https://flagcdn.com/w320/us.png",
//       },
//       currencies: [{ code: "USD", name: "United States dollar", symbol: "$" }],
//       languages: [
//         {
//           iso639_1: "en",
//           iso639_2: "eng",
//           name: "English",
//           nativeName: "English",
//         },
//       ],
//       translations: {
//         br: "Stadoù-Unanet",
//         pt: "Estados Unidos",
//         nl: "Verenigde Staten",
//         hr: "Sjedinjene Američke Države",
//         fa: "ایالات متحده آمریکا",
//         de: "Vereinigte Staaten von Amerika",
//         es: "Estados Unidos",
//         fr: "États-Unis",
//         ja: "アメリカ合衆国",
//         it: "Stati Uniti D'America",
//         hu: "Amerikai Egyesült Államok",
//       },
//       flag: "https://flagcdn.com/us.svg",
//       regionalBlocs: [
//         {
//           acronym: "NAFTA",
//           name: "North American Free Trade Agreement",
//           otherNames: [
//             "Tratado de Libre Comercio de América del Norte",
//             "Accord de Libre-échange Nord-Américain",
//           ],
//         },
//       ],
//       cioc: "USA",
//       independent: true,
//     },

//     {
//       name: "India",
//       topLevelDomain: [".in"],
//       alpha2Code: "IN",
//       alpha3Code: "IND",
//       callingCodes: ["91"],
//       capital: "New Delhi",
//       altSpellings: ["IN", "Bhārat", "Republic of India", "Bharat Ganrajya"],
//       subregion: "Southern Asia",
//       region: "Asia",
//       population: 1380004385,
//       latlng: [20.0, 77.0],
//       demonym: "Indian",
//       area: 3287590.0,
//       gini: 35.7,
//       timezones: ["UTC+05:30"],
//       borders: ["AFG", "BGD", "BTN", "MMR", "CHN", "NPL", "PAK", "LKA"],
//       nativeName: "भारत",
//       numericCode: "356",
//       flags: {
//         svg: "https://flagcdn.com/in.svg",
//         png: "https://flagcdn.com/w320/in.png",
//       },
//       currencies: [{ code: "INR", name: "Indian rupee", symbol: "₹" }],
//       languages: [
//         {
//           iso639_1: "hi",
//           iso639_2: "hin",
//           name: "Hindi",
//           nativeName: "हिन्दी",
//         },
//         {
//           iso639_1: "en",
//           iso639_2: "eng",
//           name: "English",
//           nativeName: "English",
//         },
//       ],
//       translations: {
//         br: "India",
//         pt: "Índia",
//         nl: "India",
//         hr: "Indija",
//         fa: "هند",
//         de: "Indien",
//         es: "India",
//         fr: "Inde",
//         ja: "インド",
//         it: "India",
//         hu: "India",
//       },
//       flag: "https://flagcdn.com/in.svg",
//       regionalBlocs: [
//         {
//           acronym: "SAARC",
//           name: "South Asian Association for Regional Cooperation",
//         },
//       ],
//       cioc: "IND",
//       independent: true,
//     },
//   ];

//   displayCountry();
// });
