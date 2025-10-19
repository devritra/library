const dialog = document.querySelector(".control_box dialog");
const showDialogBtn = document.querySelector(".control_box>button");
const bookName = document.querySelector("#book_name");
const authorName = document.querySelector("#author_name");
const pageNo = document.querySelector("#page_no");
const bookImage = document.querySelector("#book_image");
const submitBtn = document.querySelector(".form_cells:last-of-type>button");
const bookDisplayArea = document.querySelector(".book_display");
const bookShelf = [];
 
showDialogBtn.addEventListener("click",()=> // "New Book" button eventlistner
{
    dialog.showModal();
})

// function Book(name, author, pages, image) // book constructor
// {
//     this.name = name;
//     this.author = author;
//     this.pages = pages;
//     this.image = image;
//     this.id = crypto.randomUUID();
// }
class Book{
    constructor(name, author, pages, image){
        this.name = name;
        this.author = author;
        this.pages = pages;
        this.image = image;
        this.read = false;
        this.id = crypto.randomUUID();
    }
    toggleRead(){
        this.read = this.read === false ? true : false;
    }
}
function addBookToBookShelf(name, author, pages, image) // makes the book and adds to the bookshelf array
{ 
    if(image==="")
    {
        image = "./img/3854108_81501.jpg"
        const book = new Book(name, author, pages, image);
        bookShelf.push(book);
        return;
    } 
    else 
    {
        const book = new Book(name, author, pages, image);
        bookShelf.push(book);
        return;
    }
}
function toggleReadBtn(button, book) // toggles the state of Read button
{
    if(book.read === true){
        button.textContent = "Read";
        button.style.backgroundColor = "rgb(123, 220, 123)";
        button.style.color = "rgb(0, 104, 0)";
        return;
    }
    else{
        button.textContent = "Not Read";
        button.style.backgroundColor = "rgb(255, 102, 102)";
        button.style.color = "rgb(136, 0, 0)";
        return;
    }
}
function displayBookCards(bookShelf) // displays the book object information in respective cards on the page
{
    bookDisplayArea.innerHTML = "";
    let shelfLength = bookShelf.length - 1;
    for(let i = 0; i <= shelfLength; i++)
    {
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
        toggleReadBtn(readBtn, bookShelf[i]);
        readBtn.addEventListener("click",(e)=>
        {
            console.log(bookShelf[i]);
            bookShelf[i].toggleRead();
            toggleReadBtn(e.target, bookShelf[i]);
        })
        bookRemoveBtn.textContent = "Remove";
        bookRemoveBtn.addEventListener("click",(e)=>
        {
            e.target.parentNode.parentNode.remove();
            bookShelf.splice(i,1);
        })
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

submitBtn.addEventListener("click", ()=> // "Add book" button event lisstner
{
    let pageNoCheck = Number(pageNo.value);
    if(bookName.value==="" || authorName.value==="" || pageNoCheck === 0 || pageNoCheck < 0 || isNaN(pageNoCheck))
    {
        return;
    }
    addBookToBookShelf(bookName.value, authorName.value, pageNoCheck,bookImage.value);
    bookName.value="";
    authorName.value="";
    pageNo.value="";
    bookImage.value="";
    dialog.close();
    displayBookCards(bookShelf);
    return;
})