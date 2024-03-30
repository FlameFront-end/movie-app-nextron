import { NextPage } from 'next'
import React, { useState } from 'react'
import CreateMovie from '../../components/Admin/CreateMovie/CreateMovie'
import MoviesTable from '../../components/Admin/MoviesTable/MoviesTable'
import Tabs from '../../components/Tabs/Tabs'
import { CreateFormMovieDto } from '../../api/dto/movie.dto'
import Curve from '../../layouts/Curve'
import s from './AdminDashboard.module.scss'

const AdminDashboard: NextPage = () => {
	const [data, setData] = useState<CreateFormMovieDto>({
		title: '',
		description: '',
		actors: ['sdfsdf', 'sdfsdfsdf'],
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
				return <CreateMovie data={data} setData={setData} />
		}
	}

	const tabs = ['Создать фильм', 'Все фильмы', 'Аккаунты']

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
