# Overview

Show random images of dogs in the DogList.js

## Instructions

1. Create a single state to store all new items in the `<index />` page
2. There is a component called `<DogList />` that's going to contain the all the dogs.
3. Fetch the data from `https://dog.ceo/api/breeds/image/random/3` and pass the data you've received from the dogs api into a state then pass that state as a prop to `<DogList/>` which should map out all the results from the shoping cart.

BONUS: We left the `<Form />` component in here deliberately for you. Can you let the user input the number of dogs images they want to see in an input and according to that, the api fetches that number?

## API Endpoints

1. `https://dog.ceo/api/breeds/image/random/` Gets you a single image
2. `https://dog.ceo/api/breeds/image/random/3` Gets you 3 images.
