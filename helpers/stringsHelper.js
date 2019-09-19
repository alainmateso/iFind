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
      EMPTY_ID: 'Enter the ID to delete',
      NO_POST_FOUND: 'No data found',
      NOT_NUMBER: 'Enter the number',
    },
    successMessages: {
      SUCCESSFULLY_DELETED_POST: 'Post is Successfully Deleted',
      SUCCESSFULLY_UPDATED_POST: 'Post is Successfully Updated',
    },
  },
};

export default strings;
