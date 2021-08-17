import { afterEach, describe, expect, it } from "@jest/globals";
import { render, cleanup, fireEvent } from '@testing-library/react';

import { NavbarDropdown } from "./NavbarDropdown";

const columns = [
  { name: 'Column 1', image: 'imagePath', url: '' }
];

const footerItems = [
  { name: 'Footer Item 1', image: 'imagePath', url: '' }
];

// helper to check contents aren't visible
const checkAllContents = (selector, matcher) => {
  columns.forEach(column => {
    expect(selector(column.name))[matcher]();
  });
  footerItems.forEach(footerItem => {
    expect(selector(footerItem.name))[matcher]();
  });
}

describe('NavbarDropdown', () => {
  afterEach(() => {
    cleanup();
  });

  it('should initially only display the label', () => {
    const { getByText, queryByText } = render(
      <NavbarDropdown columns={columns} footerItems={footerItems} label="Games" />
    );
    expect(getByText('Games')).toBeDefined();

    checkAllContents(queryByText, 'toBeNull');
  });

  it('should display the columns and footer items when clicking the label', () => {
    const { getByText } = render(
      <NavbarDropdown columns={columns} footerItems={footerItems} label="Games" />
    );
    const label = getByText('Games');

    fireEvent.click(label);

    checkAllContents(getByText, 'toBeDefined');
  });

  it('should hide the contents if clicking away from the component', () => {
    const { getByText, queryByText } = render(
      <div>
        <span>Click Me!</span>
        <NavbarDropdown columns={columns} footerItems={footerItems} label="Games" />
      </div>
    );

    // show contents
    const label = getByText('Games');
    fireEvent.click(label);

    // click external element
    const externalElement = getByText('Click Me!');
    fireEvent.mouseDown(externalElement);

    checkAllContents(queryByText, 'toBeNull');
  });

  it('should hide the contents when clicking the label/label contents if the contents are visible', () => {
    // i.e. testing that the mousedown listener doesn't interfere with hiding the contents
    const { getByTestId, getByText, queryByText } = render(
      <NavbarDropdown columns={columns} footerItems={footerItems} label="Games" />
    );
    const label = getByText('Games');
    const toggleIcon = getByTestId('toggle');

    fireEvent.click(label);
    // (mousedown listener ignored)
    checkAllContents(getByText, 'toBeDefined');
    fireEvent.click(label); // contents hidden again
    checkAllContents(queryByText, 'toBeNull');

    // toggle arrow
    fireEvent.click(label);
    checkAllContents(getByText, 'toBeDefined');
    fireEvent.click(toggleIcon);
    checkAllContents(queryByText, 'toBeNull');
  });
});