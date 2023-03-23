function observe(source, next, error, complete) {
  source.forEach(data => {
    if (data > 2) {
      return error();
    }

    next(data);
  });

  complete();
}

observe([1,2,3], (data) => {
  console.log(data);
}, (error) => console.error('error'),
  () => console.log('complete')
)
