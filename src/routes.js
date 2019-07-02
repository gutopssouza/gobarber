import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Augusto Pacheco',
    email: 'gutopssouza@gmail.com',
    password_hash: 'augusto2',
  });

  return res.json(user);
});

export default routes;
