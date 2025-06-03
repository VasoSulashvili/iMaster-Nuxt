FROM node:20-alpine

RUN apk add --no-cache curl

WORKDIR /app

CMD ["tail", "-f", "/dev/null"]