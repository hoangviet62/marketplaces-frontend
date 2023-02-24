import { toast as ReactToastify } from 'react-toastify'

export const defaultToastOptions = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "colored",
}

export const toast = (content: string, type: string, options: object = defaultToastOptions) => {
  switch (type) {
    case "success":
      ReactToastify.success(content, options)
      break;

    case "error":
      ReactToastify.error(content, options)
      break;

    case "warning":
      ReactToastify.warning(content, options)
      break;

    case "info":
      ReactToastify.info(content, options)
      break;

    default:
      ReactToastify(content, options)
      break;
  }
}