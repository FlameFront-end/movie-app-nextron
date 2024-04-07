import { useRouter } from 'next/router'
import { FC, useEffect, useState } from 'react'
import { useSnapshot } from 'valtio'
import * as Api from '../../../api'
import { state } from '../../../state'
import Button from '../../ui/Button/Button'
import FavoriteBtn from '../../ui/FavoriteBtn/FavoriteBtn'
import s from './MovieCard.module.scss'

interface MovieCardProps {
	backgroundImgUrl?: string
	category: string
	id: number
	title?: string
}

const MovieCard: FC<MovieCardProps> = ({ backgroundImgUrl, title, id }) => {
	const [favorites, setFavorites] = useState(null)
	const snap = useSnapshot(state)
	const router = useRouter()

	useEffect(() => {
		setFavorites(snap.user.favorites)
	}, [snap.user.favorites])

	const handleClick = () => {
		router.push(`/catalog/${id}`)
	}

	const handleAddToFavorite = () => {
		Api.user.addToFavorites(id).then(movie => {
			setFavorites(prevState => [...prevState, movie])
		})
	}

	const handleDeleteFavorite = () => {
		Api.user.deleteFavorites(id).then(movie => {
			setFavorites(
				favorites.filter(obj => {
					obj.id !== movie.id
				})
			)
		})
	}

	const checkFavorite = (id: number): boolean => {
		return favorites?.some(favorite => favorite.id === id)
	}

	return (
		<>
			<div
				className={s.movieCard}
				style={{ backgroundImage: `url(${backgroundImgUrl})` }}
			>
				{snap.user ? (
					<FavoriteBtn
						onChange={
							checkFavorite(id) ? handleDeleteFavorite : handleAddToFavorite
						}
						id={id.toString()}
						className={s.favorite}
						checked={checkFavorite(id)}
					/>
				) : null}
				<Button className={s.btn} onClick={handleClick}>
					<i className='bx bx-play'></i>
				</Button>
			</div>
			<h3 className={s.cardTitle}>{title}</h3>
		</>
	)
}

export default MovieCard
