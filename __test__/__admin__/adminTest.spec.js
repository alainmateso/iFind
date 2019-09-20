import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../app';
import strings from '../../helpers/stringsHelper';
import { signUserToken } from '../../helpers/tokenHelper';

chai.use(chaiHttp);
chai.should();
let userToken;
let userToken2;
//let category;
const user = {
   
   first_name: 'hhdh',
   last_name: 'ffff',
   phonenumber: '7878889500',
   email: 'roger@com',
   password: 'erico',
   is_admin:true,
   is_activate:true
 };
 const category = {
    
   name:'phone',
   description: 'item',

 };
 const category2 = {
    
    name:'',
    description: 'item',
 
  };
 const user2 = {
    is_activate:true
 };
 

 describe('Add category', () => {
    before((done) => {
        chai.request(app)
          .post('/api/v1/auth/signup')
          .send(user)
          .end((err, res) => {
            userToken =signUserToken(user);
            
          });
        chai.request(app)
          .post('/api/v1/auth/signup')
          .send(user2)
          .end((err, res) => {
            userToken2 = res.body.data.token;
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
            res.body.should.have.property('message').eql(`${strings.admin.successMessages.categorycreated}`)
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
        res.body.should.have.property('message').eql(`${strings.admin.errorMessages.categoryfound}`)
        done();

});
});
it('Should activate user', (done) => {
    chai.request(app)
      .post('/api/v1/admin/activate/1')
      .set('Authorization', `Bearer ${userToken}`)
      .send(user2)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('message').eql("user activated successfully");
        done();
});
});

it('Should not activate user', (done) => {
    chai.request(app)
      .post('/api/v1/admin/activate/15')
      .set('Authorization', `Bearer ${userToken}`)
      .send(user2)
      .end((err, res) => {
        res.should.have.status(404);
        res.body.should.be.a('object');
        res.body.should.have.property('message').eql("can't find that user");
        done();
});
});

it('Should disactivate user', (done) => {
    chai.request(app)
      .post('/api/v1/admin/deactivate/1')
      .set('Authorization', `Bearer ${userToken}`)
      .send(user2)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('message').eql("user deactivated successfully");
        done();
});
});

it('Should not disactivate user', (done) => {
    chai.request(app)
      .post('/api/v1/admin/deactivate/15')
      .set('Authorization', `Bearer ${userToken}`)
      .send(user2)
      .end((err, res) => {
        res.should.have.status(404);
        res.body.should.be.a('object');
        res.body.should.have.property('message').eql("can't find that user");
        done();
});
});

});


    