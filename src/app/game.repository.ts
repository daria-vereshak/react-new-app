import { createStore, withProps, select, createState } from '@ngneat/elf';

export interface GameProps {
  history: any,
  currentMove: number
};

const gameStore = createStore(
  {name: 'game'},
  withProps<GameProps>({history: [Array(9).fill(null)], currentMove: 0})
);

export const history$ = gameStore.pipe(select(({history}) => gameStore.getValue().history[gameStore.getValue().currentMove]));


export function getHistory() {
  return gameStore.getValue().history;
}
export function getCurrentMove() {
  return gameStore.getValue().currentMove;
}
export function setHistory(nextHistory: null[] | string[]) {
  gameStore.update((state) => ({
    ...state,
    history: nextHistory,
  }))
}
export function setCurrentMove(move: number) {
  gameStore.update((state) => ({
    ...state,
    currentMove: move,
  }))
}
