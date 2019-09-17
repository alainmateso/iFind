import express from 'express';

const router = express.Router();

router.get('/', (req, res) => res.status(200).send({ message: 'This is ^Caret Lost and Found' }));

export default router;
