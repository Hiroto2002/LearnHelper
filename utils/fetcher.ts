/**
 * @description
 * useSWR のパラメータなどで使用する。
 * @param {string} [url] API URL
 * @returns {Promise<T>} API レスポンス
 */
export const fetcher = async <T>(url: string): Promise<T> => {
  try {
    const parsedUrl = new URL(url, process.env.NEXT_PUBLIC_SERVER_URL)
    const response = await fetch(parsedUrl.toString())
    console.log(parsedUrl.toString());
    if (!response.ok) {
      throw new Error(`Failed to fetch data from ${url}`)
    }
    return await response.json()
  } catch (error) {
    console.error(error)
    throw error
  }
}
  