import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../app';
import models from '../../models';

const { expect } = chai;

chai.use(chaiHttp);


describe('Get Specific Post', () => {
  it('Should not get a post - id type is character', (done) => {
    chai.request(app)
      .get('/api/v1/posts/a')
      .end((err, res) => {
        expect(res.status).to.be.equal(400);
        done();
      });
  });

  it('Should not get a post - id does not exist', (done) => {
    chai.request(app)
      .get('/api/v1/posts/55')
      .end((err, res) => {
        expect(res.status).to.be.equal(404);
        done();
      });
  });

  it('Should return a specific post', (done) => {
    const post = {
      user_id: 1,
      description: 'Infinix Zero 5 Golden',
      category_id: 2,
      resolved: false,
      type: 'lost',
    };
    models.posts.create(post).then((newPost) => {
      chai.request(app)
        .get(`/api/v1/posts/${newPost.id}`)
        .end((err, res) => {
          expect(res.status).to.be.equal(200);
          done();
        });
    });
  });
});
