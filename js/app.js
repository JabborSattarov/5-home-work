const listOne = document.querySelector('.list-1');
const listTwo = document.querySelector('.list-2');
const tempEl = document.querySelector('#template-1').content;

const tempElTwo = document.querySelector('#template-2').content;


const bookmark = [];


let inpSearch = document.querySelector("#inpSearch");
inpSearch.addEventListener("input", searching);

function searching() {
    listOne.innerHTML = "";

    let filmsName = films.filter(name => {
        let lower = name.title.toLowerCase();
        if (lower.includes(inpSearch.value)) return name;
    })
    render(filmsName, listOne)
}


function render(films, list) {
    list.innerHTML = null;
    const fragEl = document.createDocumentFragment();

    films.forEach(film => {
        const clone = tempEl.cloneNode(true);
        const img = clone.querySelector(".img");
        img.src = film.poster;

        const title = clone.querySelector(".title").textContent = film.title;

        const bookmarkBtn = clone.querySelector(".bookmarkBtn");
        bookmarkBtn.dataset.idonfication = film.id

        fragEl.appendChild(clone)

    
    })
    
    list.appendChild(fragEl)
}
render(films,listOne)



const addToBookmark = listOne.addEventListener("click", evt => {

 if(  evt.target.matches(".bookmarkBtn") ){

    const idonfication = evt.target.dataset.idonfication;
    const findEl = films.find(mov => mov.id == idonfication);

    if(!bookmark.includes(findEl)){
        bookmark.push(findEl)
    
        renderBookmark(bookmark, listTwo)
    }
    
    
 }
})

function renderBookmark(films, list) {
    list.innerHTML = null;
    const fragEl = document.createDocumentFragment();
   
    films.forEach(film => {
        const clone = tempElTwo.cloneNode(true);
        
        const title = clone.querySelector(".title-2").textContent = film.title;

        const delBtn = clone.querySelector(".deleteBtn");
        delBtn.dataset.idonfication = film.id;
            console.log(delBtn);
        fragEl.appendChild(clone)

    
    })
    
    list.appendChild(fragEl)

}

renderBookmark(bookmark, listTwo)

const delBookmark = listTwo.addEventListener("click", evt => {

    if(  evt.target.matches(".deleteBtn") ){
   
       const idonfication = evt.target.dataset.idonfication;
       let findArr = bookmark.findIndex(film => film.id == idonfication);
       bookmark.splice(findArr, 1)
       
       renderBookmark(bookmark, listTwo)
           
    }
   })
   

   