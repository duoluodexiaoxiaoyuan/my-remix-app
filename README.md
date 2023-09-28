# Remix学习笔记

* 入口文件是app/root.tsx里面
* 参考官方文档: https://remix.run/docs/en/main/start/tutorial


# 注意
* touch app/routes/contacts.\$contactId.tsx  人家路由就是这么创建的，我还自作聪明写成了具体的名字


# Welcome to Remix!

- [Remix Docs](https://remix.run/docs)

## Development

From your terminal:

```sh
npm run dev
```

This starts your app in development mode, rebuilding assets on file changes.

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `remix build`

- `build/`
- `public/build/`
