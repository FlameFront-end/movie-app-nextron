// import bg from '../../../../../../../../Users/5017_/OneDrive/Рабочий стол/test-nextron-movie/renderer/assets/footer-bg.jpg'
import { FC, ReactNode } from 'react'
import s from './PageHeader.module.scss'

interface PageHeaderProps {
	children: ReactNode
}

// style={{ backgroundImage: `url(${bg})` }}

const PageHeader: FC<PageHeaderProps> = ({ children }) => {
	return (
		<div className={s.pageHeader}>
			<h2>{children}</h2>
		</div>
	)
}

export default PageHeader
