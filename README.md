# E-commerce data fetching

## Description

Software which fetch e-commerce like data and perform logic on it.

## Table of contents

- [Techstack](#techstack)
- [Libraries](#libraries)
- [API](#api)
- [Utils](#utils)
- [To run](#to-run)

## Techstack

- `JavaScript`

## Libraries

- [Lodash](https://www.npmjs.com/package/lodash)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [Geolocation Distance](https://www.npmjs.com/package/geolocation-distance-between)

## API

Table below presents functions which are responsible for data fetching from REST API.

`Resources` is only name convention here to generalize usage of an API endpoints.

You can click specific endpoint in order to get more in-depth information about usage.

| METHOD |               Endpoint                |
| :----: | :-----------------------------------: |
| `GET`  |   [`/resources`](./docs/api/all.md)   |
| `GET`  | [`/resources/:id`](./docs/api/one.md) |

## Utils

Table below shows util functions which perform logic on data fetched from an API.

|                                   Function                                   |
| :--------------------------------------------------------------------------: |
|      [`Aggregate prices by category`](./docs/utils/aggregate-prices.md)      |
|           [`Highest cart value`](./docs/utils/highest-cart-val.md)           |
| [`Furthest distance between users`](./docs/utils/furthest-users-distance.md) |

## To run

Clone repository.

```sh
git clone https://github.com/wojciechszmelczerczyk/js-ecommerce-data-fetch.git
```

Navigate to project root directory.

```sh
cd ./js-ecommerce-data-fetch
```

Install dependencies.

```sh
npm i
```

Create following `.env` in project root directory.

```conf
BASE_URL=https://fakestoreapi.com

CARTS_URL=carts
PRODUCTS_URL=products
USERS_URL=users

CARTS_DATE_QUERY_STR=?startdate=2000-01-01&enddate=2023-04-07
```

Run server.

```sh
npm run start
```
