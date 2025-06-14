function getStudents(url){
fetch(url)
  .then(response=>response.json())
  .then(data=>console.log(data))
  .catch(err=>console.log(err))
  
}
getStudents('https://jsonplaceholder.typicode.com/albums') // 100 albüm döner