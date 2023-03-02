import { useContext, createContext } from "react";

export type LoadingContextType = {
  loading: boolean;
  setLoading: (status: boolean) => void | null;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const defaultSetLoadingFn = (status: boolean) => null

export const LoadingContext = createContext<LoadingContextType>({
  loading: false,
  setLoading: defaultSetLoadingFn
});

export const useLoading = () => useContext(LoadingContext);