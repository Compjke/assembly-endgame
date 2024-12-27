import style from './keyboard.module.css';
import { alphabet } from '../../constans';
import clsx from 'clsx';

export const Keyboard = ({
	onGuess,
	guessedLetters,
	currentWord,
	isGameOver,
}) => {
	return (
		<section className={style.keyboard}>
			{[...alphabet].map((letter) => {
				const isGuessed = guessedLetters.includes(letter);
				const isInCurrentWord = currentWord.includes(letter);
				const isCorrect = isGuessed && isInCurrentWord;
				const isWrong = isGuessed && !isInCurrentWord;
				return (
					<button
						disabled={isGameOver}
						aria-disabled={isGuessed}
						aria-label={'Letter ' + letter}
						className={clsx(
							style.btn,
							isCorrect && style.correct,
							isWrong && style.wrong
						)}
						onClick={() => onGuess(letter)}
						key={letter}
					>
						{letter.toUpperCase()}
					</button>
				);
			})}
		</section>
	);
};
