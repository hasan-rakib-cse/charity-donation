import './App.css';
import TopHeader from './components/TopHeader/TopHeader';
import MainHeader from './components/MainHeader/MainHeader';
import MainSection from './components/MainSection/MainSection';
import TeamMember from './components/OurTeamMember/TeamMember';
import Goal from './components/OurGoal/Goal';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
       <TopHeader />
       <MainHeader />
       <MainSection />
       <TeamMember />
       <Goal />
       <Footer />
    </div>
  );
}

export default App;
