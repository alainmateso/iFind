import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../app';
import strings from '../../helpers/stringsHelper';
import { data } from '../__mockdata__/auth';

const { expect } = chai;

chai.use(chaiHttp);


describe('Sign In Test', () => {
  it('Should sign in user successfully', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signin')
      .send({
        email: 'jackdoe@gmail.com',
        password: 'default',
      })
      .end((err, res) => {
        const { body } = res;
        expect(res.status).to.be.equal(201, 'Incorrect status returned in the response');
        expect(body).to.have.property('message', strings.users.successMessages.SUCCESSFULLY_SIGNED_IN_USER);
        done();
      });
  });

  it('Should not sign in user with invalid credentials', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signin')
      .send({
        email: 'jackdoe@gmail.com',
        password: 'defult',
      })
      .end((err, res) => {
        expect(res.status).to.be.equal(404, 'Incorrect status returned in the response');
        done();
      });
  });

  it('Should not sign in user with missing email', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signin')
      .send(data.signIn.missingEmail)
      .end((err, res) => {
        expect(res.status).to.be.equal(400, 'Incorrect status returned in the response');
        done();
      });
  });
  it('Should not sign in user with missing password', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signin')
      .send(data.signIn.missingPassword)
      .end((err, res) => {
        expect(res.status).to.be.equal(400, 'Incorrect status returned in the response');
        done();
      });
  });
  it('Should not sign in unverified user', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signin')
      .send({
        email: 'johndoe@gmail.com',
        password: 'defult',
      })
      .end((err, res) => {
        expect(res.status).to.be.equal(403, 'Incorrect status response');
        expect(res.body.message).to.be.equal(strings.users.verificationMessages.errorMessages.UNVERIFIED_USER, 'wrong message returned');
        done();
      });
  });
});
