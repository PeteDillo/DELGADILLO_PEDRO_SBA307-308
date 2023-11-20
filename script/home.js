import landingPageData from '../DATA/MAINCONTENT.JS';
(() => {
  const content = document.querySelector('.content-container');

  //create card
  const cardCreation = ({ source, comment }) => {
    //create card element
    const section = document.createElement('section');
    const article = document.createElement('article');
    const p = document.createElement('p');
    //class name for css
    section.className="card";
    //fill elements
    article.innerHTML = source;
    p.innerHTML = comment;
    section.appendChild(article)
    section.appendChild(p)

    addCardToDOM(section);
  };
  //take section element and add to dom
  const addCardToDOM = (section) =>{
    content.appendChild(section)
  };
  //s
  for (const imageData of landingPageData) {
    cardCreation(imageData);
  }
})();
