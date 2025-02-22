import { useContext, useState } from 'react';
import { filterItems } from '../lib/items';
import { toKebabCase } from '../lib/kebab-case';
import Item from './item';
// import { ItemContext } from '../context';

type ItemListPropsType = {
  title: string;
  items: Item[];
};

const ItemList = ({ title = 'Items', items }: ItemListPropsType) => {
  // const { update, remove } = useContext(ItemContext);
  const [filter, setFilter] = useState('');
  const id = toKebabCase(title);

  const filteredItems = filterItems(items, { name: filter });
  const isEmpty = !filteredItems.length;

  return (
    <section id={id} className="w-full border-2 border-primary-200 p-4">
      <header className="mb-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        <label htmlFor={`${id}-filter`} className="hidden"></label>
        <input
          id={`${id}-filter`}
          placeholder="Filter"
          className="my-2 w-full py-1"
          value={filter}
          onChange={(event) => setFilter(event.target.value)}
        />
      </header>
      <ul className="flex flex-col gap-2">
        {filteredItems.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
      {isEmpty && <p className="text-primary-400">(Nothing to show.)</p>}
    </section>
  );
};

export default ItemList;
