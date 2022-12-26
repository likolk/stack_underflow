

FROM node:19


WORKDIR /app

COPY package*.json ./ 


RUN yarn add all


COPY . .


EXPOSE 8000


CMD [ "npm", "start" ]



