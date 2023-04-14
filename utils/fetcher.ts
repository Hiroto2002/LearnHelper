/**
 * @description
 * useSWR のパラメータなどで使用する。
 * @param {string} [url] API URL
 * @returns {Promise<T>} API レスポンス
 */
export const fetcher = async <T>(url: string): Promise<T> => {
  const parsedUrl = new URL(url, 'http://localhost:3000')
  const response = await fetch(parsedUrl.toString())
 return (await response.json()) 
}
  