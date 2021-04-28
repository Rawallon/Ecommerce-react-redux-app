import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@admin.com',
    password: bcrypt.hashSync('123123', 10),
    isAdmin: true,
  },
  {
    name: 'John Doe',
    email: 'jDoe@email.com',
    password: bcrypt.hashSync('123123', 10),
  },
  {
    name: 'Dummy Acc',
    email: 'dummy@email.com',
    password: bcrypt.hashSync('12345', 10),
  },
];

export default users;
