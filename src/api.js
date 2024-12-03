const Api_Url = "https://xcountries-backend.azurewebsites.net/all"

export const fetchData = async()=>{
 const response = await fetch(Api_Url);
 const data = await response.json();
 return data;
}