import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../app';
import strings from '../../helpers/stringsHelper';

chai.use(chaiHttp);
chai.should();

const { expect } = chai;

let userToken;

let postId;
const newPost = {
  description: 'This is a lost item',
  category_id: 2,
  type: 'Lost',
};

const wrongData = { description: '' };

const invalidToken = 'dsdxasdxfedsdsfrdgfers';

describe('Post test', () => {
  before((done) => {
    chai.request(app)
      .post('/api/v1/auth/signin')
      .send({
        email: 'johndoe@gmail.com',
        password: 'default',
      })
      .end((err, res) => {
        userToken = res.body.data.token;
        done();
      });
  });

  it('Should return incorrect route', (done) => {
    chai.request(app)
      .get('/api/v1/Hello')
      .end((err, res) => {
        res.should.have.status(404);
        done();
      });
  });

  it('Should Return 401 when you did not log in', (done) => {
    chai.request(app)
      .post('/api/v1/posts')
      .send(newPost)
      .end((err, res) => {
        res.should.have.status(401);
        res.body.should.be.a('object');
        res.body.should.have.property('status').eql(401);
        res.body.should.have.property('message').eql(`${strings.token.errorMessages.SIGN_IN_FIRST}`);
        done();
      });
  });

  it('Should Return 400 when you use an invalid token', (done) => {
    chai.request(app)
      .post('/api/v1/posts')
      .set('Authorization', `Bearer ${invalidToken}`)
      .send(newPost)
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a('object');
        res.body.should.have.property('status').eql(400);
        res.body.should.have.property('message').eql(`${strings.token.errorMessages.INVALID_TOKEN}`);
        done();
      });
  });

  it('Should return 400 when you enter incorrect data types', (done) => {
    chai.request(app)
      .post('/api/v1/posts')
      .set('Authorization', `Bearer ${userToken}`)
      .send(wrongData)
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a('object');
        res.body.should.have.property('status').eql(400);
        done();
      });
  });

  it('Should create a new post successfully', (done) => {
    chai.request(app)
      .post('/api/v1/posts')
      .set('Authorization', `Bearer ${userToken}`)
      .send(newPost)
      .end((err, res) => {
        postId = res.body.data.id;
        res.should.have.status(201);
        res.body.should.be.a('object');
        res.body.should.have.property('status').eql(201);
        res.body.should.have.property('message').eql(`${strings.posts.successMessages.ITEM_POSTED_SUCCESSFULLY}`);
        done();
      });
  });

  it('Should Return 401 when you did not log in', (done) => {
    chai.request(app)
      .patch('/api/v1/posts/resolved/1')
      .end((err, res) => {
        res.should.have.status(401);
        res.body.should.be.a('object');
        res.body.should.have.property('status').eql(401);
        res.body.should.have.property('message').eql(`${strings.token.errorMessages.SIGN_IN_FIRST}`);
        done();
      });
  });

  it('Should Return 400 when id is not integer', (done) => {
    chai.request(app)
      .patch('/api/v1/posts/resolved/id')
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a('object');
        res.body.should.have.property('status').eql(400);
        res.body.should.have.property('message').eql(`${strings.id.errorMessages.ID_ERROR}`);
        done();
      });
  });

  it('Should Return 400 when you use an invalid token', (done) => {
    chai.request(app)
      .patch('/api/v1/posts/resolved/1')
      .set('Authorization', `Bearer ${invalidToken}`)
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.a('object');
        res.body.should.have.property('status').eql(400);
        res.body.should.have.property('message').eql(`${strings.token.errorMessages.INVALID_TOKEN}`);
        done();
      });
  });

  it('Should mark a post as resolved', (done) => {
    chai.request(app)
      .patch(`/api/v1/posts/resolved/${postId}`)
      .set('Authorization', `Bearer ${userToken}`)
      .send(newPost)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('status').eql(200);
        res.body.should.have.property('message').eql(`${strings.posts.successMessages.ISSUE_RESOLVED}`);
        done();
      });
  });

  it('Should return all posts', (done) => {
    chai.request(app)
      .get('/api/v1/posts/')
      .end((err, res) => {
        expect(res.status).to.be.equal(200);
        done();
      });
  });
});
