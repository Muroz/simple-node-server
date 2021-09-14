import { Response, NextFunction, Request } from 'express';
import User from '../models/user/user';

export const hasValidIdParam = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId: string | undefined = req.params.id;

    if (!userId) {
      return res.status(404).send({ err: 'No user id provided' });
    }

    const user = await User.findOne({ _id: userId });

    if (!user) {
      return res.status(404).send({ err: 'User not found' });
    }

    return next();
  } catch (error) {
    return res
      .status(500)
      .send({
        error:
          'Something went wrong, please double check the id provided and try again!',
      });
  }
};
