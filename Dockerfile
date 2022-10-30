FROM node:16

EXPOSE 3000

WORKDIR /src

RUN npm install i npm@latest -g

COPY package.json package-lock*.json ./

RUN npm install 

COPY . .

CMD [ "node", "backend/app.js" ]