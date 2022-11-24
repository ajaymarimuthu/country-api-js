const searchBtn=document.getElementById('btn');
const countrydetails=document.getElementById('country-details');

const heading=document.getElementsByClassName('country-heading');

const ALL_COUNRIES="https://restcountries.com/v3.1/all";

var countryData=[];


window.onload=function(){
  heading.innerHTML="<h2>Countries</h2>";
}
searchBtn.addEventListener("click",(e)=>{
  // console.log("hi");

  const promsiseResult=fetchApiData(ALL_COUNRIES);
  


  promsiseResult.then( (data)=>{
   
    data.forEach((element,i) => {

      console.log(element);
      displayCountry(element,i);
      
    });

    // console.log(data);
  } )
 
  
  e.preventDefault();
})

const fetchApiData = async (country)=>{

  const response= await fetch(country);
  const data=response.json();
  return data; 

}



function displayCountry(value,index){

  // console.log(index);

  // countrydetails.classList.add("d-flex")

  const maindiv=document.createElement('div');
  maindiv.classList.add("card");
  // maindiv.setAttribute("width","5rem");

  
  const subdiv=document.createElement('div');
  subdiv.classList.add("card-body");

  const img=document.createElement('img');
  img.src=value.flags.png;
  img.setAttribute("height","matchparent");
  img.setAttribute("width","25%");
  subdiv.append(img);



  const h5=document.createElement('h5');
  h5.classList.add("card-title");
  h5.innerHTML=value.name.common;
  subdiv.append(h5);



   const p=document.createElement('p');
   p.classList.add("card-text")
  p.innerHTML= value.capital;
  subdiv.append(p);



  // const img2=document.createElement('img');

 
//  img2.href=value.maps.googleMaps;
//   img2.setAttribute("href",value.maps.googleMaps);
//   // img2.setAttribute("width","25%");
//   subdiv.append(img2);


  
  const p2=document.createElement('p');
  p2.classList.add("card-text")
 p2.innerHTML= value.population;
 subdiv.append(p2);


  
 const p3=document.createElement('p');
 p3.classList.add("card-text")
p3.innerHTML= value.timezones[0];

subdiv.append(p2);

 

// --------------------------------------------------


  maindiv.append(subdiv);
  countrydetails.append(maindiv);

   

 

}

 