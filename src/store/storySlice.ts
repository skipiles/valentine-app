import { createSlice } from '@reduxjs/toolkit';
import type { Story } from '../types';

const initialState: Story = {
  title: 'Как мы познакомились',
  content: [
    'Это был обычный день Вовы и Алены, им не хватало общения.',
    'Я искал с кем пообщаться и увидел запись от одной девушки в одном из иркустких пабликов,',
    // ... добавьте свой рассказ
  ],
  photos: [
    { id: 'story1', url: '/images/korona.jpg', description: 'Одна из первых прогулок, бегали от ппс' },
    { id: 'story2', url: '/images/melki.jpg', description: 'melkki' },
    { id: 'story3', url: '/images/lezhim.jpg', description: 'melkki' },
    { id: 'story4', url: '/images/rofl.jpg', description: 'melkki' },
  ],
  
};

const storySlice = createSlice({
  name: 'story',
  initialState,
  reducers: {},
});

export default storySlice.reducer;