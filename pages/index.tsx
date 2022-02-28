import { useSession } from 'next-auth/react';
import Head from 'next/head';
import { AwesomeLink } from '../components/AwesomeLink';
import Modal from '../components/Modal';
import Hero from '../components/HeroSection';
import Layout from '../components/Layout';
import Header from '../components/Layout/Header';
import Sidebar from '../components/Sidebar';
import { links } from '../data/links';

export default function Home() {
  const { data: session, status } = useSession();
  return (
    <div>
      <Layout />
    </div>
  );
}
