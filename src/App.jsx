import './App.css';
import Navbar from './components/Navbar';
import PhoneForm from './components/PhoneForm';

function App() {
  return (
    <>
      <Navbar />
      <div className="app-container">
        <h2>
          Simple. Secure. Fast.
          <br />
          Start a whatsapp chat!
        </h2>

        <p>
          An easy and fast solution to avoid needing to add contacts before
          writing to them through WhatsApp.
          <br />
          <br />
          You can now start any chat using the form below, so you will keep your
          contact list as clean as a whistle. Keep your phone secure! When
          clicking on <b>"Launch chat"</b>, you will be redirected to an
          official WhatsApp link.
        </p>

        <PhoneForm />
      </div>
    </>
  );
}

export default App;
