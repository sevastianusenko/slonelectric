# DataForSEO — методика и справочник локаций

Собрано 2026-09-21. Источник кодов: `locations_kwrd_2026_09_01.csv`.

## Главное ограничение, которое меняет подход

**DataForSEO Labs API поддерживает только уровень страны** (`location_type: "Country"`).
Ни города, ни штата, ни округа. Это значит, что keyword difficulty, keyword ideas,
related keywords и competitor research мы получаем **только в разрезе США целиком**.

**Keywords Data API (Google Ads)** — наоборот, поддерживает `City`, `County`, `State`.
Отсюда берём объёмы поиска и CPC с геопривязкой.

Практический вывод: два разных API для двух разных задач, и путать их нельзя.

| Задача | API | Гео |
|---|---|---|
| Идеи, синонимы, long-tail | Labs: Keyword Suggestions / Related Keywords / Keyword Ideas | США целиком |
| Сложность (KD) | Labs: Bulk Keyword Difficulty | США целиком |
| Интент | Labs: Search Intent | США целиком |
| **Объёмы и CPC** | **Keywords Data: Google Ads Search Volume** | **город / округ / штат** |
| Кто стоит в выдаче | SERP: Google Organic Live | город |

## Порядок работы

1. **Сид-запросы** — 3–5 штук, не больше. Больше сидов = мусор и перерасход.
2. **Расширение** через Labs (Suggestions + Related + Ideas), лимит результатов задать явно.
3. **Дедупликация и чистка ДО обогащения.** Это главный рычаг экономии — платим за
   уникальные строки, а не за дубли.
4. **Обогащение**: объёмы через Google Ads Search Volume с нужным `location_code`,
   потом Bulk KD, потом Search Intent.
5. **Валидация SERP только по шорт-листу.** Live-режим дорогой, гонять его по всей
   базе — типичная ошибка новичка.

## На чём обжигаются

- **Live SERP по всему списку.** Экспорт на 20 000 ключей, прогнанный в Live-режиме,
  стоит непредсказуемо дорого. Live — только для финального шорт-листа.
- **Смешивание выгрузок с разными `location_code`.** В каждой выгрузке обязательно
  сохранять location_code, language_code и дату сбора, иначе через месяц данные
  нечитаемы.
- **Роутинг Labs через Live SERP вместо базы.** Если не нужны данные за последние
  24–48 часов, роутить в базу — дешевле на 60–70%.
- **Депт-биллинг** (с сентября 2025): цена зависит от глубины выдачи. Старые
  интеграции, тянувшие по 100 результатов, подорожали.
- **Объёмы Google Keyword Planner сгруппированы.** Планировщик показывает объём не
  по ключу, а по кластеру похожих фраз. Для точных значений использовать эндпоинт
  DataForSEO Search Volume с `use_clickstream: true`.
- **Минимальный депозит $50**, тестовые прогоны жрут кредиты — для разработки
  заводить отдельный ключ.

## Коды локаций — наш рынок

### Базовые

| Локация | Код |
|---|---|
| United States | 2840 |
| Pennsylvania | 21171 |
| Maryland | 21153 |
| Delaware | 21141 |

### Округа — ядро (до 45 минут)

| Округ | Код |
|---|---|
| Lancaster County, PA | 9059165 |
| Lebanon County, PA | 9059167 |
| Berks County, PA | 9059136 |
| York County, PA | 9059196 |
| Dauphin County, PA | 9059152 |
| Chester County, PA | 9059145 |

### Округа — второй пояс (45 мин – 1,5 ч)

| Округ | Код |
|---|---|
| Cumberland County, PA | 9059151 |
| Adams County, PA | 1024612 |
| Franklin County, PA | 9059158 |
| Schuylkill County, PA | 9059183 |
| Lehigh County, PA | 9059168 |
| Northampton County, PA | 9059177 |
| Montgomery County, PA | 9059175 |
| Bucks County, PA | 9059139 |
| Delaware County, PA | 9059153 |
| Perry County, PA | 9059179 |
| Juniata County, PA | 1024979 |
| Snyder County, PA | 9059184 |
| Union County, PA | 9059189 |
| Northumberland County, PA | 9059178 |

### Округа — за границей штата

| Округ | Код |
|---|---|
| Cecil County, MD | 9058116 |
| Harford County, MD | 9058120 |
| Baltimore County, MD | 9058112 |
| Carroll County, MD | 9058115 |
| Frederick County, MD | 9058119 |
| Washington County, MD | 9058127 |
| New Castle County, DE | 9057247 |

### Города

**Ядро — округ Ланкастер**

| Город | Код |
|---|---|
| Lancaster | 1025001 |
| Ephrata | 1024840 |
| Lititz | 1025032 |
| New Holland | 1025139 |
| Elizabethtown | 1024828 |
| Columbia | 1024753 |
| Manheim | 1025048 |
| Mount Joy | 1025114 |
| Quarryville | 1025219 |
| Strasburg | 1025318 |
| Denver | 1024793 |
| Leola | 9052308 |
| Millersville | 1025089 |
| Willow Street | 1025412 |

**Соседние округа**

| Город | Код |
|---|---|
| Reading | 1025222 |
| Wyomissing | 9053220 |
| Kutztown | 1024994 |
| Lebanon | 1025011 |
| Myerstown | 1025123 |
| Palmyra | 1025180 |
| York | 1025426 |
| Red Lion | 1025226 |
| Hanover | 1024919 |
| Harrisburg | 1024922 |
| Hershey | 1024937 |
| Hummelstown | 1024952 |
| Carlisle | 1024717 |
| Gettysburg | 1024887 |
| Chambersburg | 1024729 |
| Coatesville | 1024749 |
| West Chester | 1025392 |
| Honey Brook | 9052153 |
| Parkesburg | 1025184 |
| Oxford | 1025177 |
| Pottstown | 1025214 |

**Крупные метро на границе радиуса**

| Город | Код |
|---|---|
| Philadelphia, PA | 1025197 |
| Allentown, PA | 1024620 |
| Bethlehem, PA | 1024667 |
| Baltimore, MD | 1018511 |
| Westminster, MD | 1018739 |
| Bel Air, MD | 1018512 |
| Hagerstown, MD | 1018611 |
| Frederick, MD | 1018587 |
| Wilmington, DE | 1014938 |
| Newark, DE | 1014927 |

## Полный справочник

CSV со всеми локациями (96 430 строк):
`https://cdn.dataforseo.com/v3/locations/locations_kwrd_2026_09_01.csv`

Формат: `location_code,location_name,location_code_parent,country_iso_code,location_type`.
Внимание: `location_name` в кавычках и содержит запятые — наивный парсинг по запятой
ломается.

---

## Дополнено 2026-09-21 по итогам масштабной выгрузки

**Лимит: 12 запросов в минуту** на аккаунт. Превышение → ошибка `40202`,
деньги не списываются, но батч теряется молча. Пауза 6 секунд между запросами.

**Реальные цены (проверено):**

| Эндпоинт | Цена |
|---|---|
| `keywords_data/google_ads/search_volume/live` | $0.09 за запрос (до 1000 ключей) |
| `dataforseo_labs/*/live` | $0.012 за запрос + $0.00012 за строку |
| `ranked_keywords` (400 строк) | ~$0.02 за домен |

**Схлопывание вариантов обязательно.** Google Ads показывает одинаковый объём
для группы синонимичных формулировок. Нормализация: нижний регистр → убрать
пунктуацию → выбросить стоп-слова → грубая нормализация множественного числа →
отсортировать токены → склеить. Группировать по этой форме + объёму.

**Обогащать локально, а не по стране.** Расхождение достигает 70 раз:
`electrician near me` — 10 по США в первом замере против 720 в округе
Ланкастер при правильном `location_code`.
