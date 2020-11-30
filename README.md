# Getting Started
## Admin View
![performance-review-gif](https://user-images.githubusercontent.com/63279134/99880621-e4f57300-2c57-11eb-8497-a634cafb716e.gif)

## Employee View
![performance-review-employee-gif](https://user-images.githubusercontent.com/63279134/99880641-0bb3a980-2c58-11eb-9083-8e50d7e66735.gif)

1) Clone this repository.
```
git clone https://github.com/thaberl13/FullStackEngineerChallenge
```

2) Install dependencies.
```
cd server
yarn
```
```
cd ../client
yarn
cd ..
```
3) Create local database
```
psql
CREATE DATABASE paypay;
```
4) Run migrations and seed.
```
cd server
yarn migrate
yarn seed
```
5) Start backend and frontend server.
```
yarn start
cd ..
cd client
yarn start
```
6) To Run API Tests

```
cd server
yarn dev
yarn test
```

***
### Technologies
- React
- Node
-Express
- Knex
- Postgres
- Mocha Testing

***