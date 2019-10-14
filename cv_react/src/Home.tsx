import React from 'react';

const Home: React.FC = () => (
  <div>
    <p>This page showcases the CV of Sander Homan. This project is being made using multiple frontends technologies to compare and experiment with the different technologies. The code for this page can be found <a href="https://github.com/Zeroto/CV">here</a>.</p>

    <p>This specific version has been built using React and the source is available <a href="https://github.com/Zeroto/CV/tree/master/cv_react">here</a>. The bootstrap was done using react-create-app.</p>

    <p>There are also versions available that have been made with different frontend libraries:
      <ul>
        <li><s>Vuejs: Page - <a href="https://github.com/Zeroto/CV/">Source</a></s></li>
        <li><s>Svelte: Page - <a href="https://github.com/Zeroto/CV/">Source</a></s></li>
      </ul>
    </p>
  </div>
)

export default Home;