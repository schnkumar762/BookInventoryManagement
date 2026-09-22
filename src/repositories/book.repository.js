const db = require("../config/db.config");
class BookRepository {
  async addBook(bookData) {
    const { ISBN, Title, Description, Category, Edition, PublisherID } =
      bookData;

    const query = `
      INSERT INTO book
      (ISBN, Title, Description, Category, Edition, PublisherID)
      VALUES (?, ?, ?, ?, ?, ?)
    `;

    const [result] = await db
      .promise()
      .query(query, [ISBN, Title, Description, Category, Edition, PublisherID]);

    return result;
  }
  async getAllBooks() {
    const query = "SELECT * FROM book";

    const [rows] = await db.promise().query(query);

    return rows;
  }
  async getBook(ISBN) {
    const query = "SELECT * FROM book WHERE ISBN = ?";

    const [rows] = await db.promise().query(query, [ISBN]);

    return rows[0];
  }
  async deleteBook(ISBN) {
    const query = "DELETE FROM book WHERE ISBN = ?";

    const [result] = await db.promise().query(query, [ISBN]);

    return result;
  }
}

module.exports = BookRepository;
