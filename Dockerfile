FROM node:lts
WORKDIR /app
COPY ./package.json ./
RUN npm install
WORKDIR /app/src
ENTRYPOINT ["node"]
CMD ["index.js"]
