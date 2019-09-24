import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../app';
import strings from '../../helpers/stringsHelper';

chai.use(chaiHttp);

describe('Category Tests', () => {
  it('Should return all categories', (done) => {
    chai.request(app)
      .get('api/v1/category')
      .end((err, res) => {
        expect(res.status).to.be.equal(200, 'Status incorrect');
        expect(res.body.message).to.be.equal(strings.category.successMessages.SUCCESSFULLY_FETCHED_CATEGORIES);
      });
  });
});
