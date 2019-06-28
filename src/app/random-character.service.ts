import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomCharacterService {

  characters: string[] = ['Азир', 'Акали', 'Алистар', 'Амуму', 'Анивия', 'Ари',
   'Атрокс', 'Аурелион Сол', 'Бард', 'Блицкранк', 'Браум', 'Брэнд', 'Вай',
  'Варвик', 'Варус', 'Вейгар', 'Вейн', "Вел'Коз", 'Виктор', 'Владимир', 'Волибир',
   'Вуконг', 'Галио', 'Гангпланк', 'Гарен', 'Гекарим', 'Гнар',
  'Грагас', 'Грейвз', 'Дариус', 'Джакс', 'Джарван IV', 'Джейс', 'Джин', 
  'Джинкс', 'Диана', 'Доктор Мундо', 'Дрейвен', 'Жанна',
  'Зайра', 'Зак', 'Зед', 'Зерат', 'Зиггс', 'Зилеан', 'Зои', 
  'Иверн', 'Иллаой', 'Ирелия', 'Йорик', "Ка'Зикс",
  'Каин', "Кай'са", 'Калиста', 'Камилла', 'Карма', 
  'Картус', 'Кассадин', 'Кассиопея', 'Катарина', 'Кейл', 'Кейтлин',
  'Кеннен', 'Киана', 'Киндред', 'Клед', "Ког'Мао", 
  'Корки', 'Ксин Жао', 'Ле Блан', 'Леона', 'Ли Син', 'Лиссандра', 'Лулу', 'Люкс',
  'Люциан', 'Мальзахар', 'Мальфит', 'Маокай', 'Мастер Йи', 'Мисс Фортуна', 'Моргана', 
  'Мордекайзер', 'Нами', 'Насус', 'Наутилус', 'Нидали',
  'Нико', 'Ноктюрн', 'Нуну и Виллумп', 'Олаф', 'Орианна', 'Орн', 
  'Пайк', 'Пантеон', 'Поппи', 'Райз', 'Рамбл', 'Раммус',
  "Рек'Сай", 'Ренгар', 'Ренектон', 'Ривен', 'Рэйкан', 
  'Сайлас', 'Свейн', 'Седжуани', 'Сивир', 'Синджед', 'Синдра', 'Сион',
  'Скарнер', 'Сона', 'Сорака', 'Таам Кенч', 'Талия', 'Талон', 'Тарик',
  'Твистед Фэйт', 'Твич', 'Тимо', 'Трандл', 'Треш', 'Триндамир', 'Тристана',
  'Удир', 'Ургот', 'Фиддлстикс', 'Физз', 'Фиора', 'Хеймердингер', "Чо'Гат",
  'Шако', 'Шая', 'Шен', 'Шивана', 'Эвелинн', 'Эзреаль', 'Экко',
  'Элиза', 'Энни', 'Эш', 'Юми', 'Ясуо'];

  getRandomCharacter(): string{
    return this.characters[this.getRandomInt(this.characters.length)]
  }

  getRandomInt(max: number): number {
    return Math.floor(Math.random() * Math.floor(max));
  }
  
  constructor() { }


}
