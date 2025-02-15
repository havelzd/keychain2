import { FastifyInstance } from 'fastify';
import { login, signup } from '../controllers/auth.controller';

// register /api/v1/auth login and register routes
export default async function (fastify: FastifyInstance) {
  fastify.post('/login', login);
  fastify.post('/signup', signup);
}
