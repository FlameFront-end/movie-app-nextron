import React from 'react'

import s from './MyButton.module.scss'

interface MyButtonProps {
	children?: React.ReactNode
	className?: string
	onClick?: () => void
}

const MyButton: React.FC<MyButtonProps> = ({
	children,
	className,
	onClick
}) => {
	return (
		<button className={`${s.btn} ${className || ''}`} onClick={onClick}>
			{children}
		</button>
	)
}

export const OutlineButton: React.FC<MyButtonProps> = ({
	children,
	className,
	onClick
}) => {
	return (
		<MyButton
			className={`${s.btnOutline} ${className || ''}`}
			onClick={onClick}
		>
			{children}
		</MyButton>
	)
}

export default MyButton
