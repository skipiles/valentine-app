import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Photo } from '../types';

interface PhotosState {
  list: Photo[];
  page: number;
  perPage: number;
}

const initialState: PhotosState = {
  list: [
    // ВРЕМЕННЫЕ ДАННЫЕ ДЛЯ ПРИМЕРА
    { id: '1', url: '/images/neboskreb1.jpg', description: 'Вау мы тут...' },
    { id: '2', url: '/images/neboskreb2.jpg', description: 'Вова посмотри засняла' },
     { id: '3', url: '/images/polet1.jpg', description: 'Из Москвы...' },
      { id: '4', url: '/images/pirozhok.jpg', description: 'Перекус, уезд' },
       { id: '5', url: '/images/ng1.jpg', description: 'Вова посмотри вайб' },
        { id: '6', url: '/images/patriki.jpg', description: 'А сколько вы зарабатываете?' },
         { id: '7', url: '/images/ng2.jpg', description: 'лучшее рабочее место' },
          { id: '8', url: '/images/metro.jpg', description: 'Идет' },
           { id: '9', url: '/images/aeroport.jpg', description: 'Как же дорого кушать картошку' },
            { id: '10', url: '/images/sad.jpg', description: 'Растени' },
             { id: '11', url: '/images/polet2.jpg', description: 'Туда' },
              { id: '12', url: '/images/polet3.jpg', description: 'Обратно' },
               { id: '13', url: '/images/polet4.jpg', description: 'Обратно' },
                { id: '14', url: '/images/polet5.jpg', description: 'Туда' },
                { id: '15', url: '/images/nutel.jpg', description: 'дитеныш нутела' },
                { id: '16', url: '/images/chpit.jpg', description: 'чпит' },
                 { id: '17', url: '/images/kusochki.jpg', description: 'кусочки' },
                  { id: '18', url: '/images/kreslo.jpg', description: 'угар на кресле' },
                  { id: '19', url: '/images/nefori.jpg', description: 'нефоры' },
                  { id: '20', url: '/images/cem.jpg', description: 'цем' },
    // ... добавьте ещёЫ
  ],
  page: 1,
  perPage: 8,
};

const photosSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    // можно добавить загрузку новых фото
  },
});

export const { setPage } = photosSlice.actions;
export default photosSlice.reducer;