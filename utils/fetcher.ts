/**
 * @description
 * useSWR のパラメータなどで使用する。
 * @param {string} [url] API URL
 * @returns {Promise<T>} API レスポンス
 */
export const fetcher = async <T>(url: string): Promise<T> => {
  try {
      const response = await fetch(url);
      return (await response.json()) 
  } catch (error) {
    console.error(error)
    throw error
  }
}
  