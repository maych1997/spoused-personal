import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

export const getAllUsers = async (currentUserId = auth().currentUser?.uid) => {
  try {
    const snapshot = await database()
      .ref('/users')
      .once('value');

    if (snapshot.exists()) {
      const usersData = snapshot.val();
      const users = Object.keys(usersData)
        .map(uid => ({
          ...usersData[uid],
          uid,
        }))
        .filter(user => user.uid !== currentUserId);

      return {
        success: true,
        users,
      };
    }

    return {
      success: true,
      users: [],
    };
  } catch (error) {
    console.log('Get Users Error:', error);

    return {
      success: false,
      error: error.message,
      code: error.code,
    };
  }
};
