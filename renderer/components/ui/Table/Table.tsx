import s from './Table.module.scss'

interface TableProps {
	children: any
	thead: any
	className?: string
	sort?: { title: string; type: string }
	setSort?: any
	isHaveData?: boolean
}

export default function Table({
	children,
	thead,
	className,
	sort,
	setSort,
	isHaveData = true
}: TableProps) {
	const handleChangeSort = (item: string | undefined) => {
		if (!setSort || !isHaveData) return

		const newSort = {
			type: sort?.type === 'desc' ? 'asc' : 'desc',
			title: item
		}

		setSort(newSort)
	}

	return (
		<div className={`${s.wrapper} ${className ? className : ''}`}>
			<thead>
				<tr>
					{thead.map(
						(item: { sort: boolean; title: string }, index: number) => {
							return (
								<td key={index} className={item?.sort ? 'sortable' : ''}>
									<p
										onClick={() => handleChangeSort(item.title)}
										className={
											sort?.title === item.title && sort?.type === 'desc'
												? 'active'
												: ''
										}
									>
										{item.title}
										{isHaveData && item?.sort && (
											<img
												src='/pic/arrow-up.svg'
												alt='arrow'
												className='sort_arrow'
											/>
										)}
									</p>
								</td>
							)
						}
					)}
				</tr>
			</thead>
			<tbody>{children}</tbody>
		</div>
	)
}
