import { css } from '@emotion/react';
import { useTheme } from '../../theme';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ITaskKeyProps extends Pick<ITask, 'status'> {}

export function TaskKey({ status }: ITaskKeyProps) {
	const theme = useTheme();

	return (
		<div
			css={css`
				position: relative;
				min-width: 30px;
				min-height: 30px;

				::after {
					content: '';
					position: absolute;
					top: 13px;
					left: 13px;
					width: 4px;
					height: 4px;
					background: ${theme.palette.text.primary};
					border-radius: 50%;
					${status !== 'OPEN' ? 'top: 14px; left: 14px; width: 2px; height: 2px;' : ''}
				}

				${status === 'REMOVED'
					? `
						::before {
							content: '';
							position: absolute;
							top: 14px;
							left: 15px;
							width: 15px;
							height: 2px;
							background: ${theme.palette.text.primary};
						}
					`
					: ''}
			`}
		>
			<div
				css={css`
					width: 0;
					height: 0;
					overflow: hidden;

					// Animation
					transition: 1s;
					transition-property: margin-top margin-left height width;
					margin-top: 15px;
					margin-left: 15px;
					${status !== 'OPEN' ? 'margin-top: 0; margin-left: 0;' : ''}

					${status === 'DONE' ? 'width: 30px; height: 30px;' : ''}
					${status === 'MIGRATED-FUTURE' ? 'width: 15px; height: 30px;' : ''}
					${status === 'SCHEDULED' ? 'width: 30px; height: 15px;' : ''}
					
					${status === 'MIGRATED-PAST' ? 'width: 15px; height: 30px; transform: translateX(15px);' : ''}
					${status === 'UNSCHEDULED' ? 'width: 30px; height: 15px; transform: translateY(15px);' : ''}
				`}
			>
				<div
					css={css`
						position: relative;
						display: inline-block;
						width: 30px;
						height: 30px;

						// Animation
						transition: 1s;
						transition-property: margin-top margin-left transform;
						margin-top: -15px;
						margin-left: -15px;
						${status !== 'OPEN' ? 'margin-top: 0; margin-left: 0;' : ''}

						${status === 'MIGRATED-PAST' ? 'transform: translateX(-15px);' : ''}
						${status === 'UNSCHEDULED' ? 'transform: translateY(-15px);' : ''}
					`}
				>
					<div
						css={css`
							::before {
								content: '';
								position: absolute;
								top: 14px;
								left: 5px;

								width: 20px;
								height: 2px;
								background: ${theme.palette.text.primary};
								transform: rotate(45deg);
								border-radius: 2px;
							}
							::after {
								content: '';
								position: absolute;
								top: 14px;
								left: 5px;

								width: 20px;
								height: 2px;
								background: ${theme.palette.text.primary};
								transform: rotate(-45deg);
								border-radius: 2px;
							}
						`}
					/>
				</div>
			</div>
		</div>
	);
}
