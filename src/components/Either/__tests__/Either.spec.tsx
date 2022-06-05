import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Either, EitherProps } from '../Either';

describe('Either', () => {
  let props: EitherProps;

  beforeAll(() => {
    props = {
      val: true,
    };
  });

  test.each([true, false])(
    'should throw an error if there is only 1 child and `val` is `%p`',
    val => {
      expect(() =>
        render(
          <Either val={val}>
            <>A</>
          </Either>
        )
      ).toThrow(
        '`Either` needs at least 2 children elements for being able to render something'
      );
    }
  );

  test.each([true, false])(
    'should throw an error if there are no children and `val` is `%p`',
    val => {
      expect(() => render(<Either val={val}></Either>)).toThrow(
        '`Either` needs at least 2 children elements for being able to render something'
      );
    }
  );

  test.each([true, false])(
    'should log a warning if more than 3 children are passed in and `val` is `%p`',
    val => {
      const warn = jest.spyOn(console, 'warn').mockImplementation(() => {});
      render(
        <Either val={val}>
          <>A</>
          <>B</>
          <>C</>
        </Either>
      );

      expect(warn).toHaveBeenCalledTimes(1);
      expect(warn).toHaveBeenCalledWith(
        'The third children passed to `Either` will never be rendered, it should take only 2 children'
      );
      warn.mockReset();
    }
  );

  test.each([true, {}, [], 'copy', 1])(
    'renders the first children if `val` as `%p` is not `falsy`',
    val => {
      props.val = val;
      render(
        <Either {...props}>
          <div>A</div>
          <div>B</div>
        </Either>
      );

      expect(screen.getByText('A')).toBeDefined();
      expect(screen.queryByText('B')).toBeNull();
    }
  );

  test.each([undefined, false, null, '', 0])(
    'does not render the children if `val` is `%p`',
    val => {
      props.val = val;
      render(
        <Either {...props}>
          <div>A</div>
          <div>B</div>
        </Either>
      );

      expect(screen.getByText('B')).toBeDefined();
      expect(screen.queryByText('A')).toBeNull();
    }
  );
});
