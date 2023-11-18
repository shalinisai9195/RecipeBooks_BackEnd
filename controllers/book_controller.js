const Book = require('../model/Book');


const getAllBooks = async (req,res,next)=>{
    //This will give all books
    let books;
  try {
    books = await Book.find();
   
  }catch (error) {
    console.log(error);
  }
  if(!books){
    return res.status(404).send({
      message:"No Books found"
    });
  }
   return res.status(200).send({
      books
    });
}

const getBookId = async (req,res,next)=>{
    try {
      let id = req.params.id;
      let book = await Book.findById(id);
      if(!book){
        return res.status(404).send({
          message:"Book ID not Found"
        })
      }
      return res.status(200).send({
        book
      })
    } catch (error) {
      console.log(error);
    }

};

const addBook = async (req , res, next)=>{
 const {name, author, description, price, image, available} = req.body
    let book;
    try {
      book =new Book({
        name,
        author,
        description,
        price,
        image,
        available
      });
      await book.save();
    } catch (error) {
      console.log(error);
    }
    if(!book){
       return res.status(500).json({
        message:"Unable to Add"
       })
    }
    return res.status(201).json({
      book
    })
}

const updBooks = async(req,res,next)=>{
  try {
    const id = req.params.id;

    const {name, author, description, price, image, available} = req.body;

    let book = await Book.findByIdAndUpdate(id,{
      name,
      author,
      description,
      price,
      image,
      available
    });
    book = await book.save();
     
    if(!book){
      return res.status(404).json({message : "Unable to update this Book ID"})
    }
    return res.status(200).json({ book });
  } catch (error) {
     console.log(error);
  }
}

const deleteBookById = async(req,res,next)=>{
   try {
     const id = req.params.id ;

     let book = await Book.findByIdAndDelete(id);

     if(!book){
      return res.status(404).send({message:"This Book Id not deleted"});
     }
     return res.status(200).send({ book });

   } catch (error) {
       console.log(error);
   }
}

exports.getAllBooks = getAllBooks;
exports.addBook = addBook;
exports.getBookId = getBookId;
exports.updBooks = updBooks;
exports.deleteBookById = deleteBookById;