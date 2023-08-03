import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const usersApi = createApi({
  reducerPath: "users",
  baseQuery: fetchBaseQuery({ baseUrl: "https://apistaging.inclass.app" }),
  endpoints(builder) {
    return {
      loginUser: builder.mutation({
        query: (user) => {
          return {
            url: "/api/v1/user/login",
            method: "POST",
            body: {
              user: {
                email: user.email,
                password: user.password,
              },
              device: {
                uid: 1,
                fcm_token: "dummy",
              },
            },
          };
        },
      }),
    };
  },
});

export { usersApi };
export const { useLoginUserMutation } = usersApi;
