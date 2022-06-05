import * as React from 'react';

export type EitherProps = React.PropsWithChildren<{
  val: unknown;
}>;

export function Either({ val, children }: EitherProps) {
  const Children = React.Children.toArray(children).filter(
    React.isValidElement
  );
  const [First, Second] = Children;

  if (
    Children.length === 0 ||
    !React.isValidElement(First) ||
    !React.isValidElement(Second)
  ) {
    throw new Error(
      '`Either` needs at least 2 children elements for being able to render something'
    );
  }

  if (Children.length > 2) {
    console.warn(
      'The third children passed to `Either` will never be rendered, it should take only 2 children'
    );
  }

  return Boolean(val) ? <>{First}</> : <>{Second}</>;
}

Either.displayName = 'Either';
