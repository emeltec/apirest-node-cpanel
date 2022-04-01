const pool = require("../config/conexion");

exports.getBooks = (req, res) => {
  const sql = "SELECT * FROM books;";
  pool.query(sql, (err, result, fields) => {
    if(err) {
      res.json({ message: "Error en la consulta" });
    }
    res.json(result)
  })
}

exports.getBookById = (req, res) => {
  const ID = req.params.id;

  const sql = "SELECT * FROM books WHERE id=?";
  pool.query(sql,[ID], (err, result, fields) => {
    if(err) {
      res.json({ message: "Error en la consulta" });
    }
    res.json(result)
  })
}

exports.createBook = (req, res) => {
  const values = Object.values(req.body)

  const sql = "INSERT INTO books(title, summary, url_image) VALUES(?, ?, ?)";
  pool.query(sql, values, (err, result, fields) => {
    if(err) {
      res.json({ message: "Error al guardar en BD" });
    }
    res.json(result)
  })
}

exports.updateBookById = (req, res) => {
  const values = Object.values(req.body);
  const ID = req.params.id;

  const sql = "UPDATE books SET title=?, summary=?, url_image=? WHERE id=?";
  pool.query(sql, [...values, ID], (err, result, fields) => {
    if(err) {
      res.json({ message: "Error al actualizar" });
    }
    res.json(result)
  })
}

exports.deleteBookById = (req, res) => {
  const ID = req.params.id;

  const sql = "DELETE FROM books WHERE id=?";
  pool.query(sql, ID, (err, result, fields) => {
    if(err) {
      res.json({ message: "Error al eliminar" });
    }
    res.json(result)
  })
}