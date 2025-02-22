import { useState, useContext } from 'react';

import Header from './header';
import ItemList from './item-list';
import MarkAllAsUnpacked from './mark-all-as-unpacked';
import NewItem from './new-item';
import { ItemContext } from '../context';

const Application = () => {
  const [newItemName, setNewItemName] = useState('');
  const { items, add, markAllAsUnpacked, packedItems, unpackedItems } =
    useContext(ItemContext);

  return (
    <main className="mx-auto flex flex-col gap-8 p-8 lg:max-w-4xl">
      <Header items={items} />
      <NewItem
        newItemName={newItemName}
        setNewItemName={setNewItemName}
        addItem={add}
      />
      <section className="flex flex-col gap-8 md:flex-row">
        <ItemList title="Unpacked Items" items={unpackedItems} />
        <ItemList title="Packed Items" items={packedItems} />
      </section>
      <MarkAllAsUnpacked onClick={markAllAsUnpacked} />
    </main>
  );
};

export default Application;
