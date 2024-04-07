import { FC } from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

import s from './MovieCardSkeleton.module.scss'

import 'react-loading-skeleton/dist/skeleton.css'

interface MovieCardSkeletonProps {
	items: number
}

const MovieCardSkeleton: FC<MovieCardSkeletonProps> = ({ items }) => {
	return Array(items)
		.fill(0)
		.map((_, index) => (
			<SkeletonTheme
				key={index}
				baseColor='#202020'
				highlightColor='#444'
				borderRadius={10}
			>
				<Skeleton count={1} width={239} height={382} />
				<Skeleton count={1} width={239} height={28} className={s.bottom} />
			</SkeletonTheme>
		))
}

export default MovieCardSkeleton
