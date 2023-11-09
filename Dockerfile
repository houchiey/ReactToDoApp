FROM node:20.2-alpine

RUN apk update && apk add git && apk add openssh

ENTRYPOINT tail -f /dev/null