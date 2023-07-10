/**
 * Creates a new JSON response with the given message, payload, and status code.
 *
 * @template T - The type of the payload.
 * @param {string | undefined} [message] - The message to include in the response.
 * @param {T[] | T | undefined} [payload] - The payload to include in the response. Can be an array of objects or a single object.
 * @param {number} [status=200] - The HTTP status code to include in the response.
 * @returns {Response} A new Response object with a JSON body.
 */
export function jsonResponse<T>(
  message: string | undefined = undefined,
  payload: T[] | T | undefined = undefined,
  status = 200,
): Response {
  // let result: any = { message }
  const result = Array.isArray(payload) ? { message, data: [...payload] } : { message, ...payload }

  const headers = new Headers()
  headers.set('Content-Type', 'application/json')
  const responseInit: ResponseInit = { status, headers }

  return new Response(JSON.stringify(result), responseInit)
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

  const httpErrors: { [key: number]: string } = {
    400: 'Bad Request',
    401: 'Unauthorized',
    403: 'Forbidden',
    404: 'Not Found',
    500: 'Internal Server Error',
    502: 'Bad Gateway',
    503: 'Service Unavailable',
  }

  const errorResponse = {
    code: status,
    message: message || httpErrors[status] || `Error code ${status}`,
  }

  const responseInit: ResponseInit = { status: status, headers: headers }

  return new Response(JSON.stringify(errorResponse), responseInit)
}
