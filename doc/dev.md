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

# How to build

```
npx tsc
```

# How to publish

```
npm publish --access=public
```