# CrawlData-FE
## 1. For Docker installation
Ensure you have installed:

- [Docker desktop](https://www.docker.com/products/docker-desktop//) for Windows
- [Linux or Ubuntu](https://docs.docker.com/engine/install/ubuntu/)
- A running [Backend server](https://github.com/TeddyToT/CrawlData-BE) that has already completed the first crawl
### Environment Configuration
Create a `.env.docker` file in the root of your directory with the following variables:

```env
VITE_ARTICLE_API_URL=
VITE_CATEGORY_API_URL=
```

### Build and run the app container
#### Build the app container
```bash
docker build -t crawldata-fe .
```
#### Run the app container
```bash
docker run -d -p 3000:80 crawldata-fe
```
Then go to [link](http://localhost:3000): http://localhost:3000





## 2. For developer installation
Ensure you have installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) or [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable)
- [PostgreSQL](https://www.postgresql.org/)
- A running [Backend server](https://github.com/TeddyToT/CrawlData-BE) that has already completed the first crawl

---
### Environment Configuration
Create a `.env` file in the root of your directory with the following variables:

```env
VITE_ARTICLE_API_URL=
VITE_CATEGORY_API_URL=
```
---
### Install Dependencies

#### npm
```
npm install
```

#### yarn
```
yarn install
```

---

### Running the Server
#### npm
```
npm start
```

#### yarn
```
yarn start
```




