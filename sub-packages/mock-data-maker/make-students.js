import * as uuid from 'uuid';
import faker from 'faker';

faker.local = 'ja';

const countries = ['Japan', 'USA', 'France'];

const makeItem = () => {
  return {
    id: uuid.v4(),
    name: `${faker.name.lastName()} ${faker.name.firstName()}`,
    country: countries[Math.floor(Math.random() * countries.length)],
  };
};

(() => {
  const items = Array.from(Array(100)).map(makeItem);
  const res = {
    total: items.length,
    items,
  };
  console.log(JSON.stringify(res));
})();
