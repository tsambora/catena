FROM mhart/alpine-node:8.5.0
WORKDIR /source
ADD . .

ENV PORT 3000
RUN npm install

CMD ["npm", "start"]
