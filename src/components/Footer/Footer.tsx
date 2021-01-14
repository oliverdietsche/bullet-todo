import { css } from '@emotion/react';
import { BottomNavigation, BottomNavigationAction, Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import AlarmOffIcon from '@material-ui/icons/AlarmOff';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import SettingsIcon from '@material-ui/icons/Settings';
import TodayIcon from '@material-ui/icons/Today';
import UndoIcon from '@material-ui/icons/Undo';
import { useRouter } from 'next/dist/client/router';
import { Fragment } from 'react';
import { useTask } from '../../providers';
import { FOOTER_HEIGHT } from '../../theme';

export function Footer() {
	const router = useRouter();
	const { undo } = useTask();

	const handleNewTaskClick = () => {
		router.push('/new-task');
	};

	const handleNavChange = (event, newValue) => {
		router.push(newValue);
	};

	return (
		<Fragment>
			<div
				css={css`
					position: fixed;
					bottom: calc(${FOOTER_HEIGHT} + 10px);
					right: 10px;

					display: flex;
					flex-flow: column nowrap;

					.MuiButtonBase-root {
						margin: 10px;
					}
				`}
			>
				<Fab color="primary" aria-label="new-task" onClick={handleNewTaskClick}>
					<AddIcon />
				</Fab>
				<Fab color="secondary" aria-label="undo" onClick={undo}>
					<UndoIcon />
				</Fab>
			</div>
			<BottomNavigation
				value={router ? router.pathname : ''}
				css={css`
					position: fixed;
					bottom: 0;
					left: 0;
					width: 100vw;
				`}
				onChange={handleNavChange}
			>
				<BottomNavigationAction label="Timeline" value="/tasks/timeline" icon={<CalendarViewDayIcon />} />
				<BottomNavigationAction label="Today" value="/tasks/today" icon={<TodayIcon />} />
				<BottomNavigationAction label="Anytime" value="/tasks/anytime" icon={<AlarmOffIcon />} />
				<BottomNavigationAction label="Config" value="/config" icon={<SettingsIcon />} />
			</BottomNavigation>
			<div
				css={css`
					height: calc(${FOOTER_HEIGHT} + 10px);
				`}
			/>
		</Fragment>
	);
}
