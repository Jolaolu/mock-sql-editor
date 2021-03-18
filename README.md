# atlan

### predefined queries 

```
select * from users

select * from users where title = 'owner'

select * from users where country = 'uk'
```
 ### Page Load time: 
    [web.dev](https://lighthouse-dot-webdotdevsite.appspot.com//lh/html?url=https%3A%2F%2Fmock-sql-editor.netlify.app%2F)
    [pageInsights] (https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fmock-sql-editor.netlify.app%2F&tab=desktop)
      First Contentful Paint: 0.8 s(mobile) 0.2 s(desktop)
      Time to Interactive:  1.8 s(mobile) 0.4 s(desktop)
      Speed Index: 0.8 s(mobile) 0.4 s(desktop)
   
    [Pingdom](https://tools.pingdom.com/#5e10b56a5cc00000)
      Load: 1.30 s

    [GT METRIX](https://gtmetrix.com/reports/mock-sql-editor.netlify.app/6zQBmLV1/)
      Time to Interactive: 441ms
      Fully Loaded Time: 0.5s
      TIME TO FIRST BYTE(TTFB): 114ms


### Steps taken to optimize the page load time
 * Using Nuxt as the framework 
 * Leveraging `Nuxt` static config target to prerender app
 * Deploying on Netlify to leverage its CDN and caching benefits of Jamstack hosting
 * Using Async-dynamic components for tabbed components 

    



## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
