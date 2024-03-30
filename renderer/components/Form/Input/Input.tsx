import React, { ChangeEvent } from 'react'
import s from './Input.module.scss'

interface MyInputProps {
	onChange: (e: ChangeEvent<HTMLInputElement>) => void
	onBlur?: (e: ChangeEvent<HTMLInputElement>) => void
	placeholder?: string
	type?: string
	id?: string
	name: string
	className?: string
	value: string
	label?: string
	width?: string
}

const Input: React.FC<MyInputProps> = ({
	onChange,
	onBlur,
	placeholder,
	type,
	id,
	name,
	className,
	value,
	label,
	width
}) => {
	return (
		<div style={{ width: width }} className={s.wrapper}>
			{label && (
				<label htmlFor={id} className={s.label}>
					{label}
				</label>
			)}
			<input
				style={{ width: width }}
				onChange={onChange}
				onBlur={onBlur}
				placeholder={placeholder}
				type={type ? type : 'text'}
				id={id}
				name={name}
				value={value}
				className={s.input + ' ' + className}
			/>
		</div>
	)
}

export default Input
