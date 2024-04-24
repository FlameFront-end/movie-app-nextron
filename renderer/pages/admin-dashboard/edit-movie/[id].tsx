import { useRouter } from 'next/router'
import React, {
	ChangeEvent,
	FC,
	FormEvent,
	useCallback,
	useEffect,
	useState
} from 'react'

import * as Api from '../../../api'
import { Actor, CreateFormMovieDto, Movie } from '../../../api'
import { Button, Input, TextArea, UploadFile } from '../../../components'
import Curve from '../../../layouts/Curve'
import { state } from '../../../state'
import { showErrorSnackbar, showSuccessSnackbar } from '../../../utils'

import s from './EditMovie.module.scss'

interface CreateMovieProps {
	movieData: Movie
}

const Id: FC<CreateMovieProps> = ({ movieData }) => {
	const [allActors, setAllActors] = useState<Actor[]>([])
	const [selectedActorsId, setSelectedActorsId] = useState<number[]>([])
	const [selectedActors, setSelectedActors] = useState<Actor[]>([])
	const [tag, setTag] = useState('')

	const [data, setData] = useState<any>({
		title: movieData.title,
		description: movieData.description,
		tags: movieData.tags ? movieData.tags : [],
		actors: selectedActorsId,
		mainImage: movieData.mainImage,
		mainVideo: movieData.mainVideo,
		posterImage: movieData.posterImage || null,
		trailerVideo: movieData.trailerVideo || null
	})

	console.log('selectedActorsId', selectedActorsId)
	console.log('selectedActorsId', typeof selectedActorsId[0])

	const { push } = useRouter()

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
			.update(movieData.id, data)
			.then(() => {
				showSuccessSnackbar(`Фильм ${data.title} успешно изменён`)
				// push('/admin-dashboard')
				// Api.movie.getAll().then(res => {
				// 	state.movies = res
				// })
				// Api.movie.getAllPopular().then(res => {
				// 	state.movies = res
				// })
			})
			.catch(err => {
				showErrorSnackbar({ message: 'Что-то пошло не так' })
				console.error(err)
			})
	}

	const onHandleChange = useCallback(
		(value: any, key: string) => {
			setData((prevData: CreateFormMovieDto) => ({
				...prevData,
				[key]: value
			}))
		},
		[setData]
	)

	const handleAddTag = () => {
		if (tag.trim() !== '') {
			setData((prevData: CreateFormMovieDto) => ({
				...prevData,
				tags: [...data.tags, tag]
			}))
			setTag('')
		}
	}

	const handleActorSelection = (event: ChangeEvent<HTMLSelectElement>) => {
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

	useEffect(() => {
		Api.actor.getAll().then(res => {
			setAllActors(res)
		})
	}, [])

	useEffect(() => {
		onHandleChange(selectedActorsId, 'actors')
	}, [onHandleChange, selectedActorsId])

	return (
		<Curve>
			<div className={s.wrapper}>
				<div className={s.container}>
					<form onSubmit={handleSubmit} className={s.form}>
						<div className={s.content}>
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
								<div className={s.row}>
									<div className={s.row_item}>
										<select onChange={handleActorSelection}>
											<option value='' className={s.test}>
												Выберите актера
											</option>
											{allActors.map(actor => (
												<option key={actor.id} value={actor.id}>
													{actor.fullName}
												</option>
											))}
										</select>
										<div>
											<ul className={s.list}>
												{selectedActors.map(actor => (
													<li key={actor.id}>{actor.fullName}</li>
												))}
											</ul>
										</div>
									</div>
									<div className={s.row_item}>
										<div className={s.row}>
											<Input
												type='text'
												value={tag}
												onChange={e => setTag(e.target.value)}
												placeholder='Добавить тег'
												name='tag'
												width='100%'
											/>
											<button
												type='button'
												className={s.add_tag}
												onClick={handleAddTag}
											>
												Добавить тег
											</button>
										</div>
										<div>
											<ul className={s.list}>
												{data.tags?.map((tag, index) => (
													<li key={index}>{tag}</li>
												))}
											</ul>
										</div>
									</div>
								</div>
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
									file={
										typeof data.mainImage === 'string'
											? undefined
											: data.mainImage
									}
									fileLink={data.mainImage}
									placeholder='Главное изображение'
									id='mainImage'
								/>
								<UploadFile
									setValue={(value: File) =>
										onHandleChange(value, 'posterImage')
									}
									file={
										typeof data.posterImage === 'string'
											? undefined
											: data.posterImage
									}
									fileLink={data.posterImage}
									placeholder='Постер'
									id='posterImage'
								/>
							</div>
							<div className={s.row}>
								<UploadFile
									key={1}
									setValue={(value: File) => onHandleChange(value, 'mainVideo')}
									file={
										typeof data.mainVideo === 'string'
											? undefined
											: data.mainVideo
									}
									fileLink={data.mainVideo}
									placeholder='Главное видео'
									type='video'
									id='mainVideo'
								/>
								<UploadFile
									key={2}
									setValue={(value: File) =>
										onHandleChange(value, 'trailerVideo')
									}
									type='video'
									file={
										typeof data.trailerVideo === 'string'
											? undefined
											: data.trailerVideo
									}
									fileLink={data.trailerVideo}
									placeholder='Трейлер'
									id='trailerVideo'
								/>
							</div>
						</div>
						<Button className={s.btn} type='submit'>
							Изменить фильм
						</Button>
					</form>
				</div>
			</div>
		</Curve>
	)
}

export default Id

export async function getServerSideProps(ctx) {
	const movieData = await Api.movie.getMovieById(ctx.query.id)
	return { props: { movieData, id: ctx.query.id } }
}
