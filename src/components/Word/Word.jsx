import clsx from 'clsx';
import style from './word.module.css';

// eslint-disable-next-line react/prop-types
export const Word = ({ word, guessedLetters, isGameLost, isGameWon }) => {
	return (
		<div className={style.word}>
			{[...word].map((letter, i) => {
				// eslint-disable-next-line react/prop-types
				const shoudRevealLetter = isGameLost || guessedLetters.includes(letter);
				return (
					<span
						className={clsx(
							style.letter,
							((isGameLost && guessedLetters.includes(letter)) || isGameWon) &&
								style.guessed,
							isGameLost && !guessedLetters.includes(letter) && style.missed
						)}
						key={i}
					>
						{shoudRevealLetter ? letter.toUpperCase() : ''}
					</span>
				);
			})}
		</div>
	);
};
