const request = require('supertest');
const app = require('../app');

describe("POST methods", () => {

  test('Debería responder con un status 200 al ingresar los datos en el formulario de registro', async () => {
    const usuarioNuevo = {
      nombre: 'testUser',
      username: 'testName',
      email: 'testRol',
      password: 'testPassword1',
    };
    const response = await request(app).post('/user-registration').send(usuarioNuevo);
    expect(response.statusCode).toBe(200);
  });

  test('Debería responder con un status 200 al ingresar los datos en login', async () => {
    const usuarioRegistrado = {
      username: 'testUser',
      password: 'testPassword1',
    };
    const response = await request(app).post('/user-verification').send(usuarioRegistrado);
    expect(response.statusCode).toBe(200);
  });

});
