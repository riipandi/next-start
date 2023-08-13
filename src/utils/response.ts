export const HttpStatusCode: { [key: number]: string } = {
  200: 'The request was successful',
  400: 'Bad Request',
  401: 'Unauthorized',
  403: 'Forbidden',
  404: 'Not Found',
  500: 'Internal Server Error',
  502: 'Bad Gateway',
  503: 'Service Unavailable',
}

/**
 * Handles or throws a REST API error.
 * @param status - The HTTP status code for the error.
 * @param message - The error message.
 * @returns A Response object with the error details.
 * @throws An error with the specified status and message.
 */
export function throwResponse(status: number, message?: string): Response {
  const headers = new Headers()
  headers.set('Content-Type', 'application/json')

  const errorResponse = {
    code: status,
    message: message || HttpStatusCode[status] || `Error code ${status}`,
  }

  const responseInit: ResponseInit = { status: status, headers: headers }

  return new Response(JSON.stringify(errorResponse), responseInit)
}
