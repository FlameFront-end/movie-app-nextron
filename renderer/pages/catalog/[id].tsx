import { NextPage } from 'next'
import Link from 'next/link'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { useSnapshot } from 'valtio'

import * as Api from '../../api'
import { Comment, Movie } from '../../api'
import { Button, CastList, MovieList, TextArea } from '../../components'
import Curve from '../../layouts/Curve'
import { state } from '../../state'
import { formatDate, showErrorSnackbar } from '../../utils'

import s from './Detail.module.scss'

interface DetailProps {
	movieId: number
}

const Detail: NextPage<DetailProps> = ({ movieId }) => {
	const snap = useSnapshot(state)

	const [item, setItem] = useState<Movie | null>(null)
	const [comment, setComment] = useState('')
	const [allComments, setAllComments] = useState<Comment[] | null>(null)

	useEffect(() => {
		setTimeout(() => {
			setItem(snap.movies.find(movie => movie.id === movieId))
		}, 700)

		Api.comment.getAlL(movieId).then(res => {
			setAllComments(res)
		})
	}, [movieId, snap.movies])

	const handleCreateComment = async e => {
		e.preventDefault()

		if (!comment.trim()) {
			return showErrorSnackbar({
				message: 'Комментарий не указан'
			})
		}

		Api.comment
			.create({ movieId, text: comment, userId: snap.user.id })
			.then(() => {
				Api.comment.getAlL(movieId).then(res => {
					setAllComments(res)
				})
			})

		setComment('')
	}

	return (
		<Curve>
			{item && (
				<>
					<div
						className={s.banner}
						style={{
							backgroundImage: `url(${item.mainImage})`
						}}
					></div>
					<div className={`container ${s.movie_content}`}>
						<div className={s.poster}>
							<div
								className={s.img}
								style={{
									backgroundImage: `url(${item.posterImage})`
								}}
							></div>
						</div>
						<div className={s.info}>
							<h1 className={s.title}>{item.title}</h1>
							{item.tags?.length ? (
								<div className={s.genres}>
									{item.tags.map((tag, index) => (
										<span key={index} className={s.genres__item}>
											{tag}
										</span>
									))}
								</div>
							) : null}

							<p className='overview'>{item.description}</p>
							<div className='cast'>
								<div className='section__header'>
									<h2>Актёры</h2>
								</div>
								<CastList actors={item.actors} />
							</div>
						</div>
					</div>
					<div className='container'>
						<div className='section mb-3'>
							<div className={s.video}>
								<div className={s.video__title}>
									<h2>Трейлер</h2>
								</div>
								<video
									src={item.trailerVideo}
									controls
									width='100%'
									title='video'
								></video>
							</div>
							<div className={s.video}>
								<div className={s.video__title}>
									<h2>Фильм</h2>
								</div>
								<video
									controls
									src={item.mainVideo}
									width='100%'
									title='video'
								></video>
							</div>
						</div>
						<div className='section mb-3'>
							<div className='section__header mb-2'>
								<h2>Комментарии</h2>
							</div>
							{snap.user ? (
								<form className={s.form} onSubmit={handleCreateComment}>
									<TextArea
										onChange={e => setComment(e)}
										value={comment}
										placeholder={`Ваш комментарий к фильму ${item.title}`}
									/>
									<Button type='submit' className={s.create_comment}>
										Отправить
									</Button>
								</form>
							) : (
								<div className={s.no_account}>
									Чтобы оставлять комментарии, пожалуйста,{' '}
									<Link href='/login' style={{ color: 'red' }}>
										войдите в аккаунт
									</Link>
								</div>
							)}

							{allComments?.length ? (
								<div className={s.comments_wrapper}>
									{allComments?.map((comment, index) => (
										<div key={index} className={s.comment}>
											<div className={s.user}>
												<img src={comment.user.ava} alt='ava' />
												<div
													className={`${s.author} ${
														snap.user?.id === comment.user.id ? 'green' : ''
													}`}
												>
													{comment.user.nick}:
												</div>
											</div>
											<div className={s.text}>{comment.text}</div>
											<div className={s.date}>
												{formatDate(comment.createdAt)}
											</div>
										</div>
									))}
								</div>
							) : null}
						</div>
						<div className='section mb-3'>
							<div className='section__header mb-2'>
								<h2>Смотрите так же</h2>
							</div>
							<MovieList />
						</div>
					</div>
				</>
			)}
		</Curve>
	)
}

Detail.propTypes = {
	movieId: PropTypes.number.isRequired
}

export default Detail

export async function getServerSideProps(ctx) {
	if (!ctx.query.id) {
		return {
			redirect: {
				permanent: false
			}
		}
	}
	return { props: { movieId: Number(ctx.query.id) } }
}
