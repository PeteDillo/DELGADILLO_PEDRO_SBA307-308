import DATA from "../DATA/SHELTERDATA.js";
(() => {
  const button = document.querySelector("#catSubmit");
  const tableBody = document.querySelector('tbody');


  //button event 
  button.addEventListener("click",(event)=>{
    event.preventDefault(); // Prevent default form submission
  //caputre form information
  const catNameInput = document.querySelector("#catName");
  const catAgeInput = document.querySelector("#catAge");
  const catImageInput = document.querySelector("#catImage");
  const catShelterInput = document.querySelector("#catShelter");

  const catName = catNameInput.value;
  const catAge = catAgeInput.value;
  const catImage = catImageInput.value;
  const catShelter = catShelterInput.value;

  addCat(catImage, catName, catAge, catShelter);

  // Clear form inputs after adding cat
  catNameInput.value = "";
  catAgeInput.value = "";
  catImageInput.value = "";
  } )

  
  function addCat(picture, name, age, location) {
    //create elements
    const tableRow = document.createElement('tr');
    const tableDataPicture = document.createElement('td');
    const img = document.createElement('img');
    const tableDataName = document.createElement('td');
    const tableDataAge = document.createElement('td');
    const tableDataLocation = document.createElement('td');
    
    //fill elements
    tableDataPicture.className="cat-image-container";
    img.src =picture;
    img.alt = "picture of cat";
    tableDataName.innerText = name;
    tableDataAge.innerText = `${age} year(s) old`;
    tableDataLocation.innerText = location;
    
    // add table data to to table body
    tableDataPicture.appendChild(img);
    tableRow.appendChild(tableDataPicture);
    tableRow.appendChild(tableDataName);
    tableRow.appendChild(tableDataAge);
    tableRow.appendChild(tableDataLocation);
    
    // add to dom
    tableBody.appendChild(tableRow);
  }

  DATA.forEach(cat => {
    addCat(cat.img, cat.name,cat.age,cat.shelterLocation )
  });

})();
