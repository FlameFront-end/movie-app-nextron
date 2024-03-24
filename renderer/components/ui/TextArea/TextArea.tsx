import s from './TextArea.module.scss'

interface TextAreaProps {
	value: string
	onChange: (value: string) => void
	placeholder: string
	required?: boolean
	label?: string
	width?: string | number
	className?: string
	maxLength?: number
}

const TextArea = ({
	value,
	onChange,
	placeholder,
	required = false,
	label,
	width = '100%',
	className,
	maxLength
}: TextAreaProps) => {
	return (
		<div
			className={`${s.wrapper} ${className ? className : ''}`}
			style={{ width: typeof width === 'number' ? `${width}px` : width }}
		>
			{label && (
				<p className={s.input_label}>
					{label} {required && <span className='required_input'>*</span>}
				</p>
			)}
			<div className={s.input_frame}>
				<textarea
					value={value ?? ''}
					onChange={e => onChange(e.target.value)}
					required={required}
					placeholder={placeholder}
					maxLength={maxLength}
				/>
			</div>
		</div>
	)
}

export default TextArea
