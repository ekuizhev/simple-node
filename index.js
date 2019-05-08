const app = require('./app');

const port = process.env.PORT || 5555;


app.listen(port, (err) => {
  if (err) throw err;

  // eslint-disable-next-line no-console
  console.log(`Server is listening on ${port}...`);
});
