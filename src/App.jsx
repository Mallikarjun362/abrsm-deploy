import { useState } from 'react'
import HomePage from './krupa_code/HomePage.jsx';
import AcademicPage  from './krupa_code/AcademicPage.jsx';
import ResolutionPage from './krupa_code/ResolutionPage.jsx';
import SummaryPage from './krupa_code/SummaryPage.jsx';
import Page3 from './krupa_code/Page3.jsx';
import Page4 from './krupa_code/page4.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <HomePage/>
      <AcademicPage/>
      <ResolutionPage/>
      <SummaryPage/>
      <Page3/>
      <Page4/>
    </main>
  )
}

export default App;
