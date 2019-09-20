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
      EMPTY_ID: 'No ID found',
      NOT_NUMBER: 'ID in params is not a number',
      NOT_ALLOWED: 'You cannot act on this post',
      NOT_YOUR_POST: 'This is not your post!',
      NOT_FOUND: 'Post Not Found',
    },
    successMessages: {
      POSTS_FOUND: 'Posts Retrieved Sucessfully',
      ITEM_POSTED_SUCCESSFULLY: 'Item posted successfully!',
      SUCCESSFULLY_DELETED_POST: 'Successfully Deleted Post',
      SUCCESSFULLY_UPDATED_POST: 'Successfully Updated Post',
      ISSUE_RESOLVED: 'Issue Resolved!',
    },
  },
  token: {
    errorMessages: {
      INVALID_TOKEN: 'Invalid Token!',
      SIGN_IN_FIRST: 'Sign in to have access!',
    },
  },
  id: {
    errorMessages: {
      ID_ERROR: 'The post id should be an integer',
    },
  },
};

export default strings;
