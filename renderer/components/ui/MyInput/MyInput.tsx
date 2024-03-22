import React, { ChangeEvent } from 'react'
import s from './MyInput.module.scss'

interface MyInputProps {
	onChange: (e: ChangeEvent<HTMLInputElement>) => void
	onBlur?: (e: ChangeEvent<HTMLInputElement>) => void
	placeholder?: string
	type?: string
	id?: string
	name: string
	className: string
	value: string
	label?: string
}

const MyInput: React.FC<MyInputProps> = ({
	onChange,
	onBlur,
	placeholder,
	type,
	id,
	name,
	className,
	value,
	label
}) => {
	return (
		<div className={s.wrapper}>
			{label && (
				<label htmlFor={id} className={s.label}>
					{label}
				</label>
			)}
			<input
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

export default MyInput
