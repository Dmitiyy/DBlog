import { createAction, props } from "@ngrx/store";

export enum HomeActions {
  GET_NEWS_START = '[Home Page] Get News Start',
  STORE_STORE = '[Any Page] Store Data',
  RECEIVE_GAMES = '[Home Page] Receive Games Start'
};

export const getNewsStart = createAction(
  HomeActions.GET_NEWS_START, 
  props<{page: number}>()
);

export const storeData = createAction(
  HomeActions.STORE_STORE, props<{name: string, data: any}>()
);

export const receiveGamesStart = createAction(HomeActions.RECEIVE_GAMES);