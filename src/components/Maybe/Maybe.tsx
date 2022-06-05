import * as React from 'react';

export type MaybeProps = React.PropsWithChildren<{
  val: unknown;
}>;

export function Maybe({ val, children }: MaybeProps) {
  return Boolean(val) ? <>{children}</> : null;
}

Maybe.displayName = 'Maybe';
