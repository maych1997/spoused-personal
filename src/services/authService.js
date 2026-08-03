import auth from '@react-native-firebase/auth';

export const loginUser = async (email, password) => {
  console.log(email,password);
  try {
    // 1. Try login first
    const loginRes = await auth().signInWithEmailAndPassword(
      email,
      password
    );

    console.log('Login successful:', loginRes.user);

    return {
      success: true,
      mode: 'login',
      user: loginRes.user,
    };
  } catch (error) {
    console.log('Login failed:', error.code);

    // 2. If user not found → create account
    if (error.code === 'auth/user-not-found' || error.code=='auth/invalid-credential') {
      try {
        const signupRes = await auth().createUserWithEmailAndPassword(
          email,
          password
        );

        return {
          success: true,
          mode: 'signup',
          user: signupRes.user,
        };
      } catch (signupError) {
        return {
          success: false,
          error: signupError.message,
          code: signupError.code,
        };
      }
    }

    return {
      success: false,
      error: error.message,
      code: error.code,
    };
  }
};