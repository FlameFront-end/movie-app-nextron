import { FC, ReactNode } from 'react'

import s from './PageHeader.module.scss'

interface PageHeaderProps {
	children: ReactNode
}

const PageHeader: FC<PageHeaderProps> = ({ children }) => {
	return (
		<div className={s.pageHeader} style={{ backgroundImage: `url("")` }}>
			<h2>{children}</h2>
		</div>
	)
}

export default PageHeader
