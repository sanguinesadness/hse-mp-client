# HSE MP (Клиентская часть)
> Дипломная работа за 4 курс (оценка – 8). Национальный исследовательский университет "Высшая Школа Экономики"

HSE MP (_Higher School of Economics Marketplace Analytics_) – информационно-аналитическая система продаж с различных торговых площадок.

![image](https://github.com/sanguinesadness/hse-mp-client/assets/59533126/4570ca50-5bab-4840-8bb6-eb5b5d529580)

## Цель
Реализация информационной системы, способной осуществлять сбор данных с торговых онлайн-площадок с помощью различных алгоритмов, а затем производить анализ информации по заданным критериям.

## Задачи
1. Проанализировать предметную область.
2. Изучить предметную область работы с российскими маркетплейсами с точек зрения продавца и покупателя.
3. Найти и провести сравнительную характеристику существующих решений в области.
4. Спланировать способы реализации процесса сбора данных с торговых площадок и дальнейшего анализа этих данных.
5. Сформулировать требования к разрабатываемой системе.
6. Определиться с программными инструментами.
7. Спроектировать и реализовать базу данных для хранения необходимой информации.
8. Спроектировать клиентскую и серверную части приложения.
9. Нарисовать макеты интерфейса.
10. Реализовать информационно-аналитическую систему.
11. Написать программный код.
12. Протестировать систему по всем возможным пользовательским сценариям.

## Содержание
- [Авторизация](#авторизация).
- [Главная](#главная).
- [Товары](#товары).
- [Товар](#товар).
- [Склады](#склады).
- [Аналитика](#аналитика).
- [Авторизация](#авторизация).
- [Экспорт в Excel](#экспорт-в-excel).

## Авторизация
Вход в систему по данным продавца в системе Ozon.
<img width="1624" alt="Screenshot 2023-07-10 at 15 13 02" src="https://github.com/sanguinesadness/hse-mp-client/assets/59533126/1a90ed05-ec7e-4ca4-be81-2e5f8230e56e">

## Главная
Визуально привлекательная часть – главная страница системы с навигационными ссылками на другие разделы приложения.
<img width="1624" alt="Screenshot 2023-07-10 at 15 13 50" src="https://github.com/sanguinesadness/hse-mp-client/assets/59533126/90d1005e-8f63-41ae-8a33-6db6f5423317">

## Товары
Раздел работы со списком товаров продавца.
### Мои товары
Полный спискок товаров продавца в системе Ozon.
<img width="1624" alt="Screenshot 2023-07-10 at 15 15 53" src="https://github.com/sanguinesadness/hse-mp-client/assets/59533126/e76c7934-8a9e-471e-867b-e9f46c503cb7">

### Добавить
Форма добавления нового товара в список продавца.
<img width="1624" alt="Screenshot 2023-07-10 at 15 17 08" src="https://github.com/sanguinesadness/hse-mp-client/assets/59533126/3c7acc54-756e-4152-be37-d9bdf4ab8a13">
<img width="1624" alt="Screenshot 2023-07-10 at 15 17 14" src="https://github.com/sanguinesadness/hse-mp-client/assets/59533126/fa9af275-77d5-48b8-aa6d-11b400b47c58">

### Архив
Список архивных товаров продавца.
<img width="1624" alt="Screenshot 2023-07-10 at 15 16 57" src="https://github.com/sanguinesadness/hse-mp-client/assets/59533126/ca8f400e-03f8-4a67-8979-1cd841ec199c">

## Товар
Раздел работы с конкретным товаров продавца.
### Просмотр
Страница с детальной информацией о товаре продавца. Содержит все основные доступные в Ozon поля и мультимедиа.
<img width="1624" alt="Screenshot 2023-07-10 at 15 17 38" src="https://github.com/sanguinesadness/hse-mp-client/assets/59533126/f99e8800-7705-4488-abea-2c5d64f866ad">
<img width="1624" alt="Screenshot 2023-07-10 at 15 17 49" src="https://github.com/sanguinesadness/hse-mp-client/assets/59533126/5e13db01-8d2d-4f33-aae6-c63d2be11ac3">

### Редактирование
Форма редактирования полей и изображений товара продавца.
<img width="1624" alt="Screenshot 2023-07-10 at 15 17 57" src="https://github.com/sanguinesadness/hse-mp-client/assets/59533126/09379cd0-9bdc-45ea-a6cd-eed0abb4d533">
<img width="1624" alt="Screenshot 2023-07-10 at 15 18 02" src="https://github.com/sanguinesadness/hse-mp-client/assets/59533126/99e963e3-04e5-4cf6-a18a-fb21bbdfebc5">

### Перенос в архив
Модальное окно переноса товара продавца в список архивных.
<img width="1624" alt="Screenshot 2023-07-10 at 15 18 06" src="https://github.com/sanguinesadness/hse-mp-client/assets/59533126/b3d4114f-65c9-425d-9ce3-d6e89689909c">

## Склады
Раздел добавления и удаления адресов складов продавца.
<img width="1624" alt="Screenshot 2023-07-10 at 15 18 58" src="https://github.com/sanguinesadness/hse-mp-client/assets/59533126/0b5a02a1-ea72-4aed-ad86-472a9e495a36">

## Аналитика
Раздел работы с аналитическими данными.
### Товары конкурентов
Таблица с конкурентными товарами. Все товары конкурентов разделяются по товарам продавца.
<img width="1624" alt="Screenshot 2023-07-10 at 15 19 09" src="https://github.com/sanguinesadness/hse-mp-client/assets/59533126/a48d2bfa-16bc-4bb6-b5ea-ac5472dd8d90">
<img width="1624" alt="Screenshot 2023-07-10 at 15 19 31" src="https://github.com/sanguinesadness/hse-mp-client/assets/59533126/077b7452-1059-422f-879f-24ffc8c9607f">
<img width="1624" alt="Screenshot 2023-07-10 at 15 19 38" src="https://github.com/sanguinesadness/hse-mp-client/assets/59533126/8b7fed94-b340-471e-a100-2bd718390fd4">
<img width="1624" alt="Screenshot 2023-07-10 at 15 19 45" src="https://github.com/sanguinesadness/hse-mp-client/assets/59533126/2ae35804-a123-4065-b91f-64c2023757bd">

### Что продавать?
Таблица с самыми продаваемыми товарами на Ozon за последние неделю-две. Данные берутся с публичных страниц свежих распродаж и топов.
<img width="1624" alt="Screenshot 2023-07-10 at 15 19 49" src="https://github.com/sanguinesadness/hse-mp-client/assets/59533126/5539900a-b0bc-4820-b7c3-6a679b4debd3">
<img width="1624" alt="Screenshot 2023-07-10 at 15 19 55" src="https://github.com/sanguinesadness/hse-mp-client/assets/59533126/1c499818-fee7-41e1-84f3-ff677acce299">

## Экспорт в Excel
Скачанные в формате `.xslx` таблицы из раздела аналитики. 
### Товары конкурентов
Таблица "Товары конкурентов" в формате таблицы Excel.
<img width="1624" alt="Screenshot 2023-07-10 at 15 20 26" src="https://github.com/sanguinesadness/hse-mp-client/assets/59533126/b7237e87-d0b0-4b98-940e-c1431a1bd7c7">

### Что продавать?
Таблица "Что продавать" в формате таблицы Excel.
<img width="1624" alt="Screenshot 2023-07-10 at 15 20 33" src="https://github.com/sanguinesadness/hse-mp-client/assets/59533126/6ccfbb86-aa32-4481-abfe-0370c381000e">




