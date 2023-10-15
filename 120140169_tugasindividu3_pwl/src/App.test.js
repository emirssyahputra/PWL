import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import App from './App';
import Header from './beranda';
import MainContent from './Beranda';
import Footer from './Beranda';
import Kontak from './Kontak';

test('renders App component', () => {
  render(<App />);
  expect(screen.getByText('Tugas PWL RA Ke-3')).toBeInTheDocument();
  // Anda dapat menambahkan lebih banyak asersi sesuai kebutuhan.
});

test('renders Header component', () => {
  render(<Header />);
  expect(screen.getByText('Tugas PWL RA Ke-3')).toBeInTheDocument();
  // Anda dapat menambahkan lebih banyak asersi sesuai kebutuhan.
});

test('renders MainContent component', () => {
  render(<MainContent />);
  expect(screen.getByText('Website Sederhana Build By React JS')).toBeInTheDocument();
  // Anda dapat menambahkan lebih banyak asersi sesuai kebutuhan.
});

test('renders Footer component', () => {
  render(<Footer />);
  expect(screen.getByText('EmirssyahPutra (120140169) RA')).toBeInTheDocument();
  // Anda dapat menambahkan lebih banyak asersi sesuai kebutuhan.
});

test('renders Kontak component', () => {
  render(<Kontak />);
  expect(screen.getByText('Hubungi Saya')).toBeInTheDocument();
  // Anda dapat menambahkan lebih banyak asersi sesuai kebutuhan.
});

test('updates state when input fields are changed in Kontak component', () => {
  const { getByLabelText } = render(<Kontak />);
  // Tulis test case untuk Kontak komponen di sini.
});

test('displays sent message after form submission in Kontak component', () => {
  const { getByText, getByLabelText } = render(<Kontak />);
  // Tulis test case untuk Kontak komponen di sini.
});

test('displays the JumlahPesan component in Kontak component', () => {
  const { getByText } = render(<Kontak />);
  // Tulis test case untuk Kontak komponen di sini.
});
