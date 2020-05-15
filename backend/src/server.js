const app = require('./app');

const port = 3333;

// eslint-disable-next-line no-console
app.listen(port, () => {
  console.log(`Server On in port ${port}`);
});
