import { languages } from '../../constans';

const GameStatusForSR = ({ currentWord, guessedLetters }) => {
	const numGuessesLeft = languages.length - 1;
	const lastGuessedLetter = guessedLetters[guessedLetters.length - 1];
	return (
		<section className='sr-only' aria-live='polite' role='status'>
			<p>
				{currentWord.includes(lastGuessedLetter)
					? `Correct! The letter ${lastGuessedLetter} is in the word.`
					: `Sorry, the letter ${lastGuessedLetter} is not in the word.`}
				You have {numGuessesLeft} attempts left.
			</p>
			<p>
				Current word:{' '}
				{currentWord
					.split('')
					.map((letter) =>
						guessedLetters.includes(letter) ? letter + '.' : 'blank.'
					)
					.join(' ')}
			</p>
		</section>
	);
};

export default GameStatusForSR;
