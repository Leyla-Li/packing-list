import { PropsWithChildren, createContext, useState } from 'react';
import {
  createItem,
  filterItems,
  updateItem,
  removeItem,
  getInitialItems,
} from './lib/items';

type ItemContextValueType = {
  items: Item[];
  add: (name: string) => void;
  update: (id: string, updates: Omit<Partial<Item>, 'id'>) => void;
  remove: (id: string) => void;
  unpackedItems: Item[];
  packedItems: Item[];
  markAllAsUnpacked: () => void;
};

export const ItemContext = createContext({} as ItemContextValueType);

const ItemProvider = ({ children }: PropsWithChildren) => {
  //eslint-disable-next-line
  const [items, setItems] = useState<Item[]>(getInitialItems());
  console.log();
  const add = (name: string) => {
    const item = createItem(name);
    setItems([...items, item]);
  };

  const update = (id: string, updates: Omit<Partial<Item>, 'id'>) => {
    setItems(updateItem(items, id, updates));
  };

  const remove = (id: string) => {
    setItems(removeItem(items, id));
  };

  const unpackedItems = filterItems(items, { packed: false });
  const packedItems = filterItems(items, { packed: true });

  const markAllAsUnpacked = () => {
    return setItems(items.map((item) => ({ ...item, packed: false })));
  };

  const value: ItemContextValueType = {
    items,
    add,
    update,
    remove,
    unpackedItems,
    packedItems,
    markAllAsUnpacked,
  };

  //type ItemState = typeof value

  return <ItemContext.Provider value={value}>{children}</ItemContext.Provider>;
};

export default ItemProvider;
