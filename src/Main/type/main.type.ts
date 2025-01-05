import { TokenProps } from "../../Utils/Type/utils.type";

export interface GetListFunctionProps extends TokenProps {
  category: string;
  page: number;
  pageSize: number;
}
