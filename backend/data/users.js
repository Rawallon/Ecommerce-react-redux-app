import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@admin.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'John Doe',
    email: 'jDoe@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Rawallon Cardoso',
    email: 'rawallon@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
