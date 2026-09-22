const BookRepository = require("../repositories/book.repository");

class BookService {
  constructor() {
    this.bookRepository = new BookRepository();
  }
  async addBook(bookData) {
    return await this.bookRepository.addBook(bookData);
  }
  async getAllBooks() {
    return await this.bookRepository.getAllBooks();
  }
  async getBook(ISBN) {
    return await this.bookRepository.getBook(ISBN);
  }
  async deleteBook(ISBN) {
    return await this.bookRepository.deleteBook(ISBN);
  }
}
module.exports = BookService;
