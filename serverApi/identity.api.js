import httpFacade from '../utils/httpFacade';

async function getUsers(searchTerm) {
  const options = {
    url: 'public/users',
    query: {
      searchTerm,
    },
  };
  return httpFacade.get(options);
}

async function getUserById(userId) {
  if (!userId) {
    return null;
  }
  const options = {
    url: `public/users/${userId}`,
  };
  return httpFacade.get(options);
}

async function signIn(user) {
  const options = {
    url: 'auth/signin',
    body: user,
  };

  return httpFacade.post(options);
}

async function update(user) {
  const options = {
    url: `api/users/${user._id}`,
    body: user,
  };

  return httpFacade.patch(options);
}

async function signUp(user) {
  const options = {
    url: 'auth/signup',
    body: user,
  };

  return httpFacade.post(options);
}

async function generatePasswordResetLink(email) {
  const options = {
    url: `public/users/generate-password-reset-token`,
    body: email,
  };

  return httpFacade.post(options);
}

async function resetPassword(newPassword) {}

export default {
  generatePasswordResetLink,
  resetPassword,
  signIn,
  signUp,
  update,
  getUserById,
  getUsers,
};
