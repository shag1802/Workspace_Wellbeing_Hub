import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index.js'; // Import your Express app

const expect = chai.expect;
chai.use(chaiHttp);

describe('Your API Routes', () => {
  let authToken; // Store the authentication token for testing


  const signupData = {
    "name": "temp",
    "username": "temp",
    "password": "temp",
  };

describe('POST /signup', () => {
    it('should sign up the user and return a success message', (done) => {
      chai.request(app)
        .post('/signup')
        .send(signupData)
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.have.property('msg', 'Signup successfull'); // Adjust property name
          done();
        });
    });
  });
  
  const loginData = {
    "username":"temp",
    "password":"temp"
  }

  describe('POST /login', () => {
    it('should log in the user and return access and refresh tokens', (done) => {
      chai.request(app)
        .post('/login')
        .send(loginData)
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.have.property('accessToken');
          expect(res.body).to.have.property('refreshToken');
          expect(res.body).to.have.property('name'); // Assuming 'name' is part of the response
          expect(res.body).to.have.property('username');
  
          authToken = res.body.accessToken
          // Add additional assertions based on your response structure
  
          done();
        });
    });
  });
  

  

  // Add more test cases for other routes similarly

  describe('GET /posts', () => {
    it('should get all posts when authenticated', (done) => {
      chai.request(app)
        .get('/posts')
        .set('Authorization', `Bearer ${authToken}`)
        .end((err, res) => {
          expect(res).to.have.status(200);
          // Add more assertions based on your response structure
          done();
        });
    });

    it('should return 401 unauthorized without authentication', (done) => {
      chai.request(app)
        .get('/posts')
        .end((err, res) => {
          expect(res).to.have.status(401);
          done();
        });
    });
  });

  // Add more test cases for other routes similarly

  after(() => {
    process.exit()
  });
});
