declare module 'noti-react' {
	import { ReactNode } from 'react';

	type Types = 'error' | 'info' | 'success' | 'warn';
	type Position = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

	export function Notification(props: NotificationProps): JSX.Element;
	export function NotificationContainer(
		props: NotificationContainerProps
	): JSX.Element;

	export interface NotificationProps {
		type?: Types;
		label: string;
		autoHide?: boolean;
		animationTime?: number;
		position?: Position;
		hideTime?: number;
		customColor?: string;
		className?: string;
	}

	export interface NotificationContainerProps {
		position: Position;
		children: ReactNode;
	}
}
