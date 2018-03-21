class Book{
    constructor(title,author,isbn){
        this.title = title;
        this.author=author;
        this.isbn=isbn;
    }
}

class UI{
    addBookToList(book){
        const list = document.getElementById("bookList");
        const row = document.createElement("tr");
        row.innerHTML = `<td>${book.title}</td>
                        <td>${book.author}</td>
                        <td>${book.isbn}</td>
                        <td><a href="javascript:void(0);" class='delete'>X</a></td>`;
        list.appendChild(row);
    }

    clearFields(){
        bookTitle.value="";
        bookAuthor.value="";
        bookIsbn.value="";
    }

    showAlertMsg(msg,type){
        const alert = document.createElement("div");
        alert.className=`alert ${type}`;
        alert.appendChild(document.createTextNode(msg));
        const container = document.querySelector(".card-body");
        container.insertBefore(alert,bookForm);
        setTimeout(function(){
            document.querySelector(".alert").remove();
        },1000);
    }

    deleteBook(target){
        if(target.className === "delete"){
            target.parentElement.parentElement.remove();
        }
    }
}

/*Selectors*/
const submitBtn = document.querySelector(".js-submit");
const bookTitle = document.getElementById("bookTitle");
const bookAuthor = document.getElementById("bookAuthor");
const bookIsbn = document.getElementById("bookIsbn");
const bookForm = document.getElementById("bookForm");
const bookList = document.getElementById("bookList");

loadEventHandlers();

function loadEventHandlers(){
    submitBtn.addEventListener("click",addBook);
    bookList.addEventListener("click",deleteBook);
}

function addBook(e){
    let _title = bookTitle.value;
    let _author = bookAuthor.value;
    let _isbn = bookIsbn.value;
    let book = new Book(_title,_author,_isbn);
    
    const ui = new UI();
    //add validation
    if(_title===''||_author===''||_isbn===''){
        //show alert
        ui.showAlertMsg("Please fill the details correctly","alert-danger");
    }
    else{
        // add to grid
        ui.addBookToList(book);
        ui.clearFields();
        ui.showAlertMsg("Book added successfully","alert-success");
    }
    e.preventDefault();
}
function deleteBook(e){
    const ui = new UI();
    ui.deleteBook(e.target);
    ui.showAlertMsg("Record deleted successfully","alert-success");
}