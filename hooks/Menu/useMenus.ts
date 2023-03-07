import { getAllMenusApi } from "@/api/menus";
import { toast } from "@/utils/toast";
import { useQuery } from "@tanstack/react-query";

const useMenus = () => {
  const result = useQuery(['menus'], getAllMenusApi, {
    select: (data) => data.data,
    onError: (err: any) => {
      toast(err.error, "error")
    },
  })

  return result;
};

export default useMenus