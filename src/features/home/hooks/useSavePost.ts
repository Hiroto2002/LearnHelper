import useSWR from 'swr';
import { Post } from '../types/Post';
import axios from 'axios';

 const savePost = async (params: Post) => {
    const response = await axios.post<Post>('/api/post/generate', params).catch((error) => {
      console.error(error);
      return null;
    });
    return response?.data; // 保存された投稿のデータを返す
};

export const useSavePost = () => {
  //   const { mutate, ...rest } = useSWR<Post | undefined>(() => null); // 保存された投稿のデータをキャッシュする

  const save = async (params: Post) => {
    await savePost(params);
    // await mutate(rest.data, false); // APIリクエストをトリガーする
  };

  return {
    save,
    // ...rest, // isLoading, isError, data, errorなどの状態変数を含むオブジェクト
  };
};
