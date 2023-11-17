(() => {
  const tableBody = document.querySelector('tbody');
addCat("../resources/img/cat2.jpg", "Kitty","2.5 years" )
addCat("../resources/img/cat3.jpg", "Mittens","12 years" )

  function addCat(picture, name, age) {
    //create elements
    const tableRow = document.createElement('tr');
    const tableDataPicture = document.createElement('td');
    const img = document.createElement('img');
    const tableDataName = document.createElement('td');
    const tableDataAge = document.createElement('td');

    
    //fill elements
    tableDataPicture.className="cat-image-container";
    img.src =picture;
    img.alt = "picture of cat";
    tableDataName.innerText = name;
    tableDataAge.innerText = age;

    // add table data to to table body
    tableDataPicture.appendChild(img);
    tableRow.appendChild(tableDataPicture);
    tableRow.appendChild(tableDataName);
    tableRow.appendChild(tableDataAge);

    // add to dom
    tableBody.appendChild(tableRow);

  }




})();
