import { TokenProps } from "./utils.type";

export interface GetListFunctionProps extends TokenProps {
  category: string;
  page: number;
  pageSize: number;
}

export interface CreateReferenceFunctionProps extends TokenProps {
  name: string;
  url: string;
  description: string;
  category: string;
}
