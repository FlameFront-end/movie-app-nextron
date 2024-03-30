import { FC, ReactNode } from 'react'
import { createPortal } from 'react-dom'

interface PortalProps {
	children: ReactNode
	element?: HTMLElement
}

const Portal: FC<PortalProps> = ({ children, element }) => {
	if (typeof document === 'undefined') {
		return null
	}

	return createPortal(children, element || document.body)
}

export default Portal
