# despedida-leo

Proyecto web para la despedida de Leo.

## Stack

- Vue 3 con `<script setup>` y TypeScript
- Vite
- Pinia
- Vue Router
- SCSS

## Desarrollo

```bash
npm install
npm run dev
```

Para validar una compilación de producción:

```bash
npm run build
```

## Publicar en GitHub Pages

El proyecto está configurado para publicarse en la rama `gh-pages` del repositorio.

```bash
npm run deploy
```

Después, en GitHub, seleccioná `Settings > Pages` y elegí `Deploy from a branch`,
con la rama `gh-pages` y la carpeta `/ (root)`. La web quedará disponible en:

`https://carbis1992.github.io/despedida-leo/`

## Publicar en GitHub

1. Crear en GitHub un repositorio vacío llamado `despedida-leo`.
2. Ejecutar desde esta carpeta:

```bash
git add .
git commit -m "Inicializa proyecto despedida-leo"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/despedida-leo.git
git push -u origin main
```

Reemplazá `TU_USUARIO` por tu usuario de GitHub. Si usás GitHub CLI, también podés crear y publicar el repositorio con `gh repo create despedida-leo --private --source=. --remote=origin --push`.
