import LogoHeader from '../components/LogoHeader';
import TextAreaContent from '../components/TextAreaContent';
import ContactInfo from '../components/ContactInfo';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <LogoHeader />
      <TextAreaContent />
      <ContactInfo />
    </div>
  );
}
