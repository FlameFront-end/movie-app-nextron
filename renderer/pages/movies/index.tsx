import { NextPage } from 'next'
import { useState } from 'react'
import Input from '../../components/Form/Input/Input'
import MovieList from '../../components/Movie/MovieList/MovieList'
import Button from '../../components/ui/Button/Button'
import PageHeader from '../../components/ui/PageHeader/PageHeader'
import Curve from '../../layouts/Curve'
import s from './Movies.module.scss'

const MoviesPage: NextPage = () => {
	const [keyword, setKeyword] = useState('')

	const onHandleSearch = () => {
		console.log('onHandleSearch')
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
					<MovieList />
				</div>
			</div>
		</Curve>
	)
}

export default MoviesPage
