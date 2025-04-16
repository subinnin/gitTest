# node기반 이미지
FROM node:20

WORKDIR /app/

# 앞에는 내꺼 뒤에는 니꺼

COPY . .

RUN npm install

ENV PORT = 8080
EXPOSE 8080

CMD ["node", "server.js"]
