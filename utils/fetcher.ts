/**
 * Represents the shape of an API response, wrapping the data returned from an API.
 * @template T The type of data returned by the API.
 */
interface ApiResponse<T> {
  data: T
  status: number
}

/**
 * Sends a request to the specified URL with the specified options, and returns an `ApiResponse` object wrapping the parsed response data.
 * @template T The type of data expected to be returned by the API.
 * @param {string} url The URL to send the request to.
 * @param {RequestInit} [options] Optional request options, such as headers or method.
 * @param {string} [accessToken] Optional access token to be included as a bearer token in the Authorization header.
 * @returns {Promise<ApiResponse<T>>} A Promise that resolves to an `ApiResponse` object wrapping the parsed response data.
 */
export async function fetcher<T>(
  url: string,
  options?: RequestInit,
  accessToken?: string
): Promise<ApiResponse<T>> {
  const headers: HeadersInit = new Headers(options?.headers)
  const existingAuthHeader = headers.has('Authorization')

  // If 'accessToken' is provided and 'Authorization' header is not already set,
  // set the 'Authorization' header to the provided access token.
  if (accessToken && !existingAuthHeader) {
    headers.append('Authorization', `Bearer ${accessToken}`)
  }

  const resp = await fetch(url, { ...options, headers })
  const data = (await resp.json()) as T

  return { data, status: resp.status }
}
