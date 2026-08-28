import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type CartItem = {
  id: string;
  productId: string;
  brand: string;
  title: string;
  variant?: string;
  price: number;
  compareAtPrice?: number;
  quantity: number;
  image: string;
  currencySymbol: string;
  kind: "bundle" | "upsell";
};

type CartState = {
  items: CartItem[];
  count: number;
  subtotal: number;
  isOpen: boolean;
  open: () => void;
  close: () => void;
  addItems: (items: Omit<CartItem, "id">[]) => void;
  updateQuantity: (id: string, quantity: number) => void;
  removeItem: (id: string) => void;
  clear: () => void;
};

const CartContext = createContext<CartState | null>(null);
const STORAGE_KEY = "levitate-cart-v1";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setItems(JSON.parse(raw) as CartItem[]);
    } catch {
      /* ignore malformed storage */
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      /* ignore quota errors */
    }
  }, [items]);

  const addItems = useCallback((incoming: Omit<CartItem, "id">[]) => {
    setItems((prev) => {
      const next = [...prev];
      for (const item of incoming) {
        const id = `${item.productId}|${item.kind}|${item.variant ?? item.title}`;
        const idx = next.findIndex((i) => i.id === id);
        if (idx >= 0) {
          const existing = next[idx]!;
          next[idx] = { ...existing, quantity: existing.quantity + item.quantity };
        } else {
          next.push({ ...item, id });
        }
      }
      return next;
    });
  }, []);

  const updateQuantity = useCallback((id: string, quantity: number) => {
    setItems((prev) =>
      quantity <= 0
        ? prev.filter((i) => i.id !== id)
        : prev.map((i) => (i.id === id ? { ...i, quantity } : i)),
    );
  }, []);

  const removeItem = useCallback((id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  }, []);

  const clear = useCallback(() => setItems([]), []);

  const value = useMemo<CartState>(
    () => ({
      items,
      count: items.reduce((n, i) => n + (i.kind === "bundle" ? i.quantity : 0), 0),
      subtotal: items.reduce((n, i) => n + i.quantity * i.price, 0),
      isOpen,
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
      addItems,
      updateQuantity,
      removeItem,
      clear,
    }),
    [items, isOpen, addItems, updateQuantity, removeItem, clear],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
