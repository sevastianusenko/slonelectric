# Семантическое ядро: как нас найдут

Данные DataForSEO, 2026-09-21. Измерено на двух уровнях: округ Ланкастер
(`9059165`) и США (`2840`). Таблица целиком — [data/keyword-core.csv](data/keyword-core.csv).

Колонки везде: **Lanc** — запросов в месяц в округе Ланкастер, **США** — по
стране, **CPC** — цена клика в рекламе (прокси ценности заявки).

---

## Часть 1. Три канала, по которым нас найдут

### Канал 1 — локальная выдача Google (карточка). Основной

Сюда идёт весь объём «near me». Ранжирование определяется карточкой Google
Business Profile: близость, категории, отзывы, заполненность. **Текст сайта
влияет слабо.**

| Запрос | Lanc | США | CPC |
|---|---|---|---|
| emergency electrician near me | **50** | 12 100 | **$46.81** |
| generator repair near me | 20 | 12 100 | $12.83 |
| commercial electrician near me | 10 | 5 400 | $16.11 |
| generator installation near me | 10 | 5 400 | $14.59 |
| ev charger installer near me | 10 | 4 400 | $15.65 |
| electrical panel upgrade near me | 10 | 3 600 | $12.17 |
| 24 hour electrician near me | 10 | 1 900 | $38.35 |
| generac installer near me | 10 | 1 900 | $11.22 |
| outdoor lighting contractor near me | 10 | 1 900 | $13.04 |
| commercial electrical contractor near me | 10 | 1 300 | $12.32 |
| electrical panel replacement near me | 10 | 1 000 | $14.26 |
| commercial electrical company near me | 10 | 1 000 | $11.62 |
| industrial electrician near me | 10 | 720 | $10.27 |
| same day electrician near me | 10 | 590 | $46.17 |
| 24 7 electrician near me | 10 | 590 | $40.71 |
| emergency electrical service near me | 10 | 590 | $31.25 |
| standby generator installation near me | 10 | 590 | $12.76 |
| after hours electrician near me | 10 | 170 | $39.96 |
| electrician open now | 10 | 210 | $38.08 |

**Вывод по каналу:** аварийный кластер — и самый объёмный локально (50), и
самый дорогой ($31–47 за клик). Это цель номер один.

### Канал 2 — гео-запросы. Органика сайта

Здесь текст страницы решает. Это то, подо что делаются городские страницы.

| Запрос | Lanc | США | CPC |
|---|---|---|---|
| electrician lancaster pa | **110** | 170 | $20.29 |
| electricians in lancaster pa | **110** | 170 | $20.29 |
| electrical contractor lancaster pa | 50 | 70 | — |
| electrical contractors lancaster pa | 50 | 70 | — |
| electrician ephrata pa | 40 | 50 | $15.85 |
| electrician lititz pa | 30 | 40 | $25.70 |
| electrician york pa | 10 | 480 | $26.38 |
| electrician reading pa | 10 | 140 | $13.19 |
| electrician lebanon pa | 10 | 110 | $21.58 |
| electrician harrisburg pa | 10 | 110 | $17.48 |
| electrical contractor york pa | 10 | 70 | $20.55 |
| commercial electrician lancaster pa | 10 | 30 | — |

Напоминание: `industrial electrician lancaster pa` — **0**. Городские страницы
имеет смысл делать под общий термин «electrician/electrical contractor + город»,
а не под «industrial + город».

### Канал 3 — тематические запросы без гео. Органика услуг

| Запрос | Lanc | США | CPC |
|---|---|---|---|
| commercial electrician | **30** | 14 800 | $18.08 |
| commercial electrical services | 10 | 1 900 | $16.15 |
| 200 amp service upgrade | 10 | 390 | $16.30 |
| commercial ev charger installation | 10 | 390 | $15.68 |
| automatic transfer switch installation | 10 | 320 | $0.23 |
| level 2 charger installation near me | 10 | 320 | $9.70 |
| commercial generator installation | 10 | 170 | $5.42 |
| parking lot lighting installation | 10 | 140 | $7.06 |
| emergency commercial electrician | 10 | 140 | $16.92 |
| industrial control panel manufacturers | 10 | 90 | $7.08 |
| 400 amp service upgrade | 10 | 90 | — |
| plc programming near me | 10 | 50 | $12.49 |
| vfd repair near me | 10 | 50 | $10.74 |
| restaurant electrician | 10 | 30 | $16.76 |

---

## Часть 2. Ядро по страницам

Порядок — по приоритету. Приоритет = локальный объём × CPC.

### Приоритет 1. Аварийная служба 24/7

Самый объёмный локально и самый дорогой кластер.

- **Основной:** emergency electrician near me — 50 / 12 100 / $46.81
- 24 hour electrician near me — 10 / 1 900 / $38.35
- same day electrician near me — 10 / 590 / $46.17
- 24 7 electrician near me — 10 / 590 / $40.71
- emergency electrical service near me — 10 / 590 / $31.25
- electrician open now — 10 / 210 / $38.08
- after hours electrician near me — 10 / 170 / $39.96
- emergency commercial electrician — 10 / 140 / $16.92
- power outage electrician — 0 / 30

### Приоритет 1. Ланкастер (город)

- **Основной:** electrician lancaster pa — 110 / 170 / $20.29
- electricians in lancaster pa — 110 / 170
- electrical contractor lancaster pa — 50 / 70
- electrical contractors lancaster pa — 50 / 70
- commercial electrician lancaster pa — 10 / 30

### Приоритет 2. Коммерческая электрика

- **Основной:** commercial electrician — 30 / 14 800 / $18.08
- commercial electrician near me — 10 / 5 400 / $16.11
- commercial electrical services — 10 / 1 900 / $16.15
- commercial electrical contractor near me — 10 / 1 300 / $12.32
- commercial electrical company near me — 10 / 1 000 / $11.62
- restaurant electrician — 10 / 30 / $16.76
- office electrician — 0 / 50 / $4.31
- commercial electrical repair near me — 0 / 20 / $6.60

### Приоритет 2. Генераторы

- **Основной:** generator repair near me — 20 / 12 100 / $12.83
- generator installation near me — 10 / 5 400 / $14.59
- generator installer near me — 10 / 5 400 / $14.59
- generac installer near me — 10 / 1 900 / $11.22
- standby generator installation near me — 10 / 590 / $12.76
- backup generator installation near me — 10 / 590 / $12.76
- automatic transfer switch installation — 10 / 320 / $0.23
- commercial generator installation — 10 / 170 / $5.42

### Приоритет 2. Ввод и щиты

- **Основной:** electrical panel upgrade near me — 10 / 3 600 / $12.17
- electrical panel replacement near me — 10 / 1 000 / $14.26
- 200 amp service upgrade — 10 / 390 / $16.30
- 400 amp service upgrade — 10 / 90
- electrical service upgrade near me — 0 / 210

### Приоритет 3. Зарядки для электромобилей

- **Основной:** ev charger installer near me — 10 / 4 400 / $15.65
- ev charger installation near me — 10 / 4 400 / $15.65
- commercial ev charger installation — 10 / 390 / $15.68
- level 2 charger installation near me — 10 / 320 / $9.70
- ev charging station installation companies — 10 / 90 / **$31.62**

### Приоритет 3. Промышленная электрика

Объём низкий, но посмотри на CPC у ремонта.

- **Основной:** industrial electrician near me — 10 / 720 / $10.27
- industrial electrical repair — 0 / 30 / **$92.15**
- industrial electrical contractor near me — 0 / 70 / $6.90
- industrial electrical services near me — 0 / 50 / $4.02
- plant electrician — 0 / 90
- manufacturing electrician — 0 / 50
- factory electrician — 0 / 20

### Приоритет 3. Освещение

- outdoor lighting contractor near me — 10 / 1 900 / $13.04
- parking lot lighting installation — 10 / 140 / $7.06
- warehouse lighting installation — 0 / 110 / $18.65
- commercial lighting installation near me — 0 / 30 / **$55.70**
- led retrofit companies — 0 / 50 / $13.63

### Приоритет 4. Щиты управления и КИП

- industrial control panel manufacturers — 10 / 90 / $7.08
- plc programming near me — 10 / 50 / $12.49
- vfd repair near me — 10 / 50 / $10.74
- control panel builder near me — 0 / 30 / $3.90

### Приоритет 4. Обслуживание и испытания

Объёма почти нет, но CPC говорит, что заявка дорогая.

- arc flash study companies — 0 / 50 / **$78.28**
- arc flash analysis services — 0 / 50
- electrical preventive maintenance services — 0 / 70
- electrical testing services near me — 0 / 10

### Города второго ряда

Отдельная страница на каждый, только эти шесть:

- electrician york pa — 10 / 480 / $26.38
- electrician reading pa — 10 / 140 / $13.19
- electrician lebanon pa — 10 / 110 / $21.58
- electrician harrisburg pa — 10 / 110 / $17.48
- electrician ephrata pa — 40 / 50 / $15.85
- electrician lititz pa — 30 / 40 / $25.70

---

## Часть 3. Где данных нет — гипотезы

Запросы с нулём в обеих колонках. Делать под них страницы **только** если есть
причина помимо трафика.

### Агро — ноль везде, подтверждено дважды

| Запрос | Lanc | США |
|---|---|---|
| agricultural electrician near me | 0 | 20 |
| farm electrician near me | 0 | 10 |
| agricultural electrical services | 0 | 10 |
| barn electrician near me | 0 | 0 |
| poultry house electrician near me | 0 | 0 |
| dairy farm electrician near me | 0 | 0 |
| stray voltage testing near me | 0 | 0 |
| farm electrical services near me | 0 | 0 |

**Гипотеза, почему так.** Фермер не формулирует задачу как «найти электрика».
Он звонит дилеру, который поставил вентиляцию, или соседу. Поиск включается
только когда всё горит — и тогда он ищет `emergency electrician near me`,
тем же запросом, что и все остальные.

**Что из этого следует для ключей.** Агро-страница ловит не поиск, а доверие
тех, кто пришёл по рекомендации. Единственная агро-тема с реальным поисковым
объёмом — информационная:

| Запрос | США | CPC |
|---|---|---|
| stray voltage | 1 000 | — |
| stray voltage cows | 170 | — |
| agricultural electrician | 140 | $8.06 |
| barn electrical | 110 | $4.64 |
| stray voltage testing | 70 | $9.43 |
| poultry house ventilation | 40 | $7.83 |

Под это — один большой разбор блуждающих токов на молочной ферме. Это
единственный агро-материал, который может собирать трафик.

### Термины, которые кажутся очевидными, но их не ищут

| Запрос | Lanc | США |
|---|---|---|
| three phase electrician near me | 0 | 0 |
| 480v electrician | 0 | 0 |
| machine wiring contractor | 0 | 0 |
| three phase service upgrade | 0 | 0 |
| commercial panel upgrade | 0 | 0 |
| high bay led lighting installation | 0 | 0 |
| led lighting contractor near me | 0 | 0 |
| motor control center services | 0 | 0 |
| control panel wiring services | 0 | 0 |
| infrared inspection electrical near me | 0 | 0 |
| thermal imaging electrical inspection near me | 0 | 0 |
| electrical safety inspection commercial | 0 | 0 |
| fleet ev charging installation | 0 | 0 |

**Гипотеза.** Это профессиональный жаргон. Начальник производства, которому
нужно подключить станок, не гуглит «machine wiring contractor» — он звонит
тому, кто уже работал на заводе, либо ищет `industrial electrician near me`.
Профессиональная лексика нужна **в тексте страниц** как доказательство
компетентности, но не как цель ранжирования.

### Как страховаться от ошибки в этих гипотезах

Объёмы Google Ads округлены и группируются: «0» иногда означает «меньше порога»,
а не «никогда». Поэтому:

1. Профжаргон уходит **внутрь** страниц услуг, а не в отдельные страницы
2. После запуска смотрим Google Search Console — она покажет реальные запросы,
   включая те, которых нет ни в одном инструменте
3. Через 3 месяца пересобираем ядро по фактическим данным GSC

---

## Что делать в первую очередь

1. **Google Business Profile** — туда идёт весь «near me», включая самый
   дорогой аварийный кластер
2. **Страница аварийной службы 24/7** — 50 запросов локально, CPC до $47
3. **Страница «Lancaster»** — 110 локальных запросов, самый объёмный гео
4. **Коммерческая электрика** — 30 локально, $18 за клик
5. **Генераторы** — 20 локально, и это же вход в агро через резервное питание
6. Дальше по списку приоритетов выше
