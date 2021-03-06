import React from 'react';

import {
  GuideDemo,
  GuidePage,
  GuideSection,
  GuideSectionTypes,
  GuideText,
} from '../../components';

const toggleButtonHtml = require('./toggle_button.html');
const toggleButtonJs = require('raw!./toggle_button.js');

export default props => (
  <GuidePage title={props.route.name}>
    <GuideSection
      title="ToggleButton"
      source={[{
        type: GuideSectionTypes.HTML,
        code: toggleButtonHtml,
      }]}
    >
      <GuideText>
        You can use this button to reveal and hide content.
      </GuideText>

      <GuideDemo
        html={toggleButtonHtml}
        js={toggleButtonJs}
      />
    </GuideSection>
  </GuidePage>
);
