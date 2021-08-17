import { afterEach, describe, expect, it } from "@jest/globals";
import { render, cleanup, fireEvent } from '@testing-library/react';

import { LinkButton } from "./LinkButton";

describe('LinkButton', () => {
  afterEach(() => {
    cleanup();
  });

  it('should render a link with props.children as its content', () => {
    const { getByText } = render(
      <LinkButton onClick={() => null}>
        Click Me!
      </LinkButton>
    );
    expect(getByText('Click Me!')).toBeDefined();
  });

  it('should have an attribute for props.onClick or, if not present, props.url', () => {
    const onClick = jest.fn();
    const url = 'http://some-url/';

    const { getByText } = render(
      <LinkButton onClick={onClick} url={url}>
        Click Me!
      </LinkButton>
    );

    const el = getByText('Click Me!');

    // no href
    expect(el).not.toHaveAttribute('href');

    // onClick should be called with props.url as its argument
    fireEvent.click(el);
    expect(onClick).toHaveBeenCalledWith(url);
  });

  it('should have an href attribute containing props.url if only a url is supplied', () => {
    const url = 'http://some-url/';

    const { getByText } = render(
      <LinkButton url={url}>
        Click Me!
      </LinkButton>
    );

    expect(getByText('Click Me!')).toHaveAttribute('href', url);
  });
});