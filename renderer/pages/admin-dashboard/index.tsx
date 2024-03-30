import { NextPage } from 'next'
import React, { FormEvent, useState } from 'react'
import MyButton from '../../components/ui/MyButton/MyButton'
import MyInput from '../../components/ui/MyInput/MyInput'
import TextArea from '../../components/ui/TextArea/TextArea'
import UploadImage from '../../components/UploadImage/UploadImage'
import * as Api from '../../api'
import { CreateFormMovieDto } from '../../api/dto/movie.dto'
import Curve from '../../layouts/Curve'
import { showErrorSnackbar } from '../../utils/errorSnackBar'
import s from '../login/Login.module.scss'

const AdminDashboard: NextPage = () => {
	const [data, setData] = useState<CreateFormMovieDto>({
		title: '',
		description: '',
		actors: [],
		mainImage: null,
		mainVideo: null,
		posterImage: null,
		trailerVideo: null
	})

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault()

		const preparedData = {
			...data,
			title: data.title?.trim(),
			description: data.title?.trim()
		}

		const {
			title,
			description,
			actors,
			trailerVideo,
			mainVideo,
			mainImage,
			posterImage
		} = preparedData

		if (!title.trim()) {
			return showErrorSnackbar({
				message: 'Название не указано'
			})
		}

		if (!description.trim()) {
			return showErrorSnackbar({
				message: 'Описание не указано'
			})
		}

		if (!actors.length) {
			return showErrorSnackbar({
				message: 'Актёры не указаны'
			})
		}

		if (!trailerVideo) {
			return showErrorSnackbar({
				message: 'Трейлер не загружен'
			})
		}

		if (!mainVideo) {
			return showErrorSnackbar({
				message: 'Фильм не загружен'
			})
		}

		if (!mainImage) {
			return showErrorSnackbar({
				message: 'Главное изображение не загружено'
			})
		}

		if (!posterImage) {
			return showErrorSnackbar({
				message: 'Постер не загружен'
			})
		}

		await Api.movie.create(data)
	}

	const onHandleChange = (value: any, key: string) => {
		console.log('key', key)
		setData(prevData => ({
			...prevData,
			[key]: value
		}))
	}

	console.log('data', data)

	return (
		<Curve>
			<div className={s.wrapper}>
				<div className={s.container}>
					<h1 className={s.title}>Панель администратора</h1>
					<form onSubmit={handleSubmit} className={s.form}>
						<div className={s.content}>
							<div className={s.column}>
								<MyInput
									label='Название'
									type='text'
									id='title'
									name='title'
									onChange={e => onHandleChange(e.target.value, 'title')}
									value={data.title}
									className={s.input}
								/>
								<TextArea
									placeholder='Описание фильма'
									label='Описание'
									onChange={e => onHandleChange(e, 'description')}
									value={data.description}
								/>
							</div>
							<div className={s.column}>
								<UploadImage
									key={1}
									setValue={(value: File) => onHandleChange(value, 'mainImage')}
									image={data.mainImage}
									placeholder='Главное изображение'
								/>
								<UploadImage
									key={2}
									setValue={(value: File) =>
										onHandleChange(value, 'posterImage')
									}
									image={data.posterImage}
									placeholder='Постер'
								/>
							</div>
						</div>
						<MyButton className={s.btn} type='submit'>
							Создать фильм
						</MyButton>
					</form>
				</div>
			</div>
		</Curve>
	)
}

export default AdminDashboard
