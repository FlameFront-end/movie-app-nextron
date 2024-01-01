import React from 'react'

import bg from '../../../../../../../../Users/5017_/OneDrive/Рабочий стол/test-nextron-movie/renderer/assets/footer-bg.jpg'

import s from './PageHeader.module.scss'

interface PageHeaderProps {
	children: React.ReactNode
}

const PageHeader: React.FC<PageHeaderProps> = ({ children }) => {
	return (
		<div className={s.pageHeader} style={{ backgroundImage: `url(${bg})` }}>
			<h2>{children}</h2>
		</div>
	)
}

export default PageHeader
