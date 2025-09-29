const dialog = document.querySelector(".control_box dialog");
const showDialogBtn = document.querySelector(".control_box>button");

showDialogBtn.addEventListener("click",()=>{
    dialog.showModal();
})
//array
const bookShelf = [];
//submit button
const submitBtn = document.querySelector(".form_cells:last-of-type>button");
//inputs
const bookName = document.querySelector("#book_name");
const authorName = document.querySelector("#author_name");
let pageNo = document.querySelector("#page_no");
const bookImage = document.querySelector("#book_image");
//book display area
const bookDisplayArea = document.querySelector(".book_display");
//new elements



function Book(name, author, pages, image){
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.image = image;
    this.id = crypto.randomUUID();
}
function addBookToBookShelf(name, author, pages, image){
    if(image===""){
        image = "./img/3854108_81501.jpg"
        const book = new Book(name, author, pages, image);
        bookShelf.push(book);
        return;
    } else {
        const book = new Book(name, author, pages, image);
        bookShelf.push(book);
        return;
    }
}
function displayBookCards(bookShelf){
    bookDisplayArea.innerHTML = "";
    let shelfLength = bookShelf.length - 1;
    for(let i = 0; i <= shelfLength; i++){
        //aaaaaaa
        const bookCard = document.createElement("div");
        const bookImageHolder = document.createElement("img");
        const bookNameHolder = document.createElement("h3");
        const authorNameHolder = document.createElement("p");
        const pageNoHolder = document.createElement("p");
        const bookCardBtnHolder = document.createElement("div");
        const readBtn = document.createElement("button");
        const bookRemoveBtn = document.createElement("button");

        bookCard.classList.add("book_card");
        bookCardBtnHolder.classList.add("book_card_btn_holder")
        readBtn.textContent = "Not Read";
        bookRemoveBtn.textContent = "Remove";
        //aaaaaaa
        let book = bookShelf[i];
        bookNameHolder.textContent = `Name: ${book.name}`;
        authorNameHolder.textContent = `Author: ${book.author}`;
        pageNoHolder.textContent = `Pages: ${book.pages}`;
        bookImageHolder.src = book.image;
        bookCard.appendChild(bookImageHolder)
        bookCard.appendChild(bookNameHolder);
        bookCard.appendChild(authorNameHolder);
        bookCard.appendChild(pageNoHolder);
        bookCardBtnHolder.appendChild(readBtn);
        bookCardBtnHolder.appendChild(bookRemoveBtn);
        bookCard.appendChild(bookCardBtnHolder);
        bookDisplayArea.appendChild(bookCard);
    }
    return;
} 
// submitBtn.addEventListener("click",(e)=>{
//     e.preventDefault();
// })
submitBtn.addEventListener("click", ()=>{
    let pageNoCheck = Number(pageNo.value);
    if(bookName.value==="" || authorName.value==="" || pageNoCheck === 0 || isNaN(pageNoCheck)){
        return;
    }
    addBookToBookShelf(bookName.value, authorName.value, pageNoCheck,bookImage.value);
    displayBookCards(bookShelf);
    return;
})