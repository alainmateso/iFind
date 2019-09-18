const strings = {
  users: {
    errorMessages: {
      BAD_SIGNUP_REQUEST: 'Unable to sign up user',
      USER_ALREADY_EXISTS: 'User with this email already exists',
      BAD_SIGNIN_REQUEST: 'Unable to sign in user, check info',
      USER_NOT_FOUND_SIGNIN_REQUEST: 'Unable to sign in user, check info',
    },
    successMessages: {
      SUCCESSFULLY_CREATED_USER: 'Successfully created user',
      SUCCESSFULLY_SIGNED_IN_USER: 'Successfully logged in user',
    },
  },
  posts: {
    errorMessages: {
      POST_NOT_FOUND: 'No Post Found',
    },
    successMessages: {
      POSTS_FOUND: 'Posts Retrieved Sucessfully',
      POST_FOUND: 'Post Retrieved Sucessfully',
    },
  },
};

export default strings;
