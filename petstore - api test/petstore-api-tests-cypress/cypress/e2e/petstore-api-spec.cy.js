describe('Petstore User API Tests', () => {
  
  const username = 'elaydin';

 
  it('POST /user - CreateUser', () => {
    cy.request({
      method: 'POST',
      url: 'https://petstore.swagger.io/v2/user',
      body: {
        "id": '147852369',
        "username": username,
        "firstName": "ela",
        "lastName": "aydin",
        "email": "elaydin@gmail.com",
        "password": "sifre1",
        "phone": null,
        "userStatus": 1
      },
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.message).to.eq('147852369')
    })
  })

  it('GET /user/{username} - GetUserInfo', () => {
    cy.request(`https://petstore.swagger.io/v2/user/${username}`)
      .then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body.username).to.eq(username)
       expect(response.body.email).to.eq('elaydin@gmail.com')

      })
  })

  it('PUT /user/{username} - UpdateUser', () => {
    cy.request({
      method: 'PUT',
      url: `https://petstore.swagger.io/v2/user/${username}`,
      body: {
        id: '147852369',
        username: username,
        firstName: 'elaa2',
        lastName: 'aydin2',
        email: 'elaydin2@gmail.com',
        password: '123ela',
        phone: '0987654321',
        userStatus: 1
      },
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.message).to.eq('147852369')
    })
  })

  it('DELETE /user/{username} - DeleteUser', () => {
    cy.request({
      method: 'DELETE',
      url: `https://petstore.swagger.io/v2/user/${elaaaa}`
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.message).to.eq(username)
    })
  })

it('GET /user/login - LoginUser', () => {
  cy.request({
    method: 'GET',
    url: `https://petstore.swagger.io/v2/user/login`,
    qs: {
      username: 'elaydinn',
      password: '123'  
    }
  }).then((response) => {
    expect(response.status).to.eq(200)
    expect(response.body.message).to.include('logged in')
  })
})

})
