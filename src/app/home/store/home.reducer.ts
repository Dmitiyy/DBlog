import { Action, createReducer, on } from "@ngrx/store";
import { storeData } from "./home.actions";

export type TNews = {
  title: string;
  description: string;
  urlToImage: string;
  content: string;
  publishedAt: string;
}

interface HomeState {
  loadedNews: Array<TNews>;
  loadingNews: Boolean;
};
export interface AppState {home: HomeState};

const initialState: HomeState = {
  loadedNews: [],
  loadingNews: false
};

const _homeRecuder = createReducer(
  initialState,
  on(storeData, (state, {name, data}) => {
    let transformedData: Array<TNews> = [];

    if (name === 'loadedNews') {
      transformedData = [...state.loadedNews, ...data];
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