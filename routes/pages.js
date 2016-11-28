import { Router } from 'express';

const router = Router();

router.get('/', (req, res, next) => {
  res.render('home', {
    title: 'Express + React Quickstart',
    content: 'A simple application quickstart for Express and React.'
  });
});

export default router;
