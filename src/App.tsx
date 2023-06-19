import HeroSection from '../src/components/heroComponent';
import Features from './components/featuresComponent';
import CallToAction from './components/callToActionComponent';
import Process from '../src/components/processComponent';
import Form from '../src/components/formComponent';
import Footer from './components/footerComponent';


export default function MyApp() {
  return (
    <div>
      <HeroSection />
      <Features />
      <CallToAction/>
      <Process />
      <Form/>
      <Footer/>
    </div>
  );
}
