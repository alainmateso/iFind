const strings = {
  system: {
    errorMessages: {
      SYSTEM_FAILURE: 'Something went terribly wrong on the system. Cannot proceed.',
    },
  },
  users: {
    errorMessages: {
      BAD_SIGNUP_REQUEST: 'Unable to sign up user',
      USER_ALREADY_EXISTS: 'User with this email already exists',
      BAD_SIGNIN_REQUEST: 'Unable to sign in user, check info',
      USER_NOT_FOUND_SIGNIN_REQUEST: 'Unable to sign in user, check info',
      USER_NOT_ACTIVE: 'Your account has been deactivated, please contact admin',
    },
    successMessages: {
      SUCCESSFULLY_CREATED_USER: 'Successfully created user',
      SUCCESSFULLY_SIGNED_IN_USER: 'Successfully logged in user',
    },
    verificationMessages: {
      successMessages: {
        SUCCESSFULLY_SENT_VERIFICATION_EMAIL: 'Successfully created user, please check your email to verify your account',
        SUCCESSFULLY_VERIFIED_USER: 'User verified successfully.',
      },
      errorMessages: {
        UNABLE_TO_CREATE_VERIFICATION: 'Your account was created, however, we were unable to create a verify token. Please contact admin on +29928837732',
        EMAIL_ALREADY_VERIFIED: 'This email has already been verified. Please log in instead.',
        INVALID_TOKEN: 'This token is invalid',
        UNVERIFIED_USER: 'You haven\'t verfied your account yet. Please check your email and follow the given link. If no link is provided, please contact the administrator on  +29928837732',
      },
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
      NO_IMAGE: 'No image file selected',
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


  admin: {
    errorMessages: {
      usernotfound: "can't find that user",
      categoryfound: 'category aleardy exist',
    },
    successMessages: {
      user_actived: 'user activated successfully',
      user_deactived: 'user deactivated successfully',
      categorycreated: 'category created successfully',
    },
  },

  category: {
    errorMessages: {
      categoryerror: 'unable to add that category',
    },
  },

  protect: {
    errorMessages: {
      token_expered: 'Token needed to get access to this page',
      require_token: 'Token expired',
      Notauthorized: 'Not authorized to this page you must be an admin to access this endpoint',
    },
  },

  image: {
    errorMessages: {
      INCORRECT_FORMAT: 'The selected file is not an image',
    },
  },

};

export default strings;
