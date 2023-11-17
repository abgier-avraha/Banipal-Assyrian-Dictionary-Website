import { useRouter } from "next/router";

export const useQueryParams = <T extends object>(): Partial<T> => {
  const router = useRouter();
  return router.query as Partial<T>;
};
