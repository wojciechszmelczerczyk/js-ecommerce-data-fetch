# User with highest cart value

## Description

User with highest cart value.

## Table of contents

- [Data source](#data-source)
- [Input data](#input-data)
- [Output data](#output-data)
- [Code](#code)

## Data source

<b>URLS:</b> [https://fakestoreapi.com/products/:id, https://fakestoreapi.com/users/:id, https://fakestoreapi.com/carts/?startdate=2000-01-01&enddate=2023-04-07]

<b>URL Params:</b> `id`, where `id=[integer]`

## Input data

To display user with highest cart value I had to call `carts` API. Next iterate on data, call corresponding `user` with provided `userId` and user corresponding `products` from cart.

## Output data

Result present credentials of user who has highest cart value.

<details>

<summary>Result</summary>

```json
{
  "fullName": { "firstname": "john", "lastname": "doe" },
  "totalPrice": 827.25
}
```

</details>

## Code

This section presents source code of user with highest cart value util function implementation.

<details>

<summary>code</summary>

```javascript
const highestCartValue = async () => {
  try {
    const carts = await getCarts();

    const result = await Promise.all(
      _.map(carts, async ({ userId, products }) => {
        const { name } = await getUser(userId);
        const prices = await Promise.all(
          _.map(products, async ({ productId }) => {
            const { price } = await getProduct(productId);
            return price;
          })
        );
        const totalPrice = prices.reduce((acc, curr) => acc + curr, 0);
        return {
          fullName: name,
          totalPrice: totalPrice,
        };
      })
    );

    const highestValueCart = _.maxBy(result, "totalPrice");

    return highestValueCart;
  } catch (err) {
    console.log(err.message);
  }
};
```

</details>
