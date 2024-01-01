import React, { ChangeEvent } from 'react'

import s from './MyInput.module.scss'

interface MyInputProps {
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void
	placeholder?: string
	type?: string
	value?: string
}

const MyInput: React.FC<MyInputProps> = ({
	onChange,
	placeholder,
	type,
	value
}) => {
	return (
		<input
			onChange={onChange}
			placeholder={placeholder}
			type={type ? type : 'text'}
			value={value}
			className={s.input}
		/>
	)
}

export default MyInput
