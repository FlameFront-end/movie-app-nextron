import React from 'react'
import { RegisterFormDTO } from '../../api/dto/auth.dto'
import s from './UploadImage.module.scss'

interface UploadImageProps {
	setData: React.Dispatch<React.SetStateAction<RegisterFormDTO>>
	ava: File
}

const UploadImage: React.FC<UploadImageProps> = ({ setData, ava }) => {
	const handleImageChange = e => {
		const file = e.target.files[0]
		if (file) {
			const reader = new FileReader()
			reader.onload = () => {
				setData(prevData => ({
					...prevData,
					ava: file
				}))
			}
			reader.readAsDataURL(file)
		}
	}

	return (
		<div>
			<input type='file' accept='image/*' onChange={handleImageChange} />
			{ava && (
				<div>
					<img
						src={URL.createObjectURL(ava)}
						alt='Uploaded image'
						className={s.image}
					/>
				</div>
			)}
		</div>
	)
}

export default UploadImage
