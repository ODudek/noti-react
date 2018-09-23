declare module 'noti-react' {
	type Types = 'error' | 'info' | 'success' | 'warn';
	type Position = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
	export function Notification(props: NotificationProps): JSX.Element;
	
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
}
