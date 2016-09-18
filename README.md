# Dev-Flix API

## 1. Get Dev-Flix database

Returns an array of the whole movie database

## Resource URL

`/api/v1/movies/`

## Resource Information

|Response formats              | JSON |
| ---------------------------- |:----:|
|Requires authentication?      | No   |

## Parameters

`count`

## Example result showing 2 movies that are returned
```js
[ { id: 52,
    image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BZTAzNWZlNmUtZDEzYi00ZjA5LWIwYjEtZGM1NWE1MjE4YWRhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,671,1000_AL_.jpg',
    description: 'After his son is captured in the Great Barrier Reef and taken to Sydney, a timid clownfish sets out on a journey to bring him home.',
    title: 'Finding Nemo',
    genre: 'Family',
    classification: 'G',
    rating: 82,
    minAge: 0 },
  { id: 53,
    image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BODU4MjU4NjIwNl5BMl5BanBnXkFtZTgwMDU2MjEyMDE@._V1_SY1000_CR0,0,672,1000_AL_.jpg',
    description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
    title: 'Shawshank Redemption',
    genre: 'Drama',
    classification: 'R18',
    rating: 93,
    minAge: 18 }
```
