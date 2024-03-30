import React, { FC, FormEvent, useEffect, useState } from 'react'
import * as Api from '../../../api'
import { Actor } from '../../../api/dto/actor.dto'
import { showErrorSnackbar } from '../../../utils/errorSnackBar'
import { showSuccessSnackbar } from '../../../utils/successSnackbar'
import Input from '../../Form/Input/Input'
import TextArea from '../../Form/TextArea/TextArea'
import UploadFile from '../../Form/UploadFile/UploadFile'
import Button from '../../ui/Button/Button'
import s from './CreateMovie.module.scss'

interface CreateMovieProps {
	data: any
	setData: Function
}

const CreateMovie: FC<CreateMovieProps> = ({ data, setData }) => {
	const [allActors, setAllActors] = useState<Actor[]>([])

	const [selectedActorsId, setSelectedActorsId] = useState<number[]>([])
	const [selectedActors, setSelectedActors] = useState<Actor[]>([])

	useEffect(() => {
		Api.actor.getAll().then(res => {
			setAllActors(res)
		})
	}, [])

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

		if (!actors?.length) {
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

		await Api.movie
			.create(data)
			.then(() => {
				showSuccessSnackbar(`Фильм ${data.title} успешно создан`)
				setData({
					title: '',
					description: '',
					actors: [],
					mainImage: null,
					mainVideo: null,
					posterImage: null,
					trailerVideo: null
				})
				setSelectedActors([])
				setSelectedActorsId([])
			})
			.catch(err => {
				showErrorSnackbar({ message: 'Что-то пошло не так' })
				console.error(err)
			})
	}

	const onHandleChange = (value: any, key: string) => {
		setData(prevData => ({
			...prevData,
			[key]: value
		}))
	}

	useEffect(() => {
		onHandleChange(selectedActorsId, 'actors')
	}, [selectedActorsId])

	console.log('data', data)

	const handleActorSelection = (
		event: React.ChangeEvent<HTMLSelectElement>
	) => {
		const selectedActorId = parseInt(event.target.value)
		const selectedActor = allActors.find(actor => actor.id === selectedActorId)
		if (selectedActor) {
			setSelectedActors(prevActors => [...prevActors, selectedActor])
			setSelectedActorsId(prevActors => [...prevActors, selectedActor.id])
			setAllActors(prevActors =>
				prevActors.filter(actor => actor.id !== selectedActorId)
			)
		}
	}

	return (
		<form onSubmit={handleSubmit} className={s.form}>
			<div className={s.content}>
				<div className={s.column}>
					<label>Выберите актера:</label>
					<select onChange={handleActorSelection}>
						<option value=''>Выберите актера</option>
						{allActors.map(actor => (
							<option key={actor.id} value={actor.id}>
								{actor.fullName}
							</option>
						))}
					</select>
					<div>
						<label>Выбранные актеры:</label>
						<ul>
							{selectedActors.map(actor => (
								<li key={actor.id}>{actor.fullName}</li>
							))}
						</ul>
					</div>
				</div>
				<div className={s.column}>
					<Input
						label='Название'
						type='text'
						id='title'
						name='title'
						placeholder='Название фильма'
						onChange={e => onHandleChange(e.target.value, 'title')}
						value={data.title}
						className={s.input}
					/>
				</div>
				<div className={s.column}>
					<TextArea
						placeholder='Описание фильма'
						label='Описание'
						onChange={e => onHandleChange(e, 'description')}
						value={data.description}
					/>
				</div>
				<div className={s.row}>
					<UploadFile
						setValue={(value: File) => onHandleChange(value, 'mainImage')}
						file={data.mainImage}
						placeholder='Главное изображение'
						id='mainImage'
					/>
					<UploadFile
						setValue={(value: File) => onHandleChange(value, 'posterImage')}
						file={data.posterImage}
						placeholder='Постер'
						id='posterImage'
					/>
				</div>
				<div className={s.row}>
					<UploadFile
						key={1}
						setValue={(value: File) => onHandleChange(value, 'mainVideo')}
						file={data.mainVideo}
						placeholder='Главное видео'
						type='video'
						id='mainVideo'
					/>
					<UploadFile
						key={2}
						setValue={(value: File) => onHandleChange(value, 'trailerVideo')}
						type='video'
						file={data.trailerVideo}
						placeholder='Трейлер'
						id='trailerVideo'
					/>
				</div>
			</div>
			<Button className={s.btn} type='submit'>
				Создать фильм
			</Button>
		</form>
	)
}

export default CreateMovie
