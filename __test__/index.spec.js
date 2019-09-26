import signUpTests from './__auth__/signupTest.spec';
import signInTests from './__auth__/signinTest.spec';
import getOnePostTests from './__posts__/getOnePostTest.spec';
import postTests from './__posts__/postTests';
import adminTest from './__admin__/adminTest.spec';
import deletePost from './__posts__/deletePost.spec';

describe('Test Runner', () => {
  describe('Signup Tests', signUpTests);
  describe('Signin Tests', signInTests);
  describe('Get One Post Tests', getOnePostTests);
  describe('Create New Post Test', postTests);
  describe('Create New category', adminTest);
  describe('Post tests', postTests);
  describe('Delete Post', deletePost);
});
