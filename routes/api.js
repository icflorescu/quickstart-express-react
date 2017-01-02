import { Router } from 'express';
import db from '../utils/db';

const reminders = db.get('reminders');

const router = Router();

router.get('/api/reminders', (req, res, next) => {
  try {
    res.send(reminders.map(item => db._.pick(item, 'id', 'title', 'when')).value());
  } catch (err) {
    next(err);
  }
});

router.post('/api/reminders/:id', (req, res, next) => {
  try {
    res.send(reminders.updateById(req.params.id, req.body).value());
  } catch (err) {
    next(err);
  }
});

router.put('/api/reminders', (req, res, next) => {
  try {
    res.send(reminders.insert(req.body).value());
  } catch (err) {
    next(err);
  }
});

router.delete('/api/reminders/:id', (req, res, next) => {
  try {
    reminders.removeById(req.params.id).value();
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

export default router;
