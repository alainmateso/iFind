import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../app';
import models from '../../models';

const { expect } = chai;

chai.use(chaiHttp);


describe('Get Posts', () => {
  it('Should not get any post', (done) => {
    chai.request(app)
      .get('/api/v1/posts')
      .end((err, res) => {
        expect(res.status).to.be.equal(404);
        done();
      });
  });

  it('Should return all posts', (done) => {
    const post = {
      user_id: 1,
      description: 'Infinix Zero 5 Gold',
      category_id: 2,
      resolved: false,
      type: 'lost',
    };
    models.posts.create(post).then((newPost) => {
      chai.request(app)
        .get('/api/v1/posts/')
        .end((err, res) => {
          expect(res.status).to.be.equal(200);
          done();
        });
    });
  });
});
