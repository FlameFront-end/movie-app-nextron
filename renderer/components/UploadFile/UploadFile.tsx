import React from 'react'
import s from './UploadFile.module.scss'

interface UploadFileProps {
	setValue: Function
	file: File | null
	placeholder?: string
	maxWidth?: string
	maxHeight?: string
	id: string
	type?: 'image' | 'video'
}

const UploadFile: React.FC<UploadFileProps> = ({
	setValue,
	file,
	placeholder,
	maxWidth,
	maxHeight,
	id,
	type = 'image'
}) => {
	const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
				{file ? (
					<div className={s.imageWrapper}>
						{type === 'image' ? (
							<img
								style={{ maxHeight: maxHeight, maxWidth: maxWidth }}
								src={URL.createObjectURL(file)}
								alt='Uploaded'
							/>
						) : (
							<video src={URL.createObjectURL(file)}></video>
						)}
					</div>
				) : (
					<div className={s.uploadImagePlaceholder}>
						{placeholder ? placeholder : 'Upload image'}
					</div>
				)}
			</label>
			<input
				id={id}
				type='file'
				accept='image/*'
				onChange={handleImageChange}
				className={s.uploadInput}
			/>
		</div>
	)
}

export default UploadFile
