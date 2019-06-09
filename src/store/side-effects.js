/* eslint import/prefer-default-export: 0 */
import { createApolloFetch } from "apollo-fetch";
const uri = "http://127.0.0.1:3000/graphql";
const apolloFetch = createApolloFetch({ uri });

export const fetchExchangeProducts = () => {
    const query = `
query fetchProducts($saleType: String!) {
  products(saleType: $saleType) {
    id,
    name,
    description,
    saleType
  }
}`;
    apolloFetch({
        query,
        variables: {
            saleType: 'Exchange',
        }
    })
        .then(result => {
            const { data } = result;
            console.log(result);
        })
        .catch(error => {
            console.log(error);
        });
}