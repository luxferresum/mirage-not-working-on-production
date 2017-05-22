export default function(server) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.

    Make sure to define a factory for each model you want to create.
  */

  server.createList('foo', 5).forEach(foo => {
    server.createList('bar', 3, {
      foo
    });
  });
}
