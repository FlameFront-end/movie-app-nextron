import { enqueueSnackbar } from "notistack"

export const showErrorSnackbar = ({ message, tryAgainMessage = "" }: { message: string, tryAgainMessage?: string }) => {
    message += tryAgainMessage
    enqueueSnackbar(message, { variant: "error", hideIconVariant: true })
}
