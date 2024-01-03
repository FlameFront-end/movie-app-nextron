import React from 'react'

import s from './MyButton.module.scss'

interface MyButtonProps {
	children?: React.ReactNode
	className?: string
	onClick?: () => void
	type?: 'submit' | 'reset' | undefined
}

const MyButton: React.FC<MyButtonProps> = ({
	children,
	className,
	onClick,
	type
}) => {
	return (
		<button
			type={type || 'button'}
			className={`${s.btn} ${className || ''}`}
			onClick={onClick}
		>
			{children}
		</button>
	)
}

export const OutlineButton: React.FC<MyButtonProps> = ({
	children,
	className,
	onClick,
	type
}) => {
	return (
		<MyButton
			type={type}
			className={`${s.btnOutline} ${className || ''}`}
			onClick={onClick}
		>
			{children}
		</MyButton>
	)
}

export default MyButton
