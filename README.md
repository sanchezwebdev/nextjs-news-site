#  Next.Js News Application | Serverless MongoDB Backend

This application is a news platform built with Next.js and a serverless MongoDB backend. It uses getStaticProps for generating static pages and getStaticPaths for creating dynamic routes for individual news articles. 

Content is fetched using Axios and managed through Contentful, a headless CMS CDN. Minimal use of Material UI is employed. The application aims to provide reliable performance, straightforward content management, and a clean, user-friendly interface. 

Deployed on Vercel 
## Installation

### Prerequisites

* Node.js: Preferably the latest LTS version. 
* npm: Comes bundled with Node.js.
* Contentful Account
* MongoDB Atlas


### Clone the Repository

```bash
git https://github.com/NuminousCode/nextjs-news-site.git 
cd nextjs-news-site
```
Use the package manager [npm](https://www.npmjs.com/) to install dependencies.

```bash
npm install 
```
## Environment Variables
```bash
DB_URL=https://your_database_url/endpoint/test
DB_HEADER_IMAGES=https://your_database_url/endpoint/header_images
DB_REGISTER=https://your_database_url/endpoint/register
ACCESS_TOKEN=your_access_token_here
SPACE_ID=your_space_id_here
```
## Running the application
In Development
```bash
npm run dev
```
In Productino
```bash
npm run build
npm run start
```

## Usage

Open http://localhost:3000 with your browser to see the result.

## License

[MIT](https://choosealicense.com/licenses/mit/)