const db = require('./db')

const getCustomers = (request, response) => {
  db.query('SELECT * FROM "public"."Customer" ORDER BY "id"', (error, result) => {
    if (error) {
      return response.status(500).json({
        message: error.message,
      })
    }
    // response.status(200).json(result.rows) same as below
    response.json(result.rows)
  })
}

const createCustomers = (request, response) => {

  const {name,surname, username, password} = request.body
  
  db.query(`INSERT INTO "public"."Customer" ("name", "surname", "username", "password") VALUES ('Pelin', 'Kılıç', 'pelin', 'pelin123')`,(error, results) => {
    if (error) {
      response.status(501).send('HATA VAR' + error)
    }
    response.status(201).send(`Customer eklendi!`)
  })
}

const updateCustomers = (request, response) => {
  const id = parseInt(request.params.id)
  const { name, surname, username, password } = request.body
  db.query(
    `UPDATE "public"."Customer" SET "name" = 'Berk', "surname" = 'Çapar', "username" = 'berkcapar', "password" = 'berk123' WHERE id = '3'`,
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User modified with ID:` + id);
    })
}

const deleteCustomers = (request, response) => {

  const id = parseInt(request.params.id)

  db.query(`DELETE FROM "public"."Customer" WHERE id = '13'`,(error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`User deleted with ID:` + 'id');
  })
}
w
module.exports = {
  getCustomers,
  createCustomers,
  updateCustomers,
  deleteCustomers,
}
