import { NextPage } from 'next'
import { useState } from 'react'
import Input from '../../components/Form/Input/Input'
import MovieGrid from '../../components/Movie/MovieGrid/MovieGrid'
import Button from '../../components/ui/Button/Button'
import PageHeader from '../../components/ui/PageHeader/PageHeader'
import * as Api from '../../api'
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
