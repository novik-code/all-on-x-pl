// Centralna konfiguracja brandu — zeby-w-jeden-dzien.pl
// STRONA KRAJOWA (premium): All-on-4 / All-on-6 / All-on-X — stałe zęby w jeden dzień
// Intent KRAJOWY (bez geo-kapy lokalnej). Konwersja → klinika Mikrostomart Opole.

export const site = {
  url: 'https://zeby-w-jeden-dzien.pl',
  title: 'All-on-4, All-on-6, All-on-X — stałe zęby w jeden dzień | dr Marcin Nowosielski',
  shortTitle: 'Zęby w jeden dzień',
  description:
    'All-on-4, All-on-6, All-on-X — stały most na implantach i nowy uśmiech w jeden dzień. Niezależny przewodnik pacjenta: wskazania, przebieg, obciążenie natychmiastowe, koszt. Sygnowane przez lek. dent. Marcina Nowosielskiego, M.Sc. RWTH Aachen. Leczenie w klinice Mikrostomart.',
  ogImage: '/og-default.png',
  locale: 'pl-PL',
  // Autor wszystkich treści — Marcin Nowosielski (kanoniczny @id na nowosielski.pl/#person)
  // Wspólna tożsamość z całym ekosystemem — Google łączy E-E-A-T przez wspólny @id Physician.
  author: {
    name: 'Marcin Nowosielski',
    honorificPrefix: 'lek. dent.',
    honorificSuffix: 'M.Sc.',
    canonicalUrl: 'https://nowosielski.pl',
    canonicalId: 'https://nowosielski.pl/#person',
    jobTitle: 'Lekarz dentysta, implantolog, M.Sc. RWTH Aachen',
    image: '/dr-marcin.webp',
    email: 'kontakt@nowosielski.pl',
  },
  // Klinika konwersji — wszystkie CTA prowadzą tutaj. NAP identyczne w całym ekosystemie.
  clinic: {
    name: 'Mikrostomart',
    legalName: 'Mikrostomart — Klinika Stomatologii Premium',
    url: 'https://mikrostomart.pl',
    bookingUrl: 'https://mikrostomart.pl/rezerwacja',
    implantPageUrl: 'https://mikrostomart.pl/oferta/implantologia',
    implantLandingUrl: 'https://mikrostomart.pl/implanty-opole',
    contactUrl: 'https://mikrostomart.pl/kontakt',
    phone: '+48 570 270 470',
    phoneAlt: '+48 570 810 800',
    phoneHref: 'tel:+48570270470',
    email: 'gabinet@mikrostomart.pl',
    address: {
      street: 'ul. Centralna 33a',
      city: 'Opole',
      region: 'opolskie',
      postalCode: '45-940',
      country: 'PL',
    },
    geo: {
      latitude: 50.6751,
      longitude: 17.9213,
    },
    openingHours: [
      { day: 'Monday', opens: '09:00', closes: '20:00' },
      { day: 'Tuesday', opens: '09:00', closes: '20:00' },
      { day: 'Wednesday', opens: '09:00', closes: '20:00' },
      { day: 'Thursday', opens: '09:00', closes: '20:00' },
      { day: 'Friday', opens: '09:00', closes: '16:00' },
    ],
    gbpUrl: 'https://share.google/uqFxAL4vtBaH3ATbg',
    sameAs: [
      'https://share.google/uqFxAL4vtBaH3ATbg',
      'https://www.znanylekarz.pl/placowki/gabinet-mikrostomart-2',
      'https://www.facebook.com/mikrostomart',
      'https://www.instagram.com/mikrostomart_opole/',
    ],
  },
  // SEO — frazy KRAJOWE (premium, bez miasta)
  keywords: [
    'all-on-4',
    'all on four',
    'all-on-6',
    'all on six',
    'all-on-x',
    'stałe zęby w jeden dzień',
    'nowy uśmiech w jeden dzień',
    'stały most na implantach',
    'implanty całego łuku',
    'leczenie bezzębia implantami',
  ],
};

export const nav = [
  { label: 'All-on-X', href: '/all-on-x' },
  { label: 'All-on-4', href: '/all-on-4' },
  { label: 'All-on-6', href: '/all-on-6' },
  { label: 'Zęby w jeden dzień', href: '/zeby-w-jeden-dzien' },
  { label: 'Cennik', href: '/cennik' },
  { label: 'Blog', href: '/blog' },
  { label: 'O autorze', href: '/o-autorze' },
];
