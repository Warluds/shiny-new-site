# Luxium

## Сборка

```bash
git clone https://github.com/Warluds/shiny-new-site.git
cd shiny-new-site
npm install --legacy-peer-deps
npm run build
```

После сборки появится папка **`static/`** — это готовый статический сайт
(`index.html` + `assets/`). Загрузите её содержимое на любой обычный хостинг
(FTP, Nginx, Apache, GitHub Pages, Netlify drop и т.д.).

## Разработка

```bash
npm run dev
```

Откроется dev-сервер на http://localhost:8080.

## Примечания

- Флаг `--legacy-peer-deps` нужен из-за React 19 и peer-зависимостей,
  которые ещё указывают React 18.
- `npm run build` сначала собирает приложение (Vite + TanStack Start),
  затем `scripts/prerender.mjs` рендерит главную страницу в статический
  HTML и копирует результат в `static/`.
- Чтобы добавить другие страницы в пререндер — допишите пути в массив
  `ROUTES` в `scripts/prerender.mjs`.
