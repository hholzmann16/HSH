FROM node:10.12

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build

EXPOSE 6060
CMD ["npm", "start"]