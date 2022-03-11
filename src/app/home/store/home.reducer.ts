import { Action, createReducer, on } from "@ngrx/store";
import { storeData } from "./home.actions";

export type TNews = {
  title: string;
  description: string;
  urlToImage: string;
  content: string;
  publishedAt: string;
}

export type TGames = {
  title: string;
  image: string;
  description: string;
  platforms: string;
  gamerpower_url: string;
}

interface HomeState {
  loadedNews: Array<TNews>;
  loadingNews: Boolean;
  newsPages: number;
};

export interface AppState {home: HomeState};

const initialState: HomeState = {
  loadedNews: [],
  loadingNews: false,
  newsPages: 0
};

const _homeRecuder = createReducer(
  initialState,
  on(storeData, (state, {name, data}) => {
    let transformedData: Array<TNews | {pages: number}> = [];

    if (name === 'loadedNews') {
      transformedData = [...state[name], ...data];
    }

    return {
      ...state, 
      [name]: name === 'loadedNews' ? transformedData : data
    };
  })
);

export function homeReducer(state = initialState, action: Action) {
  return _homeRecuder(state, action);
};