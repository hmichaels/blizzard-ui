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
const expectContentsToNotBeVisible = selector => {
  columns.forEach(column => {
    expect(selector(column.name)).toBeNull();
  });
  footerItems.forEach(footerItem => {
    expect(selector(footerItem.name)).toBeNull();
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

    expectContentsToNotBeVisible(queryByText);
  });

  it('should display the columns and footer items when clicking the label', () => {
    const { getByText } = render(
      <NavbarDropdown columns={columns} footerItems={footerItems} label="Games" />
    );
    const label = getByText('Games');

    fireEvent.click(label);

    // columns should be visible
    columns.forEach(column => {
      expect(getByText(column.name)).toBeDefined();
    });

    // footer items should be visible
    footerItems.forEach(footerItem => {
      expect(getByText(footerItem.name)).toBeDefined();
    });
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

    expectContentsToNotBeVisible(queryByText);
  });

  it('should hide the contents when clicking the label if the contents are visible', () => {
    // i.e. testing that the mousedown listener doesn't interfere with hiding the contents
    const { getByText, queryByText } = render(
      <NavbarDropdown columns={columns} footerItems={footerItems} label="Games" />
    );
    const label = getByText('Games');

    fireEvent.click(label); // contents visible

    // (mousedown listener ignored)

    fireEvent.click(label); // contents hidden again

    expectContentsToNotBeVisible(queryByText);
  });
});