import React from 'react';

import EditIcon from 'grommet/components/icons/base/Edit';

import Anchor from 'grommet/components/Anchor';
import Grommet from 'grommet/components/Grommet';
import Section from 'grommet/components/SectionNew';

const padding = {'marginBottom': '24px'};

export default (props) => {
  return (
    <Grommet theme={props.theme}>
      <h1>Anchors</h1>

      <h3>Default</h3>
      <div style={padding}>
        <Anchor href="http://google.com">Child text</Anchor>
      </div>

      <h3>Primary, Label</h3>
      <div style={padding}>
        <Anchor href="http://google.com" label="Label" primary />
      </div>

      <h3>Primary, Custom Icon</h3>
      <div style={padding}>
        <Anchor href="http://google.com" icon={<EditIcon />} primary />
      </div>

      <h3>Icon, Label</h3>
      <div style={padding}>
        <Anchor href="http://google.com" icon={<EditIcon />} label="Edit" />
      </div>

      <h3>Icon, Label, Reverse</h3>
      <div style={padding}>
        <Anchor href="http://google.com" icon={<EditIcon />} label="Edit"
          reverse={true} />
      </div>

      <h3>Icon</h3>
      <div style={padding}>
        <Anchor href="http://google.com" icon={<EditIcon />} />
      </div>

      <h3>Disabled</h3>
      <div style={padding}>
        <Anchor primary disabled label="Delete" />
      </div>

      <h2>Colored Context</h2>
      <Section colorIndex="brand">
        <div style={padding}>
          <Anchor href="http://google.com">Child text</Anchor>
        </div>

        <div style={padding}>
          <Anchor href="http://google.com" label="Label" primary />
        </div>

        <div style={padding}>
          <Anchor href="http://google.com" icon={<EditIcon />} primary />
        </div>
      </Section>
    </Grommet>
  );
};
