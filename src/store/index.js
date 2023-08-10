import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { usersApi } from "./apis/usersApi";
import { coursesApi } from "./apis/coursesApi";
import { loginSlice } from "./slices/loginSlice";

const store = configureStore({
  reducer: {
    isLoggedIn: loginSlice.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [coursesApi.reducerPath]: coursesApi.reducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware()
      .concat(usersApi.middleware)
      .concat(coursesApi.middleware);
  },
});

setupListeners(store.dispatch);

export { store };
export * from "./apis/usersApi";
export * from "./slices/loginSlice";
export * from "./apis/coursesApi";
