import React from 'react';

import { NavbarDropdown } from '../components/NavbarDropdown/NavbarDropdown';

// game logos
import logo_diablo2 from './assets/game_logo-diablo_2_resurrected.png';
import logo_overwatch2 from './assets/game_logo-overwatch_2.png';
import logo_overwatch from './assets/game_logo-overwatch.png';
import logo_wow from './assets/game_logo-world_of_warcraft.png';
import logo_hearthstone from './assets/game_logo-hearthstone.png';
import logo_hots from './assets/game_logo-heroes_of_the_storm.png';
import logo_warcraft3 from './assets/game_logo-warcraft_3_reforged.png';
import logo_diablo4 from './assets/game_logo-diablo_4.png';
import logo_diabloimmortal from './assets/game_logo-diablo_immortal.png';
import logo_diablo3 from './assets/game_logo-diablo_3.png';
import logo_starcraft2 from './assets/game_logo-starcraft_2.png';
import logo_starcraftremastered from './assets/game_logo-starcraft_remastered.png';
import logo_arcadecollection from './assets/game_logo-blizzard_arcade_collection.png';

// material icons
import icon_moregames from './assets/apps_24dp.svg';
import icon_downloads from './assets/file_download_24dp.svg';
import icon_gameforums from './assets/forum_24dp.svg';

// blizzard icons
import icon_battlenet from './assets/battle_net_24dp.svg';

const columns = [
  {
    image: logo_diablo2,
    name: 'Diablo® II: Resurrected™'
  },
  {
    image: logo_overwatch2,
    name: 'Overwatch® 2'
  },
  {
    image: logo_overwatch,
    name: 'Overwatch®'
  },
  {
    image: logo_wow,
    name: 'World of Warcraft®'
  },
  {
    image: logo_hearthstone,
    name: 'Hearthstone®'
  },
  {
    image: logo_hots,
    name: 'Heroes of the Storm®'
  },
  {
    image: logo_warcraft3,
    name: 'Warcraft® III: Reforged™'
  },
  {
    image: logo_diablo4,
    name: 'Diablo® IV'
  },
  {
    image: logo_diabloimmortal,
    name: 'Diablo® Immortal™'
  },
  {
    image: logo_diablo3,
    name: 'Diablo® III'
  },
  {
    image: logo_starcraft2,
    name: 'StarCraft® II'
  },
  {
    image: logo_starcraftremastered,
    name: 'Starcraft® Remastered'
  },
  {
    image: logo_arcadecollection,
    name: 'Blizzard® Arcade Collection'
  }
];

const footerItems = [
  {
    image: icon_moregames,
    name: 'More Games'
  },
  {
    image: icon_battlenet,
    name: 'Battle.net App'
  },
  {
    image: icon_downloads,
    name: 'Downloads'
  },
  {
    image: icon_gameforums,
    name: 'Game Forums'
  }
];

export default {
  title: 'Components/NavbarDropdown',
  component: NavbarDropdown,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  },
  argTypes: {}
};

const Template = (args) => <NavbarDropdown {...args} />;

export const SmallContents = Template.bind({});
SmallContents.args = {
  columns,
  footerItems,
  label: 'Games'
};
