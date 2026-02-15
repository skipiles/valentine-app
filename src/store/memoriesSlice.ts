import { createSlice } from '@reduxjs/toolkit';
import type { Memory } from '../types';

const initialState: Memory[] = [
  {
    id: '1',
    title: 'Планетариум',
    description: 'В тот день она заснула прямо во время сеанса, утомительный ваш этот космос',
    photoUrl: '/images/kosmos.jpg',
  },
  {
    id: '2',
    title: 'Колесо обозрения',
    description: 'В тот день мы гуляли с Дашей и Серегой, высота снова повод для нее порадоваться(бесстрашная)',
    photoUrl: '/images/koleso.jpg',
  },
   {
    id: '3',
    title: 'Поход в кусочки',
    description: 'В тот день мы пошли в кусочки, популярное место(из шортсов!)',
    photoUrl: '/images/kusochki2.jpg',
  },
  {
    id: '4',
    title: 'Полет...',
    description: 'В тот день мы летели, устали и хотели спать',
    photoUrl: '/images/leteli.jpg',
  },
   {
    id: '5',
    title: 'Отбеливаем',
    description: 'В тот день мы бьюти отбеливаем зубки',
    photoUrl: '/images/zubi.jpg',
  },
   {
    id: '6',
    title: 'Улетаем',
    description: 'В тот день мы улетали из Москвы домой',
    photoUrl: '/images/domoi.jpg',
  },
  {
    id: '7',
    title: 'Майк вазовски',
    description: 'В тот день Алена нарисовала майк вазовски',
    photoUrl: '/images/vazovski.jpg',
  },
  {
    id: '8',
    title: 'Перед аэропортом',
    description: 'В тот день любимок впервые оставили одних и они как взрослые полетели',
    photoUrl: '/images/pered.jpg',
  },
  // ... остальные
];

const memoriesSlice = createSlice({
  name: 'memories',
  initialState,
  reducers: {},
});

export default memoriesSlice.reducer;