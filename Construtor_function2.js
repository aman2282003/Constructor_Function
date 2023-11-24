function Book(title, Author, genre, price) {
    this.title = title;
    this.Author = Author;
    this.genre = genre;
    this.price= price;

}


function Author(namee, birthYear, nationality){
    this.namee = namee;
    this.birthYear = birthYear;
    this.nationality = nationality;
}

let a1 = new Author("Aman singh", 2003, "Indian")
let a2 = new Author ("Rohit sharma", 1995, "India")
let a3 = new Author ("David warner", 1992, "Australian")
let a4 = new Author ("Susanta smanta", 1999, "Russian")
let a5 = new Author ("sumit kumar", 2002, "Indian")



let b1 = new Book ("Eak Rat", a1, "Romance", 10000)
let b2 = new Book ("oneVsone", a2, "Fight", 800)
let b3 = new Book ("The ashes", a3, "cricket", 600)
let b4 = new Book ("Preshani", a4, "Adult", 6000)
let b5 = new Book ("Eak the coder", a5, "Coding", 500)





function getBookinfo(){
    console.log(this.title)
    console.log(this.Author.namee)
    console.log(this.genre)
    console.log(this.price)
}


getBookinfo.call(b1)
getBookinfo.call(b2)
getBookinfo.call(b3)
getBookinfo.call(b4)
getBookinfo.call(b5)