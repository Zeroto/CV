import React, {useEffect, useRef, useState, useCallback} from 'react';
import styles from  './App.module.css';
import { BrowserRouter as Router} from "react-router-dom";
import Menu from './Menu';
import Home from './Home';
import Education from './Education';
import WorkHistory from './WorkHistory';
import Skills from './Skills';

import { PromiseWrapper } from './Util';

const p = fetch("/data.json").then(res => res.json());

interface SectionProps {
  title: string
  onVisiblilityChanged: (title: string, visible: boolean) => void
}

const Section: React.FC<SectionProps> = ({title, onVisiblilityChanged, children}) => {
  const containerElement = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (containerElement.current) {
      const elem = containerElement.current;
      const observer = new IntersectionObserver((entries) => {
        if (entries.some(e => e.isIntersecting)){
          console.log(`${title} became visible`); 
          onVisiblilityChanged(title, true);
        } else {
          console.log(`${title} became invisible`); 
          onVisiblilityChanged(title, false);
        }
      }, {threshold:[0]});
      observer.observe(elem);

      return () => observer.unobserve(elem);
    }
  }, [containerElement, onVisiblilityChanged, title]);

  return (
    <div ref={containerElement} className={styles.section} id={title.toLocaleLowerCase().replace(' ', '_')}>
      <h2>{title}</h2>
      {children}
    </div>
  )
}

const SectionToSortNumber = (section: string) => {
  switch (section) {
    case "Home": return 0;
    case "Education": return 1;
    case "Work history": return 2;
    case "Skills": return 3;
    default: return 4;
  }
} 

const App: React.FC = () => {
  const [activeItems, setActiveItems] = useState<string[]>([]);
  const setActiveItem = useCallback((title: string, visible: boolean) => {
    setActiveItems(activeItems => {
      if (!visible && activeItems.includes(title)) {
        return (activeItems.filter(i => i!== title));
      } else if (visible && !activeItems.includes(title)) {
        return (activeItems.concat([title]).sort((a,b) => SectionToSortNumber(a) - SectionToSortNumber(b)));
      }
      return activeItems;
    });
  }, []);
  const activeItem = activeItems.length> 0 ? activeItems[activeItems.length-1] : "home";
  return (
    <div className={styles.App}>
      <Router>
        <Menu activeItem={activeItem}/>
        <div className={styles.content}>
          <Section title="Home" onVisiblilityChanged={setActiveItem}>
            <Home/>
          </Section>
          <Section title="Education" onVisiblilityChanged={setActiveItem}>
            <PromiseWrapper data={p}><Education/></PromiseWrapper>
          </Section>
          <Section title="Work History" onVisiblilityChanged={setActiveItem}>
            <PromiseWrapper data={p}><WorkHistory/></PromiseWrapper>
          </Section>
          <Section title="Skills" onVisiblilityChanged={setActiveItem}>
            <PromiseWrapper data={p}><Skills/></PromiseWrapper>
          </Section>
        </div>
      </Router>
    </div>
  );
};

export default App;
