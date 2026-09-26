# Структура сайта

Составлено 22.09.2026 на данных из [keyword-findings.md](keyword-findings.md),
[keywords-for-pages.md](keywords-for-pages.md) и [serp-analysis.md](serp-analysis.md).
Все объёмы — DataForSEO 21.09.2026. **Ланк** = запросов/мес по округу Ланкастер,
**США** = по стране.

Дизайн и анимации — из `DESIGN.md`, они не меняются. Новые секции собираются
из тех же компонентов: контурный заголовок-призрак, рисующиеся сетки,
смещённые плиты под фото, оранжевые карточки, слеш-маркеры, скролл-ревилы.

---

## Что диктует структуру

Четыре факта из исследования, из которых вытекает всё остальное.

**1. Карточка Google важнее сайта.** Локальный блок показывается в 24 запросах
из 25. Три карточки стоят выше любой органики. Сайт без заполненной карточки
просто не увидят. Это не задача сайта, но это приоритет номер один.

**2. «Near me» бьёт городские страницы на порядки.** `electrician near me` —
720/мес по округу, `electrician lancaster pa` — 110. Эти запросы решает
карточка, а не текст страницы. Значит, городских страниц нужно мало и только
там, где мы реально близко.

**3. Агро не даёт трафика.** Проверено: `poultry house wiring`, `dairy barn
wiring`, `grain bin wiring`, `farm electrical contractor` — ноль по США.
Фермеры не ищут электрика в Google. **Но клиент хочет показать агро, и это
правильно** — агро работает на доверие и конверсию, а не на трафик. Значит:
одна мощная страница и доказательства в проектах, а не десять тонких страниц
под нулевые запросы.

**4. Объём маленький, заявка дорогая.** `commercial electrician` в Ланкастере —
30 запросов в месяц при CPC $118,65. Задача не собрать трафик, а быть найденным
теми тридцатью и не потерять их на сайте. Отсюда вес конверсионных элементов:
телефон, аварийка, доказательства, FAQ.

---

## Две оси, а не одна

Клиент хочет, чтобы сайт показывал три рынка. Данные требуют страниц под типы
работ. Это не конфликт — это две оси навигации.

- **Рынки** — кто мы и для кого: агро, коммерция, промышленность.
  Несут позиционирование, работают на доверие.
- **Услуги** — что делаем: аварийка, генераторы, вводы, освещение, EV,
  щиты управления, обслуживание, слаботочка. Несут ключи и трафик.

Каждая страница рынка ссылается на релевантные ей услуги. На каждой странице
услуги — блок «как это выглядит на ферме / в цеху / в здании». Перелинковка
между осями обязательна, иначе сайт распадётся на два несвязанных дерева.

---

## Карта

```
/                                      главная
├── /agricultural-electrical-services  рынок: агро
├── /commercial-electrical-services    рынок: коммерция
├── /industrial-electrical-services    рынок: промышленность
│
├── /emergency-electrician             услуга — ПРИОРИТЕТ №1
├── /standby-generator-installation    услуга
├── /electrical-service-upgrades       услуга
├── /commercial-led-lighting           услуга
├── /low-voltage-structured-wiring     услуга — новая, см. ниже
├── /ev-charging-installation          услуга
├── /control-panels-machine-wiring     услуга
├── /electrical-preventive-maintenance услуга
│
├── /projects                          проекты (список)
│   └── /projects/{slug}               кейс
│
├── /service-area                      зона обслуживания (хаб)
│   ├── /service-area/lebanon-county
│   │   ├── /lebanon        /annville      /palmyra
│   │   └── /richland       /schaefferstown /jonestown
│   ├── /service-area/lancaster-county
│   │   ├── /ephrata        /denver        /lititz    /manheim
│   │   └── /new-holland    /lancaster     /elizabethtown
│   ├── /service-area/berks-county
│   ├── /service-area/dauphin-county
│   ├── /service-area/schuylkill-county
│   ├── /service-area/york-county
│   ├── /service-area/cumberland-county
│   └── /service-area/chester-county
│
├── /about
├── /contact
├── /blog + /blog/{slug}
│
├── /privacy                          политика приватности
├── /terms                            условия использования сайта
├── /sitemap.xml                      генерируется из реестров контента
├── /robots.txt                       генерируется
└── 404                               не пустая: услуги, округа, разделы
```

**Городские страницы добавлены 25.09.2026** — только по двум ближним округам,
13 штук. Шесть остальных округов пока остаются на уровне округа: город без
собственной фактуры даёт дорвей, а не страницу.

**Майерстауна среди них нет намеренно.** Это база компании, её закрывают
главная и карточка Google. Отдельная страница конкурировала бы с собственной
главной по одному и тому же запросу.

Правило «если можно заменить название города и текст останется верным —
страницу не делаем» проверяется машинно: `npm run check:towns` валит сборку
на повторе заголовка, текста позиции, ориентира или начала лида между
городами и требует, чтобы город называл себя в тексте не меньше двух раз.

**Технические страницы добавлены 25.09.2026.** Политика описывает то, что
сайт делает на самом деле: ни аналитики, ни куки, ни форм. Это не
формальность, а требование § 5 FTC Act — опубликованное обещание надо
соблюдать буквально. При добавлении аналитики, чата или формы заявки текст
`src/content/legal/index.ts` обязан меняться в тот же день.

---

## Главная `/`

**Основной ключ:** electrical contractor — Ланк 110 / США 33 100 / $2,19
**Вторые:** electrician near me (Ланк 720) · electrical company near me (Ланк 110) ·
electrical contractor near me (Ланк 110) · commercial electrician (Ланк 30)

**Title:** Commercial, Industrial & Agricultural Electrical Contractor | Lancaster & Lebanon County PA
**H1:** Commercial, Industrial and Agricultural Electrical Contractors

Секции:

1. **Герой** — три рынка названы в первом экране, телефон, строка «24/7».
   Компоненты те же: скобки-прицел, оранжевый слеш, контурная подпись.
2. **Аварийная полоса** — телефон с tap-to-call. Самый дорогой кластер,
   ему место выше сгиба.
3. **Три рынка** — новый компонент `MarketSplit`: три оранжевые карточки
   в стиле карточек услуг. Прямой ответ на запрос клиента.
4. **О компании** — кто, сколько лет, зона работы. Блок с видео и плитой.
5. **Услуги** — карусель на 8 страниц услуг.
6. **Типы объектов** — новый `FacilityGrid`: птичники, молочные фермы, зерно,
   склады, цеха, мастерские. Линейные иконки на оранжевом.
7. **Проекты** — 6 карточек.
8. **Почему мы** — слеш-маркеры, как сейчас.
9. **Зона обслуживания** — округа и города, ссылки на гео-страницы.
10. **FAQ** — 5–6 вопросов, аккордеон. Нужен под разметку FAQPage.
11. **CTA-баннер** — как сейчас.

Блок «GO FUTURE» — это слоган ETL. Сам приём (текст-маска) оставляем, текст
меняем на свой. Вариант на утверждение: **POWER THAT HOLDS**.

---

## `/emergency-electrician` — приоритет №1

Самый объёмный локально и самый дорогой кластер. Сложность 0.

**Основной:** emergency electrician near me — Ланк **50** / США 12 100 / **$46,81** / KD 0
**Вторые:** 24 hour electrician near me ($38,35) · same day electrician near me ($46,17) ·
24 7 electrician near me ($40,71) · emergency electrical service near me ·
electrician open now · after hours electrician near me · emergency commercial electrician ·
emergency electrical contractor ($47,10) · 24-hour electrician ($45,73)

**Title:** 24/7 Emergency Electrician | Lancaster & Lebanon County PA
**H1:** 24/7 Emergency Electrical Service for Farms, Plants and Businesses

Секции:

1. Телефон крупно, tap-to-call, время отклика, зона выезда
2. **Что считается аварией** — список, он же кандидат в AI Overview
3. **Отказ вентиляции в птичнике** — отдельный крупный блок. Это мост между
   агро и поиском: ночной отказ ищут как «emergency electrician», а не
   агро-словами. Единственное место, где агро-специализация конвертируется
   в поисковый трафик.
4. Остановка производства, потеря фазы, отказ ввода
5. Повреждения после грозы
6. **Что происходит после звонка** — шаги и сроки
7. Часы и покрытие
8. FAQ
9. CTA

---

## `/agricultural-electrical-services`

**Трафика отсюда не ждём.** Страница нужна для доверия и конверсии: её читают
те, кто пришёл из карточки Google, по рекомендации или с аварийной страницы.
Она же — главный дифференциатор против всех местных конкурентов.

**Основной:** agricultural electrician — США 140 / $8,06
**Вторые:** barn electrical (110) · poultry house ventilation (40) · barn wiring (40) ·
agricultural electrician near me (20) · poultry house lighting · dairy barn lighting ·
broiler house lighting program · electric grain dryer · poultry farm generator

**Title:** Agricultural Electrician | Poultry, Dairy & Grain | Lancaster County PA
**H1:** Agricultural Electrical Services for Poultry, Dairy and Grain Operations

**Отдельных страниц под poultry / dairy / grain не делать** — по ним
подтверждённый ноль. Вместо этого одна страница с глубокими разделами:

1. **Птичники** — вентиляция, контроллеры, аварийное питание, программы
   освещения и диммирование, сигнализация, расчёт нагрузки
2. **Молочное** — доильный зал, охладитель, блуждающие токи и их замер,
   освещение беспривязного коровника
3. **Зерно** — сушилки, нории, шнеки, вентиляторы бункеров
4. **Свиноводство**
5. **Ввод на ферму** — три фазы, переподключение, столбовые здания
6. **NEC 547** — раздел кода про сельхозпостройки. Доказательство компетенции
   и то, чего нет ни у одного конкурента в регионе
7. FAQ, CTA

Узкие слова (`poultry house controller`, `stray voltage`, `grain leg`) идут
**в текст как доказательство**, а не как цели ранжирования.

---

## `/commercial-electrical-services`

**Основной:** commercial electrician — Ланк 30 / США 14 800 / $18,08 / KD 0
**Вторые:** commercial electrician near me (5 400) · commercial electrical services (1 900) ·
commercial electrical contractor near me (1 300) · commercial electrical company near me ·
commercial electrical installation ($39,27) · restaurant electrician · office electrician

**Title:** Commercial Electrician | Lancaster & Lebanon County PA
**H1:** Commercial Electrical Contracting

Секции: что делаем (fit-out, вводы, освещение, EV, генераторы, обслуживание) ·
типы зданий · как идёт работа · примеры проектов · FAQ · CTA

---

## `/industrial-electrical-services`

**Основной:** industrial electrical contractor — США 1 900 / $11,45
**Вторые:** industrial electrical (2 400) · industrial electrician near me (720) ·
industrial electrical services (720) · **industrial electrical repair (30, $92,15)** ·
plant electrician · manufacturing electrician · factory electrician

**Title:** Industrial Electrical Contractor | Plant & Machine Power | PA
**H1:** Industrial Electrical Services for Pennsylvania Plants

Секции: распределение в цеху · монтаж и подключение станков · управление
двигателями, MCC · частотники · три фазы и 480 В · работа в окно остановки ·
связка с обслуживанием · FAQ · CTA

---

## `/standby-generator-installation`

**Основной:** generator installation near me — Ланк 10 / США 5 400 / $14,59
**Вторые:** generator repair near me (Ланк 20 / 12 100) · generac installer near me (1 900) ·
standby generator installation near me · automatic transfer switch installation ·
commercial generator installation · generator installation (Ланк 20, $29,15) ·
farm generator (90) · generator for farm use

**Title:** Standby Generator Installation | Commercial & Farm | Lancaster PA
**H1:** Standby Generator Installation for Businesses and Farms

Секции: подбор мощности · АВР · топливо · **ферма: генератор держит вентиляцию,
то есть поголовье** · коммерция · обслуживание и тестовые запуски · FAQ · CTA

---

## `/electrical-service-upgrades`

**Основной:** electrical panel upgrade near me — Ланк 10 / США 3 600 / $12,17
**Вторые:** electrical panel replacement near me (1 000) · 200 amp service upgrade (390) ·
electrical service upgrade near me · 400 amp service upgrade

**Title:** Electrical Service & Panel Upgrades | Commercial & Farm | PA
**H1:** Electrical Service and Panel Upgrades

---

## `/commercial-led-lighting`

**Основной:** outdoor lighting contractor near me — Ланк 10 / США 1 900 / $13,04
**Вторые:** **pole barn lighting (320)** · lighting for pole barn (320) ·
parking lot lighting installation (140) · warehouse lighting installation (110, $18,65) ·
led retrofit companies · commercial lighting installation near me ($55,70) ·
high bay lighting · led lighting retrofit

`pole barn lighting` — самый объёмный из всех агро-смежных запросов. Столбовые
здания здесь у всех, это законный вход в агро-аудиторию через поиск.

**Title:** Commercial & Agricultural LED Lighting | Warehouse, Barn, Parking Lot
**H1:** Commercial and Agricultural LED Lighting Retrofits

---

## `/low-voltage-structured-wiring` — новая страница

Её нет в `keywords-for-pages.md`. Основание — находка из `serp-analysis.md`,
проверенная по `data/keywords-service.csv`:

| Запрос | Ланк | США | CPC | KD |
|---|---|---|---|---|
| low voltage wiring installation | 10 | 480 | **$89,47** | **0** |
| installing low voltage wiring | 10 | 480 | $89,47 | 0 |
| low voltage electrician | 10 | 2 900 | $9,29 | 0 |
| low voltage wiring near me | 10 | 260 | $7,39 | 0 |

Сложность ноль, CPC почти $90, в органике топ-3 — национальные сайты
(thenetworkinstallers.com, truecable.com, facebook.com), местных нет.
В локальном блоке только Lapp Electric с 4,4★. Плюс на этом запросе
показывается AI Overview.

И это естественный мост между агро и промышленностью: контроллеры птичника,
датчики, сеть в цеху, камеры — всё это слаботочка.

**Title:** Low Voltage & Structured Wiring | Controls, Data, Security | PA
**H1:** Low Voltage Wiring for Controls, Data and Monitoring

---

## `/ev-charging-installation`

**Основной:** ev charger installer near me — Ланк 10 / США 4 400 / $15,65
**Вторые:** ev charger installation service ($61,00) · commercial ev charger installation ·
level 2 charger installation near me · ev charging station installation companies ($31,62)

**Title:** Commercial EV Charger Installation | Lancaster County PA
**H1:** Commercial and Fleet EV Charging Station Installation

---

## `/control-panels-machine-wiring`

**Основной:** industrial control panel manufacturers — США 90 / $7,08
**Вторые:** plc programming near me · vfd repair near me · control panel builder near me ·
motor control center · control panel wiring

**Title:** Industrial Control Panels & Machine Wiring | PLC & VFD | PA
**H1:** Custom Control Panels and Machine Wiring

---

## `/electrical-preventive-maintenance`

Объёма почти нет, CPC высокий — заявка дорогая.

**Основной:** arc flash study companies — США 50 / **$78,28**
**Вторые:** arc flash analysis services · electrical preventive maintenance services ·
nfpa 70e (Ланк 20) · thermal imaging electrical · infrared electrical inspection

**Title:** Electrical Preventive Maintenance & Arc Flash Studies | PA
**H1:** Preventive Maintenance, Infrared Surveys and Arc Flash Studies

---

## Городские страницы

Исследование предлагает семь: Lancaster, York, Reading, Lebanon, Harrisburg,
Ephrata, Lititz — по убыванию объёма.

**Предлагаю другой порядок — по досягаемости, а не по объёму.** Локальный блок
ранжирует по близости к искавшему, считая от адреса компании. Адрес —
Myerstown, округ Lebanon. Городская страница без поддержки карточки почти
ничего не даёт, поэтому начинать надо с того, где мы реально близко.

| Волна | Город | ~В пути | Ланк | США | Почему |
|---|---|---|---|---|---|
| 1 | Lebanon | 10 мин | 10 | 110 | свой округ, ближе всех |
| 1 | Ephrata | 15 мин | **40** | 50 | второй по локальному объёму, рядом |
| 1 | Lititz | 20 мин | 30 | 40 | третий по локальному объёму |
| 2 | Reading | 25 мин | 10 | 140 | ближе Ланкастера, объём есть |
| 2 | Lancaster | 30 мин | **110** | 170 | максимальный объём, но там все конкуренты |
| 3 | Harrisburg | 35 мин | 10 | 110 | |
| 3 | York | 50 мин | 10 | **480** | объём максимальный по США, но час пути и другой округ |

Myerstown отдельной страницей не делаем — `electricians in myerstown pa`
даёт 10/10, это работа для карточки Google и главной, а не для страницы.

**Правило для каждой гео-страницы:** если можно заменить название города
и текст останется верным — страницу не делаем. Нужны реальные объекты в этом
городе, местные промзоны и фермы, свои проекты.

---

## Страницы по округам — решено 24.09.2026

Вместо городских страниц первой волны делаем **восемь страниц по округам**.
Причина: округ — это то, как подрядчик реально описывает выезд, и то, как
клиент себя ищет («electrician in Berks County»). Городская страница без
поддержки карточки Google почти ничего не даёт, а округ шире и честнее.

| Округ | ~В пути от Myerstown | Чем отличается работа |
|---|---|---|
| Lebanon | 0–15 мин | птичники, молочные фермы, мясопереработка |
| Lancaster | 15–35 мин | самый плотный агро-округ штата, первый в PA по птице и молоку |
| Berks | 15–35 мин | склады и распределительные центры вдоль I-78 и 222, пищепром |
| Dauphin | 25–45 мин | Гаррисберг и коммерция, Hershey и пищевое производство |
| Schuylkill | 30–50 мин | угольный край: старые вводы, длинные линии, склады вдоль I-81 |
| Cumberland | 40–60 мин | логистический коридор I-81, крупнейшая концентрация складов |
| York | 45–70 мин | машиностроение, снековые заводы, агро на юге округа |
| Chester | 45–70 мин | грибные фермы вокруг Kennett Square, агро около Honey Brook |

**7 городов на каждой странице**, у каждого своя строка про то, что мы там
делаем. Голый список городов запрещён: он и есть та самая подменяемая
страница, от которой правило выше защищает.

**Формулировка:** страницы пишутся про то, **где мы предоставляем услуги**,
а не про то, где мы находимся. Адрес живёт на `/contact` и в карточке Google.

**Открытый вопрос:** точный радиус выезда у клиента не подтверждён
(`[TBD]` в `OPEN-QUESTIONS.md`). Дальние округа написаны как «едем ради
такой работы», без обещания быстрого приезда.

---

## Блог

Проверено на конкуренте: инфо-контент в этой нише ранжируется (RS Martin
сидит на 8-й позиции со статьёй про GFCI).

| Тема | Ключ | США | Зачем |
|---|---|---|---|
| Одна фаза против трёх | single phase vs three phase | **5 400** | самый объёмный инфо-запрос ниши |
| Конвертер фаз | three phase to single phase converter | 2 900 | тот же кластер |
| Блуждающие токи на ферме | stray voltage | **1 000** | объём + агро-компетенция |
| Освещение столбового здания | pole barn lighting | 320 | ведёт на страницу освещения |
| Пожар от розетки | outlet fire / outlet on fire | 640 | проверено у конкурента |
| Причины электропожара | causes of electrical fire | 260 | там же |
| Сколько ест птичник | how much electricity does a poultry house use | 10 | объёма нет, попадание в тему точное |

---

## Проекты

6–8 кейсов. Здесь живут доказательства по агро, которых не даст ни один
поисковый запрос. Каждый кейс: объект, задача, что сделали, чем закончилось.
Реальные фото.

---

## Техническое

Ни у одного проверенного конкурента нет schema-разметки. Это фора, которую
берём сразу:

- `ElectricalContractor` (подтип LocalBusiness) — на всех страницах
- `Service` — на каждой странице услуги
- `FAQPage` — везде, где есть FAQ
- `BreadcrumbList` — на всех внутренних
- `AggregateRating` — только когда появятся реальные отзывы

AI Overview показывается на объяснительных запросах (5 из 25). Чтобы туда
попадать, на каждой странице нужен блок с определением, список и конкретные
числа — короткие абзацы, которые можно процитировать целиком.

Плюс: `sitemap.xml`, `robots.txt`, канонические, OG-картинки, tap-to-call
на всех телефонах, разметка зоны обслуживания.
