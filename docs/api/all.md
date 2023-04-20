# Get all resources

## Description

Retrieve all resources from data source.

## Table of contents

- [Resources](#resources)

## Resources

Table below shows an actual API resources used in application.

| Resources  |             Endpoints             |         Querystring         |
| :--------: | :-------------------------------: | :-------------------------: |
|  `users`   |  https://fakestoreapi.com/users   |              -              |
| `products` | https://fakestoreapi.com/products |              -              |
|  `carts`   |  https://fakestoreapi.com/carts   | `startDate` and `endDate`\* |

\* - `startDate` and `endDate` are required and specifically defined in this task for carts resource as following:
`?startdate=2000-01-01&enddate=2023-04-07`.<br/>
Keeping this in mind, following URL will be:
`https://fakestoreapi.com/carts?startdate=2000-01-01&enddate=2023-04-07`.
