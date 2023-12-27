import { useState } from 'react';
import axios from 'axios';
import { Todo } from '@prisma/client';

export const useTodo = () => {
  /**
   * startを更新する
   * @param id
   * @returns
   */
  const setStartTime = async (id:number) => {
    try {
      const now = new Date()
      const response = await axios.put<Todo>('/api/todo/start', {id, now });
      return response.data;
    } catch (error) {
      console.error('Error updating todo', error);
    }
  };

  /**
   * endを更新する(flgをtrueにする処理も兼ねる)
   */
    const setEndTime = async (id:number) => {
        try {
            const now = new Date()
            const response = await axios.put<Todo>('/api/todo/end', {id, now });
            return response.data;
        } catch (error) {
            console.error('Error updating todo', error);
        }
    };

  return { setStartTime,setEndTime };
};
