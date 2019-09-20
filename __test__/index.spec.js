import signUpTests from './__auth__/signupTest.spec';
import signInTests from './__auth__/signinTest.spec';
import getPostsTests from './__posts__/getPostsTest.spec';
import getOnePostTests from './__posts__/getOnePostTest.spec';
import postTests from './__posts__/postTests';
import deletePost from './__posts__/deletePost.spec';

describe('Test Runner', () => {
  describe('Signup Tests', signUpTests);
  describe('Signin Tests', signInTests);
  describe('Get Posts Tests', getPostsTests);
  describe('Get One Post Tests', getOnePostTests);
  describe('Create New Post Test', postTests);
  describe('Delete Post', deletePost);
});
