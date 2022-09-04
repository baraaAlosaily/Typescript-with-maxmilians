import {Router} from 'express';
import {createTodo,getTodo} from '../controller/todos.js'

const router=Router();

router.post('/',createTodo)

router.get('/',getTodo);

router.patch('/:id')

router.delete('/:id')

export default router;