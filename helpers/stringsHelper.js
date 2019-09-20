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
      ITEM_POSTED_SUCCESSFULLY: 'Item posted successfully!',
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
    errorMessages:{
      usernotfound:"can't find that user",
      categoryfound:"category aleardy exist"
    },
    successMessages:{
      user_actived:'user activated successfully',
      user_deactived:'user deactivated successfully',
      categorycreated:'category created successfully',
    },
  },

  category:{
    errorMessages:{
      categoryerror:"unable to add that category"
    },
  },

  protect: {
    errorMessages:{
      token_expered:'Token needed to get access to this page',
      require_token:'Token expired',
      Notauthorized:"Not authorized to this page you must be an admin to access this endpoint"
    },
  },
  
};

export default strings;
