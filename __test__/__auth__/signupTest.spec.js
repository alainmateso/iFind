import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../app';
import strings from '../../helpers/stringsHelper';
import { data } from '../__mockdata__/auth';
import models from '../../models';

chai.use(chaiHttp);

const { expect } = chai;

describe('Signup Test', () => {
  it('Should sign up user successfully', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(data.signUp.validAccount)
      .end((err, res) => {
        const { body } = res;
        expect(res.status).to.be.equal(201, 'Incorrect status returned in the response');
        expect(body).to.have.property('message', strings.users.verificationMessages.successMessages.SUCCESSFULLY_SENT_VERIFICATION_EMAIL);
        done();
      });
  });

  it('Should sign up user successfully', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(data.signUp.validAccount2)
      .end((err, res) => {
        const { body } = res;
        expect(res.status).to.be.equal(201, 'Incorrect status returned in the response');
        expect(body).to.have.property('message', strings.users.verificationMessages.successMessages.SUCCESSFULLY_SENT_VERIFICATION_EMAIL);
        done();
      });
  });

  it('Should verify user', (done) => {
    models.users.findOne({
      where: {
        email: 'dzabalamacheza@gmail.com',
      },
    }).then((user) => {
      models.VericationToken.findOne({
        where: {
          userId: user.id,
        },
      }).then((receivedToken) => {
        const path = `/api/v1/verify?token=${receivedToken.token}&email=dzabalamacheza@gmail.com`;
        chai.request(app)
          .get(path)
          .end((err, res) => {
            expect(res.status).to.be.eql(200, 'Token not verified');
            done();
          });
      });
    });
  });

  it('Should not verify user twice', (done) => {
    models.users.findOne({
      where: {
        email: 'dzabalamacheza@gmail.com',
      },
    }).then((user) => {
      models.VericationToken.findOne({
        where: {
          userId: user.id,
        },
      }).then((receivedToken) => {
        const path = `/api/v1/verify?token=${receivedToken.token}&email=dzabalamacheza@gmail.com`;
        chai.request(app)
          .get(path)
          .end((err, res) => {
            expect(res.status).to.be.eql(202, 'Token not verified');
            done();
          });
      });
    });
  });

  it('Should not verify invalid token', (done) => {
    models.users.findOne({
      where: {
        email: 'chezao@gmail.com',
      },
    }).then((user) => {
      models.VericationToken.findOne({
        where: {
          userId: user.id,
        },
      }).then((receivedToken) => {
        const path = '/api/v1/verify?token=kldjklsjdkslml__lkdl&email=chezao@gmail.com';
        chai.request(app)
          .get(path)
          .end((err, res) => {
            expect(res.status).to.be.eql(202, 'Token not verified');
            expect(res.body.message).to.be.eql(strings.users.verificationMessages.errorMessages.INVALID_TOKEN, 'Token not being checked');
            done();
          });
      });
    });
  });

  it('Should reject existing email on the system', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(data.signUp.validAccount)
      .end((err, res) => {
        const { body } = res;
        expect(res.status).to.be.equal(409, 'Incorrect status returned in the response');
        expect(body).to.have.property('message', strings.users.errorMessages.USER_ALREADY_EXISTS);
        done();
      });
  });

  it('Should reject missing email', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(data.signUp.missingEmail)
      .end((err, res) => {
        expect(res.status).to.be.equal(400, 'Incorrect status returned in the response');
        done();
      });
  });

  it('Should reject missing password', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(data.signUp.missingPassword)
      .end((err, res) => {
        expect(res.status).to.be.equal(400, 'Incorrect status returned in the response');
        done();
      });
  });

  it('Should reject missing phone number', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(data.signUp.missingPhoneNumber)
      .end((err, res) => {
        expect(res.status).to.be.equal(400, 'Incorrect status returned in the response');
        done();
      });
  });

  it('Should reject missing first name', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(data.signUp.missinngFirstName)
      .end((err, res) => {
        expect(res.status).to.be.equal(400, 'Incorrect status returned in the response');
        done();
      });
  });

  it('Should reject missing last name', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(data.signUp.missiingLastName)
      .end((err, res) => {
        expect(res.status).to.be.equal(400, 'Incorrect status returned in the response');
        done();
      });
  });
});
