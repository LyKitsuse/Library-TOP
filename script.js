const myLibrary = [];

function Book(name, author, about) {
  this.name = name;
  this.author = author;
  this.about = about;
  this.isRead = true;
}

function addBookToLibrary(name, author, about) {
  // take params, create a book then store it in the array
  let book = new Book(name, author, about);
  console.log(book.name);
  myLibrary.push(book);
  document.querySelector('#bookName').value = "";
  document.querySelector('#bookAuthor').value = "";
  document.querySelector('#bookAbout').value = "";
}

/**
 *  Make an array of Books or something
 */

const newBookBtn = document.querySelector(".newBook");
const newBookDialog = document.querySelector(".newBookDialog");
const submitBtn = document.querySelector(".submit");
const trashBtn = document.querySelector(".trash");
const toggle = document.querySelector(".toggle");

newBookBtn.addEventListener("click", (e) => {
  newBookDialog.show();
});

submitBtn.addEventListener("click", (e) => {
  addBookToLibrary(document.querySelector('#bookName').value, document.querySelector('#bookAuthor').value, document.querySelector('#bookAbout').value);
});

trashBtn.addEventListener("click", (e) => {
  alert("Book Deleted")
})

toggle.addEventListener("click", (e) => {
  // do some Object shit
  if(toggle.style.backgroundColor == "lightgreen"){
    console.log("Not Read");

    toggle.style.backgroundColor = "Red";
    toggle.textContent = "Not Read"
  }
  else {
    console.log("Read");
    toggle.style.backgroundColor = "lightgreen";
    toggle.textContent = "Read"
  }
  
})

/**
 * / Add book
 * - Add Books into the Dom after submitting
 * - Add Books from Array into DOM one by one
 * - Remove Book from Array and Update the Site
 */
