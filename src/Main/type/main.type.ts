import { TokenProps } from "../../Utils/type/utils.type";

export interface GetListFunctionProps extends TokenProps {
  category: string;
  page: number;
  pageSize: number;
}
