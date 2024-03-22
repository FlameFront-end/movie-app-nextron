import React from 'react'

interface UploadImageProps {
	setData: React.Dispatch<React.SetStateAction<{ image: any }>>
	image: any
}

const UploadImage: React.FC<UploadImageProps> = ({ setData, image }) => {
	const handleImageChange = e => {
		const file = e.target.files[0]
		if (file) {
			const reader = new FileReader()
			reader.onload = () => {
				setData(prevData => ({
					...prevData,
					image: reader.result
				}))
			}
			reader.readAsDataURL(file)
		}
	}

	return (
		<div>
			<input type='file' accept='image/*' onChange={handleImageChange} />
			{image && (
				<div>
					<img src={image} alt='Uploaded' style={{ maxWidth: '100%' }} />
				</div>
			)}
		</div>
	)
}

export default UploadImage
