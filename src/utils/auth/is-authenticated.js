export const isAuthenticated = () => {
    const token = localStorage.getItem('login-token'); // My left-overs from my previous projects since I only know localStorage instead of cookie saving.
    
    return token ? true : false;
  };
  