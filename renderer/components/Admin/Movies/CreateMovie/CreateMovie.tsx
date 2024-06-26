import {
	ChangeEvent,
	FC,
	FormEvent,
	useCallback,
	useEffect,
	useState
} from 'react'

import * as Api from '../../../../api'
import { Actor, CreateFormMovieDto } from '../../../../api'
import { state } from '../../../../state'
import { showErrorSnackbar, showSuccessSnackbar } from '../../../../utils'
import { Button, Input, TextArea, UploadFile } from '../../../index'

import s from './CreateMovie.module.scss'

interface CreateMovieProps {
	data: CreateFormMovieDto
	setData: Function
}

const CreateMovie: FC<CreateMovieProps> = ({ data, setData }) => {
	const [allActors, setAllActors] = useState<Actor[]>([])

	const [selectedActorsId, setSelectedActorsId] = useState<number[] | []>([])
	const [selectedActors, setSelectedActors] = useState<Actor[] | []>([])
	const [tag, setTag] = useState('')

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
				Api.movie.getAll().then(res => {
					state.movies = res
				})
				Api.movie.getAllPopular().then(res => {
					state.popularMovies = res
				})
				Api.actor.getAll().then(res => {
					setAllActors(res)
				})
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

	const handleChange = isCheck => {
		setData(prevState => ({ ...prevState, onlySubscribe: isCheck }))
	}

	return (
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
									{data.tags?.map((tag, index) => <li key={index}>{tag}</li>)}
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className={s.row}>
					<label className={s.label_only} htmlFor='onlySubscribe'>
						<input
							id='onlySubscribe'
							type='checkbox'
							checked={data.onlySubscribe}
							onChange={e => handleChange(e.target.checked)}
						/>
						<span>Только по подписке</span>
					</label>
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
