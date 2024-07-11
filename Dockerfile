FROM node:lts-buster

RUN https://github.com/STAR-KING0/Arthur-MD

COPY package.json .

RUN npm install && npm install -g qrcode-terminal pm2

COPY . .

EXPOSE 5000

CMD ["npm", "start"]
