import React, {useState} from "react";
import Board from "./Board";
import { useTranslation } from "react-i18next";

function Game() {
  const [history, setHistory] = useState<any>([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState<number>(0);
  const {t, i18n} = useTranslation();
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  const changeLanguage = (language:string) => {
    i18n.changeLanguage(language);
  }

  function handlePlay(nextSquares: null[] | string[]) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove:number) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares:null[] | string[], move: number) => {
    let description;
    if (move > 0) {
      description = t("toMove") + move;
    } else {
      description = t("toStart");
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <>
    <div>
      <button onClick={() => changeLanguage("en")}>EN</button>
      <button onClick={() => changeLanguage("ru")}>RU</button>
    </div>
      <div className="game">
        <div className="game-board">
          <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
        </div>
        <div className="game-info">
          <ol>{moves}</ol>
        </div>
      </div>
    </>
  );
}

export default Game;