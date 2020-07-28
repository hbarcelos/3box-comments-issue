# 3box.io Comments Component Issue

Apparently there is an issue with the `3box-comments-react` component when used with [`parcel`](https://parceljs.org/).

I set a minium reproduceable example with 3 different bundling options:

1. `create-react-app` :heavy_check_mark:
2. Vanilla `webpack` + `babel` :heavy_check_mark:
3. `parcel` :x:

## Running

After cloning this repo, run `yarn` at its top-level directory.

### `create-react-app`

```sh
yarn example-create-react-app
```

Then go to `http://localhost:3000`.

### `webpack`

```sh
yarn example-webpack
```

Then go to `http://localhost:8080`.

### `parcel`

```sh
yarn example-parcel
```

Then go to `http://localhost:1234`.

After loading the page, There is the following error:

    > Reactions.jsx:17:17
    > Uncaught SyntaxError: unexpected token: ':'
    >     js src.78399e21.js:309542
    >     __webpack_require__ src.78399e21.js:308114
    >     <anonymous> index.js:1
    >     <anonymous> index.js:4
    >     js src.78399e21.js:309747
    >     __webpack_require__ src.78399e21.js:308114
    >     <anonymous> verifier.js:13
    >     js src.78399e21.js:308239
    >     __webpack_require__ src.78399e21.js:308114
    >     <anonymous> api.js:17
    >     js src.78399e21.js:308191
    >     __webpack_require__ src.78399e21.js:308114
    >     <anonymous> ProfileHover.jsx:21
    >     jsx src.78399e21.js:311726
    >     __webpack_require__ src.78399e21.js:308114
    >     exports src.78399e21.js:308178
    >     parcelRequire<["../../node_modules/profile-hover/dist/reactBundle.js"]< src.78399e21.js:308181
    >     newRequire react-is.development.js:51
    >     localRequire OrbitDB.js:34
    >     parcelRequire<["../../node_modules/3box-comments-react/lib/components/Comment.js"]< src.78399e21.js:314764
    >     newRequire react-is.development.js:51
    >     localRequire OrbitDB.js:34
    >     parcelRequire<["../../node_modules/3box-comments-react/lib/components/Dialogue.js"]< src.78399e21.js:315498
    >     newRequire react-is.development.js:51
    >     localRequire OrbitDB.js:34
    >     parcelRequire<["../../node_modules/3box-comments-react/lib/index.js"]< src.78399e21.js:315783
    >     newRequire react-is.development.js:51
    >     localRequire OrbitDB.js:34
    >     parcelRequire<["index.jsx"]< src.78399e21.js:316616
    >     newRequire react-is.development.js:51
    >     parcelRequire helpers.ts:72
    >     <anonymous> idna.ts:82
