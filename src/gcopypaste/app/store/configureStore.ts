import { configureStore as reduxConfigureStore } from '@reduxjs/toolkit';
// import { setupListeners } from '@reduxjs/toolkit/query';

// import { togglesApi } from 'app/features/admin/AdminFeatureTogglesAPI';
// import { browseDashboardsAPI } from 'app/features/browse-dashboards/api/browseDashboardsAPI';
// import { publicDashboardApi } from 'app/features/dashboard/api/publicDashboardApi';
// import { any } from 'app/types/store';

// import { buildInitialState } from '../core/reducers/navModel';
// import { addReducer, createRootReducer } from '../core/reducers/root';
// import { alertingApi } from '../features/alerting/unified/api/alertingApi';

// import { setStore } from './store';

// export function addRootReducer(reducers: any) {
//   // this is ok now because we add reducers before configureStore is called
//   // in the future if we want to add reducers during runtime
//   // we'll have to solve this in a more dynamic way
//   addReducer(reducers);
// }

// const listenerMiddleware = createListenerMiddleware();

// export function configureStore(initialState?: Partial<StoreState>) {
//   const store = reduxConfigureStore({
//     reducer: createRootReducer(),
//     middleware: (getDefaultMiddleware) =>
//       getDefaultMiddleware({ thunk: true, serializableCheck: false, immutableCheck: false }).concat(
//         listenerMiddleware.middleware,
//         alertingApi.middleware,
//         publicDashboardApi.middleware,
//         browseDashboardsAPI.middleware,
//         togglesApi.middleware
//       ),
//     devTools: process.env.NODE_ENV !== 'production',
//     preloadedState: {
//       navIndex: buildInitialState(),
//       ...initialState,
//     },
//   });

//   // this enables "refetchOnFocus" and "refetchOnReconnect" for RTK Query
//   setupListeners(store.dispatch);

//   setStore(store);
//   return store;
// }

export function configureStore(initialState?: Partial<any>) {
  const store = reduxConfigureStore({
    reducer: () => {} //createRootReducer(),
    // middleware: (getDefaultMiddleware) =>
    //   getDefaultMiddleware({ thunk: true, serializableCheck: false, immutableCheck: false }).concat(
    //     listenerMiddleware.middleware,
    //     alertingApi.middleware,
    //     publicDashboardApi.middleware,
    //     browseDashboardsAPI.middleware,
    //     togglesApi.middleware
    //   ),
    // devTools: process.env.NODE_ENV !== 'production',
    // preloadedState: {
    //   navIndex: buildInitialState(),
    //   ...initialState,
    // },
  });

  // this enables "refetchOnFocus" and "refetchOnReconnect" for RTK Query
  // setupListeners(store.dispatch);

  // setStore(store);
  return store;
}
