import { enqueueSnackbar } from "notistack"

export const showSuccessSnackbar = (message: string) => {
    enqueueSnackbar(message, { variant: "success", hideIconVariant: true })
}