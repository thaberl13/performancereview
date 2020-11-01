# Getting Started
## Admin View
![AdminProfilegif](https://user-images.githubusercontent.com/63279134/97817718-6ef98e00-1ce1-11eb-9115-bec03e12e8aa.gif)

## Employee View
![EmployeeProfilegif](https://user-images.githubusercontent.com/63279134/97817742-918ba700-1ce1-11eb-8abb-95bf91cc19a6.gif)

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
- Node/Express
- Knex
- Postgres
- Mocha Testing

***