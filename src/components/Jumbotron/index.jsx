/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import { useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import {
  jumbotron,
  jumbotronTabs,
  jumbotronTab,
  jumbotronPanel,
  selected,
  card,
  cardTitle,
  cta,
  featuredImage,
} from './style.module.css';

const LEFT = 37;
const RIGHT = 39;

const changeTab = (event) => {
  const isDirectionPressed = (event.keyCode === LEFT || event.keyCode === RIGHT);
  if (!isDirectionPressed) {
    return;
  }
  if (event.keyCode === LEFT) {
    event.target.previousElementSibling?.focus();
  }
  if (event.keyCode === RIGHT) {
    event.target.nextElementSibling?.focus();
  }
  event.preventDefault();
};

const Jumbotron = ({ items }) => {
  const [currentItem, setCurrentItem] = useState(1);

  const tabs = items.map((item) => (
    <button
      aria-controls={`panel${item.id}`}
      aria-selected={item.id === currentItem}
      className={`${jumbotronTab} ${item.id === currentItem ? selected : ''}`}
      id={`tab${item.id}`}
      key={`tab${item.id}`}
      onClick={() => setCurrentItem(item.id)}
      onKeyDown={changeTab}
      role="tab"
      tabIndex={item.id === currentItem ? 0 : -1}
      type="button"
    >
      {item.title}
    </button>
  ));

  const panels = items.map((item) => (
    <article className={`${jumbotronPanel} ${item.id === currentItem ? selected : ''}`} tabIndex="0" role="tabpanel" id={`panel${item.id}`} key={`panel${item.id}`} aria-labelledby={`tab${item.id}`}>
      <div className={card}>
        <h2 className={cardTitle}>{item.title}</h2>
        <p className="cardDescription">{item.description}</p>
        {item.cta && <p className="cardCta">{item.cta.lead}<Link href={item.cta.url}><a href={item.cta.url} className={cta}>{item.cta.label}</a></Link></p>}
      </div>
      {item.image
        && (
          <div className={featuredImage}>
            <img src={item.image} alt="" />
          </div>
        )}
    </article>
  ));

  return (
    <header className={jumbotron}>
      <article role="tablist" aria-label="Features">
        <section className={jumbotronTabs}>
          {tabs}
        </section>
        <section className="platform">
          {panels}
        </section>
      </article>
    </header>
  );
};

export default Jumbotron;

Jumbotron.propTypes = {
  items: PropTypes.arrayOf.isRequired,
};
