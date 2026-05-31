import { Hero } from '../components/Hero';
import { Tours } from '../components/Tours';
import { Tips } from '../components/Tips';
import { BookingForm } from '../components/BookingForm';

export function Home() {
  return (
    <>
      <Hero />
      <Tours />
      <Tips />
      <BookingForm />
    </>
  );
}
