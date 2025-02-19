import { TokenProps } from "../../../types/utils.type";

export interface CreateReferenceFunctionProps extends TokenProps {
  name: string;
  url: string;
  description: string;
  category: string;
}
