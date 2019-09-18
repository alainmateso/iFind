import signUpTests from './__auth__/signupTest.spec';
import signInTests from './__auth__/signinTest.spec';

describe('Test Runner', () => {
  describe('Signup Tests', signUpTests);
  describe('Signin Tests', signInTests);
});
