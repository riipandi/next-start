export function throwError(code: number, message: string) {
  const state = JSON.stringify({
    error: { message: message, code: code }
  })

  return JSON.parse(state)
}

export function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(' ')
}
