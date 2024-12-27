import clsx from 'clsx';
import { getFarewellText } from '../../utils';
import { languages } from '../../constans';
import style from './gamestatus.module.css';
export const GameStatus = ({ status, wrongCount, currentWord }) => {
	if (!status) return null;
	if (status === 'farewell') {
		return (
			<section
				aria-live='polite'
				role='status-game'
				className={clsx(style.game_status, style.farewell)}
			>
				{getFarewellText(languages[wrongCount - 1].name)}
			</section>
		);
	}
	return (
		<section
			aria-live='polite'
			role='status-game'
			className={clsx(style.game_status, style[status])}
		>
			<h2>{status === 'won' ? 'You win!' : 'You lose!'}</h2>
			<p>
				{status === 'won'
					? 'Well done 🙂'
					: 'Better start learning Assembly 😭'}
			</p>
			
		</section>
	);
};
