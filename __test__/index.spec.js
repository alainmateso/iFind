import signUpTests from './__auth__/signupTest.spec';
import signInTests from './__auth__/signinTest.spec';
import getOnePostTests from './__posts__/getOnePostTest.spec';
import postTests from './__posts__/postTests';
import categoryTests from './__admin__/categoryTest.spec';
import adminTests from './__admin__/adminTests.spec';
import deletePost from './__posts__/deletePost.spec';

describe('Test Runner', () => {
  describe('Signup Tests', signUpTests);
  describe('Signin Tests', signInTests);
  describe('Get One Post Tests', getOnePostTests);
  describe('Create New Post Test', postTests);
  describe('Category Tests', categoryTests);
  describe('Admin Tests', adminTests);
  describe('Post tests', postTests);
  describe('Delete Post', deletePost);
});
