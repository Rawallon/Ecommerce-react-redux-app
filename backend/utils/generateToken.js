import jwt from 'jsonwebtoken';

export default function generateToken(id) {
  return jwt.sign({ id }, process.env.JWT_TOKEN, { expiresIn: '2d' });
}
