export default {
  get: jest.fn(() => Promise.resolve({ data: null })),
  post: jest.fn(() => Promise.resolve({ data: null })),
  patch: jest.fn(() => Promise.resolve({ data: null })),
  put: jest.fn(() => Promise.resolve({ data: null })),
};
