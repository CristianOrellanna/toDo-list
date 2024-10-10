const request = require('supertest');
const app = require('../app');

describe("GET pages testing", () => {
  test('Debería responder con un status 200 a la petición del index', async () => {
    const response = await request(app).get('/').send();
    expect(response.statusCode).toBe(200);
  });

  test('Debería responder con un status 200 a la petición del login', async () => {
    const response = await request(app).get('/login').send();
    expect(response.statusCode).toBe(200);
  });

  test('Debería responder con un status 200 a la petición del register', async () => {
    const response = await request(app).get('/register').send();
    expect(response.statusCode).toBe(200);
  });

  test('Debería responder con un status 200 a la petición del home', async () => {
    const response = await request(app).get('/home').send();
    expect(response.statusCode).toBe(200);
  });

  test('Debería responder con un status 200 a la petición del /tareas/mostrar', async () => {
    const response = await request(app).get('/tareas/mostrar').send();
    expect(response.statusCode).toBe(200);
  });

  test('Debería responder con un status 200 a la petición del logout', async () => {
    const response = await request(app).get('/logout').send();
    expect(response.statusCode).toBe(200);
  });

  test('Debería responder con un status 401 a la petición del /tareas/agregar ya que no se ha iniciado sesión', async () => {
    const response = await request(app).get('/tareas/agregar').send();
    expect(response.statusCode).toBe(401);
  });
});
