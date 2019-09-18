import signUpTests from './__auth__/signupTest.spec';
import signInTests from './__auth__/signinTest.spec';
import getPostsTests from './__posts__/getPostsTest.spec';

describe('Test Runner', () => {
  describe('Signup Tests', signUpTests);
  describe('Signin Tests', signInTests);
  describe('Get Posts Tests', getPostsTests);
});
