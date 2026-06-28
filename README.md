# Luxium

Сайт компании Luxium на TanStack Start + Vite + Tailwind v4.

## Сборка

```bash
git clone https://github.com/Warluds/shiny-new-site.git
cd shiny-new-site
npm install --legacy-peer-deps
npm run build
```

## Разработка

```bash
npm run dev
```

Локально откроется dev-сервер на http://localhost:8080.

## Превью продакшен-сборки

```bash
npm run preview
```

## Скрипты

- `npm run dev` — dev-сервер с HMR
- `npm run build` — продакшен-сборка (Cloudflare Worker preset)
- `npm run preview` — локальный просмотр собранной версии
- `npm run lint` — ESLint
- `npm run format` — Prettier

> Флаг `--legacy-peer-deps` нужен из-за React 19 и пакетов, у которых peer-зависимости ещё указывают React 18.
