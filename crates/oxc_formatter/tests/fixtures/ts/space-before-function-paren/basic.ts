function named(a: string, b: number): void {}

function anonymous() {}

class MyClass {
  fetchChanged(since: Date): void {}

  async asyncMethod(x: number): Promise<void> {}

  get value(): string { return ""; }

  set value(v: string) {}
}

interface Fetcher {
  fetchChanged(since: Date): void;
}

type FetchFn = (since: Date) => void;

const assigned = () => {};

const anonymousExpression = function () {};

const asyncArrow = async () => {};

const chained = (a: number) => (b: number) => a + b;

function wrapper() {
  return () => {};
}

callMe(() => {});

callMe(function () {});

const object = {
  method() {},
  property: function () {},
  get accessor() { return 1; },
};

interface Constructable {
  new (): object;
}

type Constructor = new () => object;
