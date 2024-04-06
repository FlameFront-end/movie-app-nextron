import { FC, ReactNode } from 'react'
import bg from '../../../assets/footer-bg.jpg'
import s from './PageHeader.module.scss'

interface PageHeaderProps {
	children: ReactNode
}

const PageHeader: FC<PageHeaderProps> = ({ children }) => {
	return (
		<div className={s.pageHeader} style={{ backgroundImage: `url(${bg})` }}>
			<h2>{children}</h2>
		</div>
	)
}

export default PageHeader
