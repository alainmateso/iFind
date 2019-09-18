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
    successMessages: {
      ITEM_POSTED_SUCCESSFULLY: 'Item posted successfully!',
    },
  },
  token: {
    errorMessages: {
      INVALID_TOKEN: 'Invalid Token!',
      SIGN_IN_FIRST: 'Sign in to have access!',
    },
  },
};

export default strings;
