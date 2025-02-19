import React, { ReactNode } from "react";
import styles from "./atom.module.css";
import classNames from "classnames";

interface TypographyProps {
  children: ReactNode;
  className?: string;
}

type TypoType =
  | "Head1"
  | "Head2"
  | "Head3"
  | "SubTitle1"
  | "SubTitle2"
  | "SubTitle3"
  | "P1"
  | "P2"
  | "P3"
  | "Span1"
  | "Span2"
  | "SpanMid1"
  | "SpanMid2";

const typoTypeMap: Record<
  TypoType,
  { tag: keyof JSX.IntrinsicElements; style: string }
> = {
  Head1: { tag: "p", style: styles.head1 },
  Head2: { tag: "h2", style: styles.head2 },
  Head3: { tag: "h3", style: styles.head3 },
  SubTitle1: { tag: "h4", style: styles.subtitle1 },
  SubTitle2: { tag: "h5", style: styles.subtitle2 },
  SubTitle3: { tag: "h6", style: styles.subtitle3 },
  P1: { tag: "p", style: styles.p1 },
  P2: { tag: "p", style: styles.p2 },
  P3: { tag: "p", style: styles.p3 },
  Span1: { tag: "span", style: styles.span1 },
  Span2: { tag: "span", style: styles.span2 },
  SpanMid1: { tag: "span", style: styles.spanMid1 },
  SpanMid2: { tag: "span", style: styles.spanMid2 },
};

const Typography = ({
  type,
  children,
  className,
}: TypographyProps & { type: TypoType }) => {
  const { tag, style } = typoTypeMap[type];

  return React.createElement(
    tag,
    { className: classNames(style, className) },
    children
  );
};

export default Typography;
