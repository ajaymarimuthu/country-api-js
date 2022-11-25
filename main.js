const searchBtn=document.getElementById('btn');
const h1text=document.getElementById('World_Countries');
const countrydetails=document.getElementById('country-details');
const emptycontainer=document.getElementById('empty-container');



const allcountires=document.getElementById('allcountires'); 
const topCountries=document.getElementById('topCountries'); 
const input=document.getElementById('input-field');
const clear=document.getElementById('clear');
const region=document.getElementById('region');
const dropdownitem=document.querySelectorAll('.dropdown-item');

 
const ALL_COUNRIES="https://restcountries.com/v3.1/all";
const COUNTRY_NAME="https://restcountries.com/v3.1/name/";

const CODE_API="https://restcountries.com/v3.1/alpha/";
const Language_API="https://restcountries.com/v2/lang/";
const CAPITAL_API="https://restcountries.com/v2/capital/";
const CONTINENT="https://restcountries.com/v2/region/";
const REGION="https://restcountries.com/v3.1/region/";




var countryDataArr=[];
 

searchBtn.addEventListener("click",(e)=>{

 

  if(input.value == ""){
    // console.log("null");

    h1text.innerHTML="<h2>Oops No Country Found....</h2>";
    
  // fetchApiData(ALL_COUNRIES);
   
  }
  else{
    h1text.innerHTML="World Countries";
    fetchInputCountry();
  
  }
 
  e.preventDefault();
})



// --------------NAVLINk ALL_COUNRIES buttton GETTING CLICK  ----------


allcountires.addEventListener('click',()=>{
  // console.log("");
   
  h1text.innerHTML="World Countries";

  fetchApiData(ALL_COUNRIES);
  // countryDataArr=[];
 
})


dropdownitem.forEach((val)=>{
   val.addEventListener('click',()=>{
    // console.log(val.text);

    fetchApiData(`${REGION}${val.text}`);
   })
})

 
clear.addEventListener('click',()=>{   
  // countrydetails.classList.add("hide");

  // console.log("click");
  displayEmptyCountry();
 

})

topCountries.addEventListener('click',()=>{
  console.log("hi");

  countryDataArr= [ 
  {"name":"United States of America",
  "topLevelDomain":[".us"],"alpha2Code":"US","alpha3Code":"USA","callingCodes":["1"],"capital":"Washington, D.C.",
  "altSpellings":["US","USA","United States of America"],"subregion":"Northern America","region":"Americas",
  "population":329484123,"latlng":[38.0,-97.0],"demonym":"American","area":9629091.0,"gini":41.4,
  "timezones":["UTC-12:00","UTC-11:00","UTC-10:00","UTC-09:00","UTC-08:00","UTC-07:00","UTC-06:00",
  "UTC-05:00","UTC-04:00","UTC+10:00","UTC+12:00"],"borders":["CAN","MEX"],"nativeName":"United States",
  "numericCode":"840","flags":{"svg":"https://flagcdn.com/us.svg","png":"https://flagcdn.com/w320/us.png"},
  "currencies":[{"code":"USD","name":"United States dollar","symbol":"$"}],
  "languages":[{"iso639_1":"en","iso639_2":"eng","name":"English","nativeName":"English"}],
  "translations":{"br":"Stadoù-Unanet","pt":"Estados Unidos","nl":"Verenigde Staten",
  "hr":"Sjedinjene Američke Države","fa":"ایالات متحده آمریکا","de":"Vereinigte Staaten von Amerika",
  "es":"Estados Unidos","fr":"États-Unis","ja":"アメリカ合衆国","it":"Stati Uniti D'America",
  "hu":"Amerikai Egyesült Államok"},"flag":"https://flagcdn.com/us.svg",
  "regionalBlocs":[{"acronym":"NAFTA","name":"North American Free Trade Agreement","otherNames":["Tratado de Libre Comercio de América del Norte",
  "Accord de Libre-échange Nord-Américain"]}],"cioc":"USA","independent":true},

 {"name":"India","topLevelDomain":[".in"],
  "alpha2Code":"IN","alpha3Code":"IND","callingCodes":["91"],"capital":"New Delhi","altSpellings":["IN","Bhārat","Republic of India",
  "Bharat Ganrajya"],"subregion":"Southern Asia","region":"Asia","population":1380004385,"latlng":[20.0,77.0],"demonym":"Indian",
  "area":3287590.0,"gini":35.7,"timezones":["UTC+05:30"],"borders":["AFG","BGD","BTN","MMR","CHN","NPL","PAK","LKA"],"nativeName":"भारत",
  "numericCode":"356","flags":{"svg":"https://flagcdn.com/in.svg","png":"https://flagcdn.com/w320/in.png"},
  "currencies":[{"code":"INR","name":"Indian rupee","symbol":"₹"}],"languages":[{"iso639_1":"hi","iso639_2":"hin",
  "name":"Hindi","nativeName":"हिन्दी"},{"iso639_1":"en","iso639_2":"eng","name":"English","nativeName":"English"}],
  "translations":{"br":"India","pt":"Índia","nl":"India","hr":"Indija","fa":"هند","de":"Indien","es":"India",
  "fr":"Inde","ja":"インド","it":"India","hu":"India"},"flag":"https://flagcdn.com/in.svg",
  "regionalBlocs":[{"acronym":"SAARC","name":"South Asian Association for Regional Cooperation"}],
  "cioc":"IND","independent":true}

]
  
  displayCountry();
   
})





//  -------------Method to fetch  COuntry Detail based on click in UI----------- 
// -------------Method to  fetch  COuntry Detail  based on click in UI--------- 


const fetchApiData = async (country)=>{

  const response= await fetch(country);
  countryDataArr=[];
  const data=await response.json();
  console.log(data);

  countryDataArr=data;
  displayCountry();
  countryDataArr=[];
  // console.log(countryDataArr);
 
  // return data; 

}





//  -------------Method to fetch single  COuntry Detail----------- 
// -------------Method to  fetch single  COuntry Detail--------- 



const fetchInputCountry = async (country)=>{

  

  if(input.value == null){
    return;
  }
  const response=await fetch(`${COUNTRY_NAME}${input.value}`);
  countryDataArr = [];
    
    h1text.innerHTML = `<h5>${input.value.toUpperCase()} </h5>`
  if(response.status >= 200 && response.status < 300) {
    const myJson = await response.json();
    // console.log(myJson);
    countryDataArr =myJson;
    console.log(countryDataArr);
} 
else {
    //error handle
    console.log(response.status, response.statusText);
    // h1text.innerHTML = "<h5>No data found.</h5>"
    return;
}

displayCountry();
countryDataArr =[];

}




//  -------------Method to display Empty Container----------- 
// -------------Method to display  Empty Containe----------- 



function displayEmptyCountry(){

  const div=document.createElement('div');

  empty-container.append(div);

}

 

//  -------------Method to display all the COuntry Details----------- 
// -------------Method to display all the COuntry Details----------- 


// function displayCountry(value,index){
function displayCountry(){



  countryDataArr.forEach(country=>{

    // console.log("Hi");


    const maindiv=document.createElement('div');
  maindiv.classList.add("card");
 

  
  const subdiv=document.createElement('div');
  subdiv.classList.add("card-body");

  const img=document.createElement('img');
  img.src=country.flags.png;
  img.setAttribute("height","matchparent");
  img.setAttribute("width","25%");
  subdiv.append(img);

//   const img=document.createElement('background-image');
//    img.url=country.flags.png;
//   img.setAttribute("height","matchparent");
//  img.setAttribute("width","25%");
//  subdiv.append(img);



  const h5=document.createElement('h5');
  h5.classList.add("card-title");
  h5.innerHTML=  ` Country : ${country.name.common}`;
  subdiv.append(h5);



   const p=document.createElement('p');
   p.classList.add("card-text")
  p.innerHTML= ` Capital : ${country.capital}`;
  subdiv.append(p);

 
  
  const p2=document.createElement('p');
  p2.classList.add("card-text")
 p2.innerHTML= ` Population : ${country.population}`;
 subdiv.append(p2);


  
 const p3=document.createElement('p');
 p3.classList.add("card-text")
p3.innerHTML=` TimeZone : ${country.timezones[0]}`;


subdiv.append(p3);

  
const p4=document.createElement('p');
p4.classList.add("card-text")
p4.innerHTML=  ` Continent : ${country.continents}`;   

subdiv.append(p4);


  
const p5=document.createElement('p');
p5.classList.add("card-text")
p5.innerHTML=  ` SubRegion : ${country.subregion}`;   

subdiv.append(p5);

  
const p6=document.createElement('p');
p6.classList.add("card-text")
p6.innerHTML=  ` UnMember : ${country.unMember}`;   

subdiv.append(p6);


  
const p7=document.createElement('p');
p7.classList.add("card-text")
p7.innerHTML=  ` Independent : ${country.independent}`;   

subdiv.append(p7);


  
const p8=document.createElement('p');
p8.classList.add("card-text")
p8.innerHTML=  ` CountryCode : ${country.cca2}`;   

subdiv.append(p8);


// const p9=document.createElement('p');
// p9.classList.add("card-text")
// p9.innerHTML=  ` Currency : ${country.currencies[0]}`;   

// subdiv.append(p9);


 

// --------------------------------------------------


  maindiv.append(subdiv);
  countrydetails.append(maindiv);
 
    
  })
 
}

 