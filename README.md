# Pizza App
Simple React + Boostrap demo project.

## Local (Development)

To install dependencies locally:
```bash
yarn install
```

To run project locally:
```bash
yarn start
```

## Docker (Development)

To build a development container image:
```bash
docker build -t pizza-app:dev .
```

Tu run a container from development container image:
```bash
docker run --rm -ti -v $PWD:/app -v /app/node_modules -p 3000:3000 -e CHOKIDAR_USEPOLLING=true pizza-app:dev
```

## Docker (Production)

To build a production-ready container image:
```bash
docker build -f Dockerfile.prod -t pizza-app:prod .
```

Tu run a container from production-ready container image:
```bash
docker run -it --rm -p 80:80 pizza-app:prod
```
