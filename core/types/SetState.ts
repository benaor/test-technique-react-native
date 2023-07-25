export type SetState<T> = (fn: (state: T) => Partial<T>) => void;
