# mini-store-next

Мини-приложение магазина на Next.js с использованием TypeScript, App Router и mock API.

## Что реализовано

- страница со списком товаров
- страница детального просмотра товара
- загрузка данных через `fetch`
- обработка ошибки загрузки товара
- кнопка возврата к списку товаров
- базовая стилизация через отдельные CSS-файлы

## Стек

- Next.js
- TypeScript
- App Router
- CSS
- Mock Server

## Структура проекта

- `app/products/page.tsx` — список товаров
- `app/products/[id]/page.tsx` — страница товара
- `lib/api.ts` — функции для запросов к API
- `types/product.ts` — тип товара
- `db.json` — mock API данные

## Запуск проекта

### 1. Запустить Mock Server
Поместить `db.json` в корень проекта и запустить Mock Server в VS Code.

Mock API будет доступен по адресу:

`http://localhost:3000/products`

### 2. Запустить Next.js приложение

```bash
npx next dev -p 3001

