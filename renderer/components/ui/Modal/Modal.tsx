import React, { useEffect, useState } from 'react'

import { useOutsideClick } from '../../../hooks/useOutsideClick'

import s from './Modal.module.scss'

interface ModalProps {
	active: boolean
	children: React.ReactNode
	id: string
}

const Modal: React.FC<ModalProps> = ({ active, children, id }) => {
	const [activeState, setActiveState] = useState(false)

	useEffect(() => {
		setActiveState(active)
	}, [active])

	const closeModal = () => {
		setActiveState(false)
	}

	const ref = useOutsideClick(() => {
		closeModal()
	})

	return (
		<div className={`${s.modal} ${activeState ? `${s.active}` : ''}`} id={id}>
			<div className={s.modal__content} ref={ref}>
				{children}
				<div className={s.modal__content__close} onClick={closeModal}>
					<i className='bx bx-x'></i>
				</div>
			</div>
		</div>
	)
}

export default Modal
