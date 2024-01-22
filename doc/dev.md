# How to connect dev container

```
docker compose up -d
docker exec -it npm-tile-gallery /bin/bash
```

# Initial Construction

```
npm adduser
npm init
npm install --save-dev react react-dom @types/react @types/react-dom typescript
npx tsc --init
```

# How to lint

```
npm run eslint
```

# How to format

```
npm run format
```

# How to build

```
npm run build
```

# How to publish

```
npm publish --access=public
```
