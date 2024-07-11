FROM node:lts-buster

RUN https://github.com/STAR-KING0/Arthur-MD

COPY package.json 

EXPOSE 5000

CMD ["npm", "start"]
