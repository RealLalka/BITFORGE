import { createContext, useContext, ReactNode } from 'react';

interface ScrollLockContextType {
  scrollLocked: boolean;
}

const ScrollLockContext = createContext<ScrollLockContextType>({ scrollLocked: false });

export function ScrollLockProvider({ children, scrollLocked }: { children: ReactNode; scrollLocked: boolean }) {
  return (
    <ScrollLockContext.Provider value={{ scrollLocked }}>
      {children}
    </ScrollLockContext.Provider>
  );
}

export function useScrollLock() {
  return useContext(ScrollLockContext);
}
