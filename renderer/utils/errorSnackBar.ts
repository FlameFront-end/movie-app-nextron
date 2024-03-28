import { enqueueSnackbar } from 'notistack'

export const showErrorSnackbar = ({
	message,
	tryAgainMessage = ', пожалуйста, повторите попытку.'
}: {
	message: string
	tryAgainMessage?: string
}) => {
	message += tryAgainMessage
	enqueueSnackbar(message, { variant: 'error', hideIconVariant: true })
}
