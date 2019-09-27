import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../app';
import models from '../../models';

chai.use(chaiHttp);

let userToken;
let userID;

describe('Admin Tests', () => {
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


  it('Should deactivate user', (done) => {
    models.users.findOne({
      where: {
        email: 'janedoe@gmail.com',
      },
    }).then((user) => {
      chai.request(app)
        .post(`/api/v1/admin/deactivate/${user.id}`)
        .set('Authorization', `Bearer ${userToken}`)
        .send({
          is_active: false,
        })
        .end((err, res) => {
          console.log(res);
          res.should.have.status(200);
          done();
        });
    });
  });

  it('Should not deactivate user', (done) => {
    chai.request(app)
      .patch('/api/v1/admin/deactivate/15')
      .set('Authorization', `Bearer ${userToken}`)
      .send({
        is_active: false,
      })
      .end((err, res) => {
        res.should.have.status(404);
        res.body.should.be.a('object');
        res.body.should.have.property('message').eql("can't find that user");
        done();
      });
  });

  it('Should activate user', (done) => {
    chai.request(app)
      .patch(`/api/v1/admin/activate/${userId}`)
      .set('Authorization', `Bearer ${userToken}`)
      .send({
        is_active: true,
      })
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('message').eql('user activated successfully');
        done();
      });
  });

  it('Should not activate user', (done) => {
    chai.request(app)
      .patch('/api/v1/admin/activate/15')
      .set('Authorization', `Bearer ${userToken}`)
      .send({
        is_active: true,
      })
      .end((err, res) => {
        res.should.have.status(404);
        res.body.should.be.a('object');
        res.body.should.have.property('message').eql("can't find that user");
        done();
      });
  });
});
