import React from 'react'
import s from './UploadImage.module.scss'

interface UploadImageProps {
	setData: Function
	image: File | null
	valueName: string
}

const UploadImage: React.FC<UploadImageProps> = ({
	setData,
	image,
	valueName
}) => {
	const onHandleChange = (value: any) => {
		console.log('valueName', valueName)
		setData(prevData => ({
			...prevData,
			[valueName]: value
		}))
	}

	const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files && e.target.files[0]
		if (file) {
			const reader = new FileReader()
			reader.onload = () => {
				onHandleChange(file)
			}
			reader.readAsDataURL(file)
		}
	}

	return (
		<div className={s.uploadImageContainer}>
			<label htmlFor='upload-input' className={s.uploadInputLabel}>
				{image ? (
					<img
						src={URL.createObjectURL(image)}
						alt='Uploaded'
						className={s.uploadedImage}
					/>
				) : (
					<div className={s.uploadImagePlaceholder}>Upload Image</div>
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
