
var request=new XMLHttpRequest();
request.open("get","https://restcountries.com/v3.1/all",true)
//step3 :bridge to the server
request.send();
//step4 :server respons
request.onload=function()
{
  var data=request.response ;
 // console.log(data) 
  var result=JSON.parse(data)
console.log(result)
//1.Get all the countries from Asia continent /region using Filter function
console.log("//Get all the countries from Asia continent /region using Filter function")

var result=JSON.parse(request.response);
result.filter((countries) => {
      return countries.region ==="Asia";
})
console.log(result);
console.log("//Get all the countries with a population of less than 2 lakhs using Filter function")
const population = result.filter((element)=>{
    return element.population<200000;
})
console.log(population);
//---2.-----------Print the following details name, capital, flag, using forEach function
//-------------------------------------------------------------------------------------
result.forEach(element => {
    console.log(element.name);
        console.log(element.capital);
        console.log(element.flag); 

   });
   //--3.-------Print the total population of countries using reduce function
//------------------------------------------------------------------------
   var total = result.reduce((acc,curr) =>{
    return acc+curr.population;
} ,0);

console.log(total);
//---------------------------------------------------------------
//4.Print the country that uses US dollars as currency.

 var currency = result.filter((value)=> value.currencies && value.currencies.USD)
 currency.forEach((value)=>console.log(value.name.common))

}