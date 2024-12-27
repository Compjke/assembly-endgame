import { useState } from 'react';
import { GameStatus } from './components/GameStatus/GameStatus';
import { Header } from './components/Header/Header';
import { Languages } from './components/Languages/Languages';
import { Word } from './components/Word/Word';
import { Keyboard } from './components/Keyboard/Keyboard';
import { ERRORS_MAX_VALUE } from './constans';
import { FireWorks } from './components/FireWork/FireWorks';
import { chooseRandomWord } from './utils';
import GameStatusForSR from './components/GameStatus/GameStatusForSR';

function App() {
	const [currentWord, setCurrentWord] = useState(() => chooseRandomWord());
	const [guessedLetters, setGuessedLetters] = useState([]);

	const wrongLettersCount = guessedLetters.filter(
		(l) => !currentWord.includes(l)
	).length;

	const isGameWon = [...currentWord].every((l) => guessedLetters.includes(l));
	const isGameLolst = wrongLettersCount > ERRORS_MAX_VALUE;
	const isGameOver = isGameLolst || isGameWon;
	const handleGuessClick = (letter) => {
		if (!guessedLetters.includes(letter)) {
			setGuessedLetters((prev) => [...prev, letter]);
		}
	};

	const resetGame = () => {
		setGuessedLetters([]);
		setCurrentWord(chooseRandomWord());
	};

	const isLastGuessIncorrect =
		!!guessedLetters.length && !currentWord.includes(guessedLetters.at(-1));

	return (
		<div className='container'>
			<Header />
			<main className='main-container'>
				<div className='game-status-container'>
					<GameStatus
						wrongCount={wrongLettersCount}
						currentWord={currentWord}
						status={
							isGameOver
								? isGameLolst
									? 'lose'
									: 'won'
								: isLastGuessIncorrect
								? 'farewell'
								: null
						}
					/>
					<GameStatusForSR
						currentWord={currentWord}
						guessedLetters={guessedLetters}
					/>
				</div>
				<Languages wrongCount={wrongLettersCount} />
				<Word
					isGameLost={isGameLolst}
					isGameWon={isGameWon}
					word={currentWord}
					guessedLetters={guessedLetters}
				/>
				<Keyboard
					onGuess={handleGuessClick}
					currentWord={currentWord}
					guessedLetters={guessedLetters}
					isGameOver={isGameOver}
				/>
				{isGameOver && (
					<button onClick={resetGame} className='new-game'>
						New Game
					</button>
				)}
			</main>
			{isGameWon && <FireWorks />}
		</div>
	);
}

export default App;
