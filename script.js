const myLibrary = [];

function Book(name, author, about, status) {
  this.name = name;
  this.author = author;
  this.about = about;
  this.isRead = status;
  this.id = crypto.randomUUID();
}

function addBookToLibrary(name, author, about) {
  // take params, create a book then store it in the array
  let book = new Book(name, author, about, true);
  console.log(book.name);
  myLibrary.push(book);
  document.querySelector('#bookName').value = "";
  document.querySelector('#bookAuthor').value = "";
  document.querySelector('#bookAbout').value = "";
  updateLibrary();
}

/**
 *  Make an array of Books or something
 */

const newBookBtn = document.querySelector(".newBook");
const newBookDialog = document.querySelector(".newBookDialog");
const submitBtn = document.querySelector(".submit");
const trashBtn = document.querySelector(".trash");
const toggle = document.querySelector(".toggle");
const card = document.querySelector(".card");
const container = document.querySelector(".container");

newBookBtn.addEventListener("click", (e) => {
  newBookDialog.show();
});

submitBtn.addEventListener("click", (e) => {
  addBookToLibrary(document.querySelector('#bookName').value, document.querySelector('#bookAuthor').value, document.querySelector('#bookAbout').value);
});

function updateLibrary() {
  container.innerHTML = '';
  for(let i = 0; i < myLibrary.length; i++) {
    const clonedParent = card.cloneNode(true);
    container.appendChild(clonedParent);

    const bookName = clonedParent.querySelector('.currBookName');
    const bookAuthor = clonedParent.querySelector('.currBookAuthor');
    const bookDesc = clonedParent.querySelector('.currBookDesc');

    bookName.textContent = myLibrary[i].name;
    bookAuthor.textContent = myLibrary[i].author;
    bookDesc.textContent = myLibrary[i].about;
    clonedParent.setAttribute("id", myLibrary[i].id);

    const toggle = clonedParent.querySelector(".toggle");
    
    changeColor(clonedParent, toggle, i);

    toggle.addEventListener("click", (e) => {
      const thisCard = e.target.closest(".card");
      const toggle = clonedParent.querySelector(".toggle");
      changeReadStatus(thisCard, i);   
      changeColor(thisCard, toggle, i);
    })

    const trashBtn = clonedParent.querySelector(".trash");
      trashBtn.addEventListener("click", (e) => {
        const thisCard = e.target.closest(".card");      
        deleteBook(thisCard);
      });
  }
}

// Broken
function changeColor(thisCard, toggle, i){
  if(!myLibrary[i].isRead){
    toggle.style.backgroundColor = "Red";
    toggle.textContent = "Not Read"
  }
  else {
    toggle.style.backgroundColor = "lightgreen";
    toggle.textContent = "Read"
  }
}

function changeReadStatus(parent, i){
    myLibrary[i].isRead = !myLibrary[i].isRead;
    console.log(myLibrary[i].isRead);
}

function deleteBook(card){
  for(let i = 0; i < myLibrary.length; i++){
    if(card.getAttribute('id') == myLibrary[i].id){
      console.log("Deleted")
      myLibrary.splice(i, 1);
      updateLibrary();
      break;
    }
  }  
}

//TODO: Fix Read