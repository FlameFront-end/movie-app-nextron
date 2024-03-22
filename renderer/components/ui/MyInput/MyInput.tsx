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
}

const MyInput: React.FC<MyInputProps> = ({
	onChange,
	onBlur,
	placeholder,
	type,
	id,
	name,
	className,
	value
}) => {
	return (
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
	)
}

export default MyInput
