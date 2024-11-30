FROM mcr.microsoft.com/playwright:v1.48.2-noble

WORKDIR /PLAYW-AQA-TEST

COPY . .

RUN npm install

CMD ["npx", "playwright", "test", "registrationTest.spec.ts"]