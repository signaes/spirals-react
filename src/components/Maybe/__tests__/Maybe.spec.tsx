import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Maybe, MaybeProps } from '../Maybe';

describe('Maybe', () => {
  let props: MaybeProps;

  beforeAll(() => {
    props = {
      val: true,
      children: <div>Hello</div>,
    };
  });

  test.each([true, {}, [], 'copy', 1])(
    'renders the children if `val` as `%p` is not `falsy`',
    val => {
      props.val = val;
      render(<Maybe {...props} />);

      expect(screen.getByText('Hello')).toBeDefined();
    }
  );

  test.each([undefined, false, null, '', 0])(
    'does not render the children if `val` is `%p`',
    val => {
      props.val = val;
      render(<Maybe {...props} />);

      expect(screen.queryByText('Hello')).toBeNull();
    }
  );
});
