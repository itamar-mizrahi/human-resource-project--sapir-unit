const Pool = require('pg').Pool
const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'api',
  password: 'password',
  port: 5432,
})

//In a production environment, you would want to put your configuration details in a separate file with restrictive permissions that is not accessible from version control

// Routes:

const getUsers = (request, response) => {
    pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  const getTaskById = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  const getUnitById = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('SELECT unit FROM users WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  const getRankById = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('SELECT rank FROM users WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  const getGroupById = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('SELECT group FROM users WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  const getStartDateById = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('SELECT startDate FROM users WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  const getServiceTypeById = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('SELECT serviceType FROM users WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }


  const getActiveById = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('SELECT active FROM users WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  module.exports = {
    getUsers,
    getUserById,
    getUnitById,
    getRankById,
    getGroupById,
    getStartDateById,
    getServiceTypeById,
    getActiveById

  }