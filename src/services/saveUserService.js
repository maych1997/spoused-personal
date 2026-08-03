import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

export const getUid = () => {
  const user = auth().currentUser;

  if (!user) {
    throw new Error('User not logged in');
  }

  return user.uid;
};

export const updateUserProfile = async (data) => {
  const uid = getUid();

  try {
    const user = auth().currentUser;

    // 🔥 1. Update Firebase Auth displayName if name exists
    if (data.name) {
      await user.updateProfile({
        displayName: data.name,
      });
    }

    // 🔥 2. Update Realtime Database
    await database()
      .ref(`/users/${uid}`)
      .update({
        ...data,
        updatedAt: Date.now(),
      });

    // 🔄 Optional: refresh auth user
    await user.reload();

    return {
      success: true,
    };
  } catch (error) {
    console.log('Update Error:', error);

    return {
      success: false,
      error: error.message,
      code: error.code,
    };
  }
};
export const getUserProfile = async () => {
  try {
    const uid = getUid();

    // 🔍 Fetch from Realtime Database
    const snapshot = await database()
      .ref(`/users/${uid}`)
      .once('value');

    if (!snapshot.exists()) {
      return {
        success: false,
        error: 'User profile not found',
      };
    }

    const data = snapshot.val();

    // 🔄 Optional: also merge auth data
    const user = auth().currentUser;

    return {
      success: true,
      data: {
        uid,
        email: user?.email || null,
        displayName: user?.displayName || null,
        ...data,
      },
    };
  } catch (error) {
    console.log('Fetch Error:', error);

    return {
      success: false,
      error: error.message,
      code: error.code,
    };
  }
};