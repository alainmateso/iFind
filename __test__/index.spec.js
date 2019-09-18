import signUpTests from './__auth__/signupTest.spec';
import signInTests from './__auth__/signinTest.spec';
import postTests from './__posts__/postTests';

describe('Test Runner', () => {
  describe('Signup Tests', signUpTests);
  describe('Signin Tests', signInTests);
  describe('Create New Post Test', postTests);
});
