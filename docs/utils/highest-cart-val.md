# User with highest cart value

## Description

User with highest cart value.

## Table of contents

- [Data source](#data-source)
- [Input data](#input-data)
- [Output data](#output-data)
- [Code](#code)

## Data source

<b>URL's:</b>

- https://fakestoreapi.com/products/:id
- https://fakestoreapi.com/users/:id
- https://fakestoreapi.com/carts/?startdate=2000-01-01&enddate=2023-04-07

<b>URL Params:</b> `id`, where `id=[integer]`

## Input data

To display user with highest cart value I had to call `carts` API. Next iterate on data, call corresponding `user` with provided `userId` and user corresponding `products` from cart.

## Output data

Result present credentials of user who has highest cart value as well as total price of products.

<details>

<summary>Result</summary>

```json
{
  "fullName": { "firstname": "john", "lastname": "doe" },
  "totalPrice": 2578.7
}
```

</details>

## Code

[highestValueCart](/utils/highestValueCart.js)
