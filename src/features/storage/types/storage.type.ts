export interface GetListFunctionProps {
  category: string;
  page: number;
  pageSize: number;
}

export interface ListInterface {
  referenceSeq: string;
  referenceUrl: string;
  createdAt: string;
  referenceCategory: string;
  referenceMemo: string | null;
  referenceName: string | null;
}
