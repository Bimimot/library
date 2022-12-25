import { ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux';
import { ActionCreator } from '@reduxjs/toolkit'

import { rootReducer, allActions } from '../reducers/index';
import { store } from '../store';

type SliceActions<T> = {
    [K in keyof T]: T[K] extends (...args: any[]) => infer A ? A : never;
}[keyof T];

export type TActions = SliceActions<typeof allActions>

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export type GetState = typeof store.getState;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    AnyAction
>

