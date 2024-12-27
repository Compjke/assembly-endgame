import clsx from 'clsx';
import { languages } from '../../constans';
import style from './lang.module.css';
// eslint-disable-next-line react/prop-types
export const Languages = ({ wrongCount }) => {
	return (
		<ul className={style.languages}>
			{languages.map((lang, ind) => {
				const isLangLost = ind < wrongCount;
				return (
					<li
						style={{ backgroundColor: lang.backgroundColor, color: lang.color }}
						className={clsx(style.language, isLangLost && style.lost)}
						key={lang.name}
					>
						{lang.name}
					</li>
				);
			})}
		</ul>
	);
};
