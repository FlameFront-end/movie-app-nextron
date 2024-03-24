import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import React, { FC, useEffect, useState } from 'react'
import { curve, text, translate } from './anim'
import s from './Curve.module.scss'

const routes = {
	'/': 'Home',
	'/movies': 'Movies',
	'/tv': 'TV Series',
	'/login': 'Login',
	'/register': 'Registration',
	'/admin-dashboard': 'Admin Dashboard'
}

const anim = (variants: any) => {
	return {
		variants,
		initial: 'initial',
		animate: 'enter',
		exit: 'exit'
	}
}

interface CurveProps {
	children: React.ReactNode
}

const Curve: FC<CurveProps> = ({ children }) => {
	const router = useRouter()
	const [dimensions, setDimensions] = useState({
		width: null,
		height: null
	})

	useEffect(() => {
		function resize() {
			setDimensions({
				width: window.innerWidth,
				height: window.innerHeight
			})
		}
		resize()
		window.addEventListener('resize', resize)
		return () => {
			window.removeEventListener('resize', resize)
		}
	}, [])

	return (
		<div className={s.curve}>
			<div
				style={{ opacity: dimensions.width == null ? 1 : 0 }}
				className={s.background}
			/>

			<motion.p className={s.route} {...anim(text)}>
				{routes[router.route]}
			</motion.p>

			{dimensions.width != null && <SVG {...dimensions} />}

			{children}
		</div>
	)
}

interface SVGProps {
	height: number
	width: number
}

const SVG: FC<SVGProps> = ({ height, width }) => {
	const initialPath = `
        M0 300 
        Q${width / 2} 0 ${width} 300
        L${width} ${height + 300}
        Q${width / 2} ${height + 600} 0 ${height + 300}
        L0 0
    `

	const targetPath = `
        M0 300
        Q${width / 2} 0 ${width} 300
        L${width} ${height}
        Q${width / 2} ${height} 0 ${height}
        L0 0
    `

	return (
		<motion.svg {...anim(translate)}>
			<motion.path {...anim(curve(initialPath, targetPath))} />
		</motion.svg>
	)
}

export default Curve
