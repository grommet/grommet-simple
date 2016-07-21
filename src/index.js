import React from 'react';
import ReactDOM from 'react-dom';

import EditIcon from 'grommet/components/icons/base/Edit';

import Anchor from 'grommet/components/Anchor';
import Grommet from 'grommet/components/Grommet';
import Section from 'grommet/components/SectionNew';

import styles from './index.css';

const Main = () => {
  return (
    <Grommet>
      <h1>Anchors</h1>

      <h3>Default</h3>
      <div className={styles.example}>
        <Anchor href="http://google.com">Child text</Anchor>
      </div>

      <h3>Primary, Label</h3>
      <div className={styles.example}>
        <Anchor href="http://google.com" label="Label" primary />
      </div>

      <h3>Primary, Custom Icon</h3>
      <div className={styles.example}>
        <Anchor href="http://google.com" icon={<EditIcon />} primary />
      </div>

      <h3>Icon, Label</h3>
      <div className={styles.example}>
        <Anchor href="http://google.com" icon={<EditIcon />} label="Edit" />
      </div>

      <h3>Icon, Label, Reverse</h3>
      <div className={styles.example}>
        <Anchor href="http://google.com" icon={<EditIcon />} label="Edit"
          reverse={true} />
      </div>

      <h3>Icon</h3>
      <div className={styles.example}>
        <Anchor href="http://google.com" icon={<EditIcon />} />
      </div>

      <h3>Disabled</h3>
      <div className={styles.example}>
        <Anchor primary disabled label="Delete" />
      </div>

      <h2>Colored Context</h2>
      <Section colorIndex="brand">
        <div className={styles.example}>
          <Anchor href="http://google.com">Child text</Anchor>
        </div>

        <div className={styles.example}>
          <Anchor href="http://google.com" label="Label" primary />
        </div>

        <div className={styles.example}>
          <Anchor href="http://google.com" icon={<EditIcon />} primary />
        </div>
      </Section>
    </Grommet>
  );
};

const element = document.getElementById('content');
ReactDOM.render(React.createElement(Main), element);
