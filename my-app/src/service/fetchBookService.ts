export const bookList = [
  {
    id: 1,
    name: 'react.js',
    category: 'フロントエンド',
    status: 1,
    rentalUser: '',
    rentalDate: '',
    returnDate: '',
    registDate: '',
  },
  {
    id: 2,
    name: 'node.js',
    category: 'バックエンド',
    status: 1,
    rentalUser: '',
    rentalDate: '',
    returnDate: '',
    registDate: '',
  },
];

export const fetchBook = () => {
  return bookList;
};
