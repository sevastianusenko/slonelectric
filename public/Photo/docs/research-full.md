# Масштабное исследование: рынок и семантика

DataForSEO, 2026-09-21. Потрачено **$11.6** из $25.66.

## Объём проделанного

| Этап | Результат |
|---|---|
| Дискавери по 57 сидам, 2 эндпоинта | **31 099** уникальных запросов |
| Чистка от работы, DIY, товаров, чужих городов | 17 311 осталось |
| Обогащение объёмами **округа Ланкастер** | 6 642 с локальным объёмом |
| Схлопывание вариантов Google | **4 783** реально разных запроса |
| Интент + сложность (KD) | 2 000 обработано |
| Финальный отбор по коммерческому интенту | **593 сервисных + 144 информационных** |
| Гео-матрица 55 городов × 10 шаблонов | 550 комбинаций, 136 с объёмом |
| Конкуренты | 11 доменов, 661 их ключ |

Данные: [keywords-service.csv](data/keywords-service.csv) ·
[keywords-informational.csv](data/keywords-informational.csv) ·
[keywords-geo-matrix.csv](data/keywords-geo-matrix.csv)

---

## Поправка к прошлому исследованию

В первом проходе я мерил `electrician near me` только по США и записал локальный
объём как «10». **Это была ошибка масштаба выборки.**

Реально: **`electrician near me` — 720 запросов в месяц в округе Ланкастер.**
Это самый объёмный локальный запрос, с отрывом в 6 раз от следующего.

Остальные поправки того же рода:

| Запрос | Было (оценка) | Стало (измерено) |
|---|---|---|
| electrician near me | 10 | **720** |
| electrical company near me | не мерил | **110** |
| electrical contractor near me | не мерил | **110** |
| contractor electrical | не мерил | **110** |
| electrical company | не мерил | 70 |
| electrical services | не мерил | 40 |

---

## Топ возможностей по скорингу

Скоринг = локальный объём × CPC ÷ (сложность + 10). Учитывает и спрос, и
деньги, и реальность попадания в топ.

| Скор | Ланк | США | CPC | KD | Запрос |
|---|---|---|---|---|---|
| 408 | **720** | 368 000 | $23.25 | 31 | electrician near me |
| **234** | 50 | 12 100 | **$46.81** | **0** | emergency electrician near me |
| 114 | 110 | 40 500 | $10.36 | **0** | contractor electrical |
| 90 | 10 | 480 | **$89.47** | **0** | low voltage wiring installation |
| 76 | 110 | 49 500 | $19.28 | 18 | electrical company near me |
| 71 | 10 | 1 000 | **$70.92** | **0** | electrical installation service near me |
| 58 | 110 | 33 100 | $11.11 | 11 | electrical contractor near me |
| 54 | 30 | 14 800 | $18.08 | **0** | electrician commercial |
| 53 | 20 | 1 900 | $26.29 | **0** | electrical service repair |
| 52 | 10 | 720 | $51.55 | **0** | same day electrician |
| 51 | 30 | 9 900 | $21.90 | 3 | electrical services near me |
| 47 | 10 | 210 | $47.10 | **0** | emergency electrical contractor |
| 47 | 10 | 590 | **$61.00** | 3 | ev charger installation service |
| 46 | 10 | 590 | $46.17 | **0** | same day electrician near me |
| 46 | 10 | 2 400 | $45.73 | **0** | 24-hour electrician |
| 41 | 10 | 260 | $41.26 | **0** | emergency electrician 24/7 |
| 40 | 40 | 22 200 | $25.84 | 16 | electrical services |
| 39 | 10 | 390 | $39.27 | **0** | commercial electrical installation |
| 38 | 10 | 1 900 | $38.35 | **0** | 24 hour electrician near me |

**Главный вывод:** `emergency electrician near me` — сложность **0** при CPC
$46.81 и 50 локальных запросах. Таких сочетаний в нормальных нишах не бывает.
Весь аварийный кластер имеет KD 0–3 при CPC $32–52.

---

## Неожиданная находка: пожарная сигнализация

Кластера не было в плане, он вылез из данных. Все со сложностью **0**:

| Запрос | Ланк | США | CPC |
|---|---|---|---|
| fire alarm control panel maintenance | 10 | 260 | $34.78 |
| central fire alarm system | 10 | 390 | $33.88 |
| business fire alarm system | 10 | 590 | $33.22 |
| monitor fire alarm system | 10 | 2 900 | $32.11 |

Плюс низковольтка: `low voltage wiring installation` — CPC **$89.47** при KD 0.
Это самый дорогой клик во всём массиве.

Если клиент делает слаботочку и пожарку — это отдельная страница с почти
нулевой конкуренцией и очень дорогим трафиком.

---

## Кластеры: сервисные запросы

| Кластер | Локальный объём | Ключей | Лучший запрос |
|---|---|---|---|
| Общие (electrician / contractor) | 1 560 | 71 | electrician near me |
| Генераторы | 750 | 68 | installing a standby generator |
| **Слаботочка и пожарка** | 660 | 66 | low voltage wiring installation |
| Управление и КИП | 470 | 45 | fire alarm control panel maintenance |
| Ввод и щиты | 420 | 42 | circuit breaker panel upgrade |
| Испытания и безопасность | 370 | 37 | arc flash assessment |
| Распределение мощности | 260 | 26 | switchgear manufacturer |
| EV-зарядки | 180 | 17 | ev charger installation service |
| Коммерция | 160 | 14 | electrician commercial |
| Освещение | 160 | 16 | parking lot light pole |
| Аварийка | 150 | 11 | emergency electrician near me |
| Промышленность | 100 | 10 | commercial industrial electrician |

---

## Гео: полная матрица

Проверено 55 городов × 10 шаблонов. Объём есть у 136 комбинаций.

### Города по суммарному локальному объёму

| Город | Округ | Локально | США |
|---|---|---|---|
| **Lancaster** | Lancaster | **380** | 720 |
| Ephrata | Lancaster | 80 | 100 |
| Harrisburg | Dauphin | 70 | 550 |
| York | York | 60 | 1 600 |
| Lititz | Lancaster | 60 | 80 |
| Baltimore | MD | 50 | 2 870 |
| Allentown | Lehigh | 50 | 1 890 |
| West Chester | Chester | 50 | 1 190 |
| Lebanon | Lebanon | 50 | 450 |
| Reading | Berks | 50 | 390 |
| Philadelphia | — | 30 | 4 440 |
| Hanover, Mechanicsburg, Chambersburg, Pottstown, Downingtown, Carlisle, Elizabethtown, Palmyra, Coatesville, Oxford, Hershey, Camp Hill | разные | по 30 | — |

### Лучшие гео-запросы

| Запрос | Ланк | США | CPC |
|---|---|---|---|
| electrician lancaster pa | **110** | 170 | $20.29 |
| electricians in lancaster pa | **110** | 170 | $20.29 |
| **electrician lancaster** (без PA) | 50 | 210 | **$35.87** |
| electrical contractor lancaster pa | 50 | 70 | — |
| electrician ephrata pa | 40 | 50 | $15.85 |
| electrician lititz pa | 30 | 40 | $25.70 |

Заметь: `electrician lancaster` без «pa» дороже по клику ($35.87 против $20.29).
Раньше я его не мерил.

### ⚠ Ловушка тёзок

В округе Ланкастер есть городки, чьи имена совпадают с крупными городами в
других штатах. Голый запрос без «pa» ведёт не туда:

| Запрос | США | На самом деле это |
|---|---|---|
| electrician denver | 1 600 | Денвер, Колорадо |
| electrician columbia | 720 | Колумбия, Южная Каролина / Миссури |
| electrician akron | 390 | Акрон, Огайо |
| electrician lebanon | 210 | Ливан, Теннесси / Огайо |

Для этих городков использовать **только** формы с «pa». Для Ланкастера —
можно обе, там Ланкастер в Пенсильвании доминирует.

---

## Конкуренты: полная картина

Проверены все 11 местных игроков.

| Домен | Оценка трафика | Ключей в топ-30 |
|---|---|---|
| **houcks.com** | **950** | 275 |
| aandmelectricllc.com | 199 | 47 |
| iddingselectric.com | 126 | 167 |
| dsburkholder.com | 96 | 70 |
| rsmartinelectricians.com | 46 | 76 |
| stardustelectric.com | 17 | 5 |
| johnefullerton.com | 15 | 15 |
| kilgoreelectric.com | 12 | 29 |
| penelectricpa.com | 8 | 2 |
| freedomslightelectrical.com | 1 | 2 |
| jmarkelectric.com | 0 | 0 |

**Что это значит:**

1. **Houck — единственный настоящий игрок.** 950 оценочного трафика против
   199 у следующего. Остальные не конкурируют, а присутствуют.

2. **Все четыре агро-специалиста практически невидимы.** Star Dust — 5 ключей,
   Freedom's Light — 2, PEN Electric — 2, J Mark — 0. Те, кто реально умеет
   работать с фермами, в поиске не существуют.

3. **Никто не держит первую страницу по своим темам.** Позиции конкурентов по
   значимым запросам: `electric contractors near me` — 13-я, `electricians york
   pa` — 19-я, `lighting lancaster` — 27-я. Единственная позиция в топ-3 у всех
   одиннадцати вместе — `residential electrician near me for small jobs`, 2-е
   место у Burkholder.

4. **A&M Electric даёт 199 трафика с 47 ключей** — это почти весь брендовый
   трафик по собственному названию, а не результат SEO.

---

## Информационные запросы — под блог

| Запрос | Ланк | США | KD |
|---|---|---|---|
| arc flash | 30 | 18 100 | 22 |
| nfpa 70e | 20 | 14 800 | 18 |
| electrician emergency | 20 | 12 100 | **0** |
| electrical repair | 30 | 9 900 | 5 |
| three phase electric power | 10 | 9 900 | 12 |
| single phase vs three phase | — | 5 400 | — |
| electrical distribution | 10 | 8 100 | 19 |
| circuit breaker distribution panel | 10 | 8 100 | **0** |
| electrical surge protection | 10 | 6 600 | 13 |
| led lighting high bay | 10 | 6 600 | **0** |
| variable frequency drive | 10 | 5 400 | 22 |
| what is arc flash | 10 | 5 400 | 14 |
| arc flash ppe | 10 | 5 400 | **0** |
| electrical inspection | 10 | 4 400 | **0** |
| what is variable frequency drive | 10 | 3 600 | 13 |
| stray voltage | — | 1 000 | — |
| pole barn lighting | — | 320 | — |
| outlet fire / causes of electrical fire | — | 320 / 260 | — |

Конкурент RS Martin уже собирает позиции на статьях про электропожары
(`how does an electrical fire start` — 24-я, `what causes electrical fires` —
21-я). Тема работает, но занята слабо.

---

## Итоговый приоритет

1. **Карточка Google Business Profile.** `electrician near me` — 720 запросов
   в месяц локально. Решается карточкой, не сайтом.
2. **Аварийная страница.** KD 0 при CPC $46.81 — лучшее соотношение в массиве.
3. **Страница Lancaster.** 110 + 110 + 50 по разным формулировкам.
4. **Общая страница услуг** под `electrical contractor near me` / `electrical
   company near me` — по 110 локально, KD 11–18.
5. **Слаботочка и пожарная сигнализация.** KD 0, CPC до $89. Проверить у
   клиента, делает ли он это.
6. **Коммерческая электрика.** `electrician commercial` — KD 0, CPC $18.08.
7. Дальше — генераторы, EV, щиты, испытания.

---

## Методические заметки

- **Лимит 12 запросов в минуту** на аккаунт. Превышение возвращает ошибку
  40202, деньги не списываются, но батч теряется. Пауза 6 секунд между
  запросами обязательна.
- **Google группирует варианты.** 15 формулировок `transfer switch generator`
  показывают один и тот же объём 33 100 — это один запрос. Без схлопывания
  ядро раздувается втрое.
- **Меряй локально, а не по стране.** Разница между «10» по США и «720» в
  округе — это разница между «не делать» и «делать в первую очередь».
- **Интент решает.** Из 2 000 запросов с объёмом только 1 307 оказались
  коммерческими; 328 информационных и 365 навигационных пришлось развести
  по разным задачам.
