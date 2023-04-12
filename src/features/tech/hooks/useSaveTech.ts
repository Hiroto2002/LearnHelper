import useSWR from 'swr';
import { Tech } from '../types/tech';
import axios from 'axios';

 const saveTech = async (params: Tech) => {
    const response = await axios.post<Tech>('/api/tech/generate', params).catch((error) => {
      console.error(error);
      return null;
    });
    return response?.data; // 保存された投稿のデータを返す
};

export const useSaveTech = () => {
  //   const { mutate, ...rest } = useSWR<Tech | undefined>(() => null); // 保存された投稿のデータをキャッシュする

  const save = async (params: Tech) => {
    await saveTech(params);
    // await mutate(rest.data, false); // APIリクエストをトリガーする
  };

  return {
    save,
    // ...rest, // isLoading, isError, data, errorなどの状態変数を含むオブジェクト
  };
};
