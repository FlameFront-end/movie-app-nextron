import React from 'react'
import s from './UploadImage.module.scss'

interface UploadImageProps {
	setValue: Function
	image: File | null
	placeholder?: string
	maxWidth?: string
	maxHeight?: string
}

const UploadImage: React.FC<UploadImageProps> = ({
	setValue,
	image,
	placeholder,
	maxWidth,
	maxHeight
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
			<label htmlFor='upload-input' className={s.uploadInputLabel}>
				{image ? (
					<div className={s.imageWrapper}>
						<img
							style={{ maxHeight: maxHeight, maxWidth: maxWidth }}
							src={URL.createObjectURL(image)}
							alt='Uploaded'
						/>
					</div>
				) : (
					<div className={s.uploadImagePlaceholder}>
						{placeholder ? placeholder : 'Upload image'}
					</div>
				)}
			</label>
			<input
				id='upload-input'
				type='file'
				accept='image/*'
				onChange={handleImageChange}
				className={s.uploadInput}
			/>
		</div>
	)
}

export default UploadImage
