export interface Photo {
  id: string;
  url: string;       // путь к изображению (например, /images/photo1.jpg)
  description?: string;
}

export interface Memory {
  id: string;      // дата события (например, "14 февраля 2023")
  title: string;
  description: string;
  photoUrl?: string;
}

export interface Story {
  title: string;
  content: string[]; // массив абзацев
  photos: Photo[];   // фотографии для вставки в текст
}