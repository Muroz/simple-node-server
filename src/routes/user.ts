import { Router } from 'express';
import { Indexable } from '../types/interfaces';
import User from '../models/user/user';

const router = Router();

router.get('/users', async (req, res) => {
  try {
    const result = await User.find();

    return res.send({ users: result });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send({ error: 'Something went wrong, please try again!' });
  }
});

router.post('/users', async (req, res) => {
  try {
    const user = new User(req.body);

    await user.save();

    res.status(201).send({ user });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: 'Something went wrong, please try again!' });
  }
});

router.patch('/users/:id', async (req, res) => {
  const updates = Object.keys(req.body);

  const userId: string | undefined = req.params.id;

  if (!userId) {
    return res.status(404).send({ err: 'No user id provided' });
  }

  try {
    const validUpdateValues = ['name', 'address', 'phoneNumber', 'email'];
    const user: Indexable<{}> = await User.findOne({ _id: userId });

    if (!user) {
      return res.status(404).send({ err: 'User not found' });
    }

    updates.forEach((updateKey: string) => {
      const updateValue = req.body[updateKey];

      if (updateValue && validUpdateValues.includes(updateKey)) {
        user[updateKey] = updateValue;
      }
    });

    await user.save();
    return res.send({ user });
  } catch (error) {
    console.log(error);
    return res.status(400).send({ error });
  }
});

export default router;
