# parcelLab Code Challenge

## Building and Running the project

### Requirements

To avoid having you install all the dependencies, this project is thought
to run on docker. For that, docker must be installed.

Follow the [installation instructions](https://docs.docker.com/engine/install/) if you don't have docker yet.

After that I believe you should be ready to go 😃

### Optional

The app auth works with a token. This one is set to expire after 1 minute. But this can be changed by modifying the `TOKEN_EXPIRES` in the `.env` file

### Running the project

Once docker is installed, you can run the following command at the root of the project to spin the necessary containers.

```sh
docker compose build && docker compose up
```

In summary, this is what will happen:

1. All the images for `api` and `frontend` will be built
2. Docker will then run 3 containers:
    - The frontend: Its only purpose is to build the frontend app.
    - The backend: Will be our API and also serve our page
    - The database: Not really necessary, came with the Rails setup 😇
3. Once you see on the terminal that the `frontend` container existed without errors, you can open [http://localhost:3000](http://localhost:3000) and you should be able to see the login page.

## Available Scripts

### `yarn storybook`

You can run storybook by running the following command. 
Even one of the stories have `play actions`! 😄

```sh
docker run \
-it \
-p 6006:6006 \
-v ./frontend:/app \
--name storybook \
--rm \
parcellab-frontend bash -c "yarn storybook"
```

Storybook should be available under [http://localhost:6006](http://localhost:6006)

### `rspec tests`

You can run the backend tests by running the following command while the API container is running.

```sh
docker exec -it parcellabcodechallenge-api-1 bash -c "rspec"
```

### `yarn build`

In case you want to change something on the frontend and build it agin so it be served:

```sh
docker run \
-v ./frontend:/app \
--rm \
parcellab-frontend bash -c "yarn build"
```
