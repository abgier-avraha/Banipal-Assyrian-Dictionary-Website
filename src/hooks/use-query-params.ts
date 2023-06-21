import { useRouter } from "next/router";

export const useQueryParams = <T extends object>(): T => {
  const router = useRouter();
  return router.query as any;
};
