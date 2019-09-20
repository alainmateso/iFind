import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../app';
import strings from '../../helpers/stringsHelper';

chai.use(chaiHttp);
chai.should();
let userToken;
let userToken2;
let postId;
const user = {
    first_name: 'ngira',
    last_name: 'erico',
    phonenumber: '7878889500',
    email: 'erico@andela.com',
    password: 'erico',
  };
const user2 = {
    first_name: 'ngira',
    last_name: 'erico',
    phonenumber: '7878889500',
    email: 'eric@andela.com',
    password: 'erico',
  };
const newPost = {
    description: 'This is a lost item',
    category_id: 2,
    type: 'Lost',
  };

  const updatePost = {
    description: 'This is a found item',
    category_id: 3,
    type: 'Found',
  };
  
describe('Delete Post', () => {
    
    before((done) => {
        chai.request(app)
          .post('/api/v1/auth/signup')
          .send(user)
          .end((err, res) => {
            userToken = res.body.data.token;
          });

        chai.request(app)
          .post('/api/v1/auth/signup')
          .send(user2)
          .end((err, res) => {
            userToken2 = res.body.data.token;
            done();
          });

      });

    
    it('Should create a new post', (done) => {
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

    it('Should update a post', (done) => {
        chai.request(app)
          .put(`/api/v1/posts/${postId}`)
          .set('Authorization', `Bearer ${userToken}`)
          .send(updatePost)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.have.property('message').eql(strings.posts.successMessages.SUCCESSFULLY_UPDATED_POST);
            done();
          });
      });

    it('It should not update a Post it doesn\'t exist', (done) => {
        chai.request(app)
          .put(`/api/v1/posts/500`)
          .set('Authorization', `Bearer ${userToken}`)
          .set('Accept', 'application/json')
          .send(updatePost)
          .end((err, res) => {
            res.should.have.status(404);
            res.body.should.have.property('status').eql(404);
            res.body.should.have.property('message').eql(`${strings.posts.errorMessages.POST_NOT_FOUND}`);
            done();
        });
    });

    it('It should not update a Post if wrong user', (done) => {
        chai.request(app)
          .put(`/api/v1/posts/${postId}`)
          .set('Authorization', `Bearer ${userToken2}`)
          .set('Accept', 'application/json')
          .send(updatePost)
          .end((err, res) => {
            res.should.have.status(403);
            res.body.should.have.property('status').eql(403);
            res.body.should.have.property('message').eql(`${strings.posts.errorMessages.NOT_ALLOWED}`);
            done();
        });
    });

    it('It should not delete a Post if wrong user nor admin', (done) => {
        chai.request(app)
          .delete(`/api/v1/posts/${postId}`)
          .set('Authorization', `Bearer ${userToken2}`)
          .set('Accept', 'application/json')
          .end((err, res) => {
            res.should.have.status(403);
            res.body.should.be.a('object');
            res.body.should.have.property('status').eql(403);
            res.body.should.have.property('message').eql(`${strings.posts.errorMessages.NOT_ALLOWED}`);
            done();
        });
    });


    it('It should not delete a Post it doesn\'t exist', (done) => {
        chai.request(app)
          .delete(`/api/v1/posts/500`)
          .set('Authorization', `Bearer ${userToken2}`)
          .set('Accept', 'application/json')
          .end((err, res) => {
            res.should.have.status(404);
            res.body.should.have.property('status').eql(404);
            res.body.should.have.property('message').eql(`${strings.posts.errorMessages.POST_NOT_FOUND}`);
            done();
        });
    });
    
  it('It should delete a Post', (done) => {
    chai.request(app)
      .delete(`/api/v1/posts/${postId}`)
      .set('Authorization', `Bearer ${userToken}`)
      .set('Accept', 'application/json')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('status').eql(200);
        res.body.should.have.property('message').eql(`${strings.posts.successMessages.SUCCESSFULLY_DELETED_POST}`);
        done();
      });
  });
});