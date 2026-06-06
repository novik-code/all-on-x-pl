export type Category =
  | 'all-on-4'
  | 'all-on-6'
  | 'all-on-x'
  | 'zeby-w-jeden-dzien'
  | 'cena-i-koszt'
  | 'po-zabiegu'
  | 'pytania-i-watpliwosci';

export const categoryMeta: Record<Category, {
  label: string;
  shortDescription: string;
  description: string;
}> = {
  'all-on-4': {
    label: 'All-on-4',
    shortDescription: 'Cały łuk na 4 implantach',
    description: 'All-on-4 — stały most na 4 implantach dla całego łuku. Wskazania, przebieg, obciążenie natychmiastowe, dla kogo.',
  },
  'all-on-6': {
    label: 'All-on-6',
    shortDescription: 'Cały łuk na 6 implantach',
    description: 'All-on-6 — większa stabilność i rozłożenie sił przy odbudowie całego łuku. Kiedy 6 implantów ma przewagę nad 4.',
  },
  'all-on-x': {
    label: 'All-on-X — porównania',
    shortDescription: 'Który wariant wybrać',
    description: 'All-on-X jako pojęcie zbiorcze — porównania All-on-4 vs All-on-6, vs proteza, vs most, kwalifikacja i decyzje.',
  },
  'zeby-w-jeden-dzien': {
    label: 'Zęby w jeden dzień',
    shortDescription: 'Obciążenie natychmiastowe',
    description: 'Stałe zęby w jeden dzień — protokół obciążenia natychmiastowego. Jak to możliwe, dla kogo, czego się spodziewać.',
  },
  'cena-i-koszt': {
    label: 'Cena i koszt',
    shortDescription: 'Ile kosztuje All-on-4/6',
    description: 'Koszt All-on-4 i All-on-6 w Polsce — co składa się na cenę, od czego zależy, porównania, finansowanie.',
  },
  'po-zabiegu': {
    label: 'Po zabiegu',
    shortDescription: 'Gojenie i pielęgnacja',
    description: 'Życie ze stałym mostem na implantach — gojenie, dieta, higiena, trwałość, kontrole, powikłania i jak ich unikać.',
  },
  'pytania-i-watpliwosci': {
    label: 'Pytania i wątpliwości',
    shortDescription: 'Najczęstsze obawy pacjentów',
    description: 'Odpowiedzi na najczęstsze pytania i obawy o All-on-4/6 — ból, bezpieczeństwo, wiek, choroby ogólne, trwałość.',
  },
};

export const allCategories = Object.keys(categoryMeta) as Category[];

export function readingTime(text: string): number {
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

export function slugify(s: string): string {
  return s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

export function formatDate(d: Date): string {
  return d.toLocaleDateString('pl-PL', { year: 'numeric', month: 'long', day: 'numeric' });
}
