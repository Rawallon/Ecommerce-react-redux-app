//Credits to mont-sanitize
// https://github.com/vkarpov15/mongo-sanitize
export default function sanitize(v) {
  if (v instanceof Object) {
    for (var key in v) {
      if (/^\$/.test(key)) {
        delete v[key];
      } else {
        sanitize(v[key]);
      }
    }
  }
  return v;
}
