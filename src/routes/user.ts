import { Router } from 'express';
import { hasValidIdParam } from '../middleware/validation';
import { Indexable } from '../types/interfaces';
import User from '../models/user/user';

const router = Router();

router.get('/users/:id', hasValidIdParam, async (req, res) => {
  const userId: string = req.params.id;

  try {
    const user = await User.findOne({ _id: userId });

    return res.send({ user });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send({ error: 'Something went wrong, please try again!' });
  }
});

router.get('/users', async (req, res) => {
  try {
    const users = await User.find();

    return res.send({ users });
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

router.patch('/users/:id', hasValidIdParam, async (req, res) => {
  const updates = Object.keys(req.body);
  const userId: string = req.params.id;

  try {
    const validUpdateValues = ['name', 'address', 'phoneNumber', 'email'];
    const user: Indexable<{}> = await User.findOne({ _id: userId });

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

router.delete('/users/:id', hasValidIdParam, async (req, res) => {
  try {
    await User.findOneAndDelete({
      _id: req.params.id,
    });

    return res.status(200).send({ message: 'User deleted successfully' });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send({ error: 'Something went wrong, please try again!' });
  }
});

export default router;
