import { FC } from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

import 'react-loading-skeleton/dist/skeleton.css'

interface MovieTableItemSkeletonProps {
	items: number
}

const MovieTableItemSkeleton: FC<MovieTableItemSkeletonProps> = ({ items }) => {
	return Array(items)
		.fill(0)
		.map((_, index) => (
			<SkeletonTheme key={index} baseColor='#202020' highlightColor='#444'>
				<Skeleton
					count={1}
					height={200}
					width={1000}
					style={{ marginBottom: '10px' }}
				/>
			</SkeletonTheme>
		))
}

export default MovieTableItemSkeleton
