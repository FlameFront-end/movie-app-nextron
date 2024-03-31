import { NextPage } from 'next'
import React, { useState } from 'react'
import ActorsTable from '../../components/Admin/Actors/ActorsTable/ActorsTable'
import CreateMovie from '../../components/Admin/Movies/CreateMovie/CreateMovie'
import MoviesTable from '../../components/Admin/Movies/MoviesTable/MoviesTable'
import UsersTable from '../../components/Admin/Users/UsersTable/UsersTable'
import Tabs from '../../components/Tabs/Tabs'
import { CreateFormMovieDto } from '../../api/movie/movie.dto'
import Curve from '../../layouts/Curve'
import s from './AdminDashboard.module.scss'

const AdminDashboard: NextPage = () => {
	const [data, setData] = useState<CreateFormMovieDto>({
		title: '',
		description: '',
		tags: [],
		actors: [],
		mainImage: null,
		mainVideo: null,
		posterImage: null,
		trailerVideo: null
	})
	const [active, setActive] = useState(0)

	const renderBlock = (active: number) => {
		switch (active) {
			case 0:
				return <CreateMovie data={data} setData={setData} />
			case 1:
				return <MoviesTable />
			case 2:
				return <ActorsTable />
			case 3:
				return <UsersTable />
		}
	}

	const tabs = ['Создать фильм', 'Все фильмы', 'Актёры', 'Аккаунты']

	return (
		<Curve>
			<div className={s.wrapper}>
				<div className={s.container}>
					<Tabs
						array={tabs}
						active={active}
						onChange={setActive}
						className={s.admin_tabs}
					/>
					{renderBlock(active)}
				</div>
			</div>
		</Curve>
	)
}

export default AdminDashboard
