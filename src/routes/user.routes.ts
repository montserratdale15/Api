import { Router } from 'express';
import { UserController } from '../controllers/user.controller';

const router = Router();

router.get('/', UserController.getAll);
router.post('/', UserController.create);
router.get('/:id', UserController.getById);
router.patch('/:id', UserController.updatePartial);
router.delete('/:id', UserController.deleteLogical);

export default router;