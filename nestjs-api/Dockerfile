FROM node:22.6.0-slim

RUN apt update && \
    apt install openssl procps -y && \
    npm install -g @nestjs/cli@10.4.8

USER node

WORKDIR /home/node/app

CMD [ "tail", "-f", "/dev/null" ]