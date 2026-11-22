import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import { getAllUsers } from './getUsers';

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fakeBaseQuery(),
  endpoints: builder => ({
    getUsers: builder.query({
      async queryFn(currentUserId) {
        const result = await getAllUsers(currentUserId);

        if (!result.success) {
          return {
            error: {
              status: 'CUSTOM_ERROR',
              error: result.error || 'Failed to load users',
            },
          };
        }

        return { data: result.users };
      },
    }),
  }),
});

export const { useGetUsersQuery } = usersApi;
