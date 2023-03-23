class Observable {
  constructor(source) {
    this.source = source;
  }

  subscribe(next, error, complete) {
    for (let data of this.source) {
      next(data);
    }

    complete();
  }

  filter() {
    this.source = [...this.source].filter(data => data > 'h').join('');
    return this;
  }
}

const source = new Observable('Observable')
  .filter()
  .subscribe((data) => {
    console.log(data);
  }, () => { console.error('error') },
    () => { console.log('complete') }
  )
