export function throwError(code: number, message: string) {
  const state = JSON.stringify({
    error: { message: message, code: code }
  })

  return JSON.parse(state)
}
