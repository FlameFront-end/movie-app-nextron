import React, {
	MouseEvent,
	ReactNode,
	useCallback,
	useEffect,
	useRef,
	useState
} from 'react'

import { classNames } from '../../../../utils'
import Portal from '../../../Portal/Portal'

import s from './Modal.module.scss'

interface ModalProps {
	className?: string
	children?: ReactNode
	isOpen: boolean
	onClose?: () => void
}

const ANIMATION_DELAY = 300

const Modal: React.FC<ModalProps> = ({
	className,
	children,
	isOpen,
	onClose
}) => {
	const [isClosing, setIsClosing] = useState(false)
	const [domLoaded, setDomLoaded] = useState(false)

	useEffect(() => {
		setDomLoaded(true)
	}, [])

	const timeRef = useRef<ReturnType<typeof setTimeout>>()

	const closeHandler = useCallback(() => {
		if (onClose) {
			setIsClosing(true)
			timeRef.current = setTimeout(() => {
				onClose()
				setIsClosing(false)
			}, ANIMATION_DELAY)
		}
	}, [onClose])
	const onContentClick = (e: MouseEvent) => {
		e.stopPropagation()
	}

	const onKeyDown = useCallback(
		(e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				closeHandler()
			}
		},
		[closeHandler]
	)

	useEffect(() => {
		if (isOpen) {
			window.addEventListener('keydown', onKeyDown)
		}
		return () => {
			clearTimeout(timeRef.current)
			window.removeEventListener('keydown', onKeyDown)
		}
	}, [isOpen, onKeyDown])

	const mods: Record<string, boolean> = {
		[s.opened]: isOpen,
		[s.closing]: isClosing
	}
	return (
		<>
			{domLoaded && (
				<Portal>
					<div className={classNames(s.modal, mods, [])}>
						<div className={s.overlay} onClick={closeHandler}>
							<div
								className={`${s.content} ${className}`}
								onClick={onContentClick}
							>
								{children}
								<div className={s.close} onClick={closeHandler}>
									<i className='bx bx-x'></i>
								</div>
							</div>
						</div>
					</div>
				</Portal>
			)}
		</>
	)
}

export default Modal
