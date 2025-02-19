import { TokenProps } from "../../../types/utils.type";

export interface GetListFunctionProps extends TokenProps {
  category: string;
  page: number;
  pageSize: number;
}
