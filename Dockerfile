FROM node:18

WORKDIR /usr/src/app

COPY . .

RUN npm install

RUN npm run build

ENV PORT=3001

EXPOSE 3001

CMD ["npm", "start"]