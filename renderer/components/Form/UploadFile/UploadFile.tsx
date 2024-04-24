import React from 'react'

import s from './UploadFile.module.scss'

interface UploadFileProps {
	setValue: Function
	file: File | null
	placeholder?: string
	maxWidth?: number
	maxHeight?: number
	id: string
	type?: 'image' | 'video'
	className?: string
	fileLink?: string
}

const UploadFile: React.FC<UploadFileProps> = ({
	setValue,
	file,
	placeholder,
	maxWidth,
	maxHeight,
	id,
	type = 'image',
	className,
	fileLink
}) => {
	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files && e.target.files[0]
		if (file) {
			const reader = new FileReader()
			reader.onload = () => {
				setValue(file)
			}
			reader.readAsDataURL(file)
		}
	}

	return (
		<div className={s.uploadImageContainer}>
			<label htmlFor={id} className={s.uploadInputLabel}>
				{file || fileLink ? (
					<div
						className={`${s.fileWrapper}`}
						style={{ maxHeight: maxHeight, maxWidth: maxWidth }}
					>
						{type === 'image' ? (
							<img
								className={className}
								src={file ? URL.createObjectURL(file) : fileLink}
								alt='Uploaded'
							/>
						) : (
							<video src={file ? URL.createObjectURL(file) : fileLink}></video>
						)}
					</div>
				) : (
					<div className={`${s.uploadImagePlaceholder} ${className}`}>
						{placeholder ? placeholder : 'Upload image'}
					</div>
				)}
			</label>
			<input
				id={id}
				type='file'
				accept={type === 'image' ? 'image/*' : 'video/*'}
				onChange={handleFileChange}
				className={s.uploadInput}
			/>
		</div>
	)
}

export default UploadFile
