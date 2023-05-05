TASK 2 COUNTRIES FLAG


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>hello</h1>
    <h2>hi</h2>


    <script>


        function reqListener() {
  console.log(JSON.parse(this.responseText));
}
        const req = new XMLHttpRequest();
req.addEventListener("load", reqListener);


req.open("GET","https://restcountries.com/v3.1/all" );
req.send();


fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    data.forEach(country => {
      console.log(country.flags.svg);
    });
  })
  ;


   
    const fetch = require('node-fetch');


fetch("https://restcountries.com/v3.1/all")
  .then(response => response.json())
  .then(data => {
    data.forEach(country => {
      console.log(`Name: ${country.name.common}`);
      console.log(`Region: ${country.region}`);
      console.log(`Sub-Region: ${country.subregion}`);
      console.log(`Population: ${country.population}`);
      
    });
  })
 
   
  })
 </script>
</body>
</html>






TASK 3

COUNTRIES NAME REGION POPULATION


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>hello</h1>
    <h2>hi</h2>


    <script>


        function reqListener() {
  console.log(JSON.parse(this.responseText));
}
        const req = new XMLHttpRequest();
req.addEventListener("load", reqListener);


req.open("GET","https://restcountries.com/v3.1/all" );
req.send();






fetch("https://restcountries.com/v3.1/all")
  .then(response => response.json())
  .then(data => {
    data.forEach(country => {
      console.log(`Name: ${country.name.common}`);
      console.log(`Region: ${country.region}`);
      console.log(`Sub-Region: ${country.subregion}`);
      console.log(`Population: ${country.population}`);
     
    });
  })
 
   
 
 </script>
</body>
</html>





TASK 1


let obj1 = {name: "person 1", age: 5};
let obj2 = {age: 5, name: "person 1"};

if (JSON.stringify(obj1) === JSON.stringify(obj2)) {
  console.log(" equal.");
} else {
  console.log("not equal.");
}

