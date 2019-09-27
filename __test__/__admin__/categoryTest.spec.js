import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../app';
import strings from '../../helpers/stringsHelper';

chai.use(chaiHttp);
chai.should();
const { expect } = chai;
let userToken;
// let category;
const category = {

  name: 'phone',
  description: 'item',

};
const category2 = {

  name: '',
  description: 'item',

};

describe('Category Tests', () => {
  before((done) => {
    chai.request(app)
      .post('/api/v1/auth/signin')
      .send({
        email: process.env.ADMIN_EMAIL,
        password: 'default',
      })
      .end((err, res) => {
        userToken = res.body.data.token;
        done();
      });
  });

  it('Should create a new category', (done) => {
    chai.request(app)
      .post('/api/v1/admin/category')
      .set('Authorization', `Bearer ${userToken}`)
      .send(category)
      .end((err, res) => {
        res.should.have.status(201);
        res.body.should.be.a('object');
        res.body.should.have.property('status').eql(201);
        res.body.should.have.property('message').eql(`${strings.admin.successMessages.categorycreated}`);
        done();
      });
  });

  it('Should not create a category with empty name', (done) => {
    chai.request(app)
      .post('/api/v1/admin/category')
      .set('Authorization', `Bearer ${userToken}`)
      .send(category2)
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a('object');
        res.body.should.have.property('status').eql(400);

        done();
      });
  });

  it('Should not create category twice', (done) => {
    chai.request(app)
      .post('/api/v1/admin/category')
      .set('Authorization', `Bearer ${userToken}`)
      .send(category)
      .end((err, res) => {
        res.should.have.status(409);
        res.body.should.be.a('object');
        res.body.should.have.property('status').eql(409);
        res.body.should.have.property('message').eql(`${strings.admin.errorMessages.categoryfound}`);
        done();
      });
  });
});
