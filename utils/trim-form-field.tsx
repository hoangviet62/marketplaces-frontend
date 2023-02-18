export const trimFormField = <T extends object>(form: T): T => {
  const deepCloneForm = JSON.parse(JSON.stringify(form))

  for (const [key, value] of Object.entries(deepCloneForm)) {

    if (typeof value === 'string') {
      deepCloneForm[key] = value.trim()
    }
  }

  return deepCloneForm
}
