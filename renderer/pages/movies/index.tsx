import { NextPage } from 'next'
import { useState } from 'react'

import * as Api from '../../api'
import { Button, Input, MovieGrid, PageHeader } from '../../components'
import Curve from '../../layouts/Curve'
import { state } from '../../state'

import s from './Movies.module.scss'

const MoviesPage: NextPage = () => {
	const [keyword, setKeyword] = useState('')
	const [isSearch, setIsSearch] = useState(false)

	const onHandleSearch = () => {
		Api.movie.getMovieByTitle(keyword).then(movies => {
			state.searchMovies = movies
			setKeyword('')
			setIsSearch(true)
		})
	}

	return (
		<Curve>
			<div className='wrapper'>
				<PageHeader>Фильмы</PageHeader>
				<div className='container'>
					<div className='section mb-3'>
						<div className={s.movie_search}>
							<Input
								type='text'
								placeholder='Введите название'
								value={keyword}
								onChange={e => setKeyword(e.target.value)}
								name='keyword'
							/>
							<Button className={s.btn} onClick={onHandleSearch}>
								Поиск
							</Button>
						</div>
					</div>
					<MovieGrid sort={isSearch ? 'search' : 'createdAt'} />
				</div>
			</div>
		</Curve>
	)
}

export default MoviesPage
