import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchBook } from '../../service/fetchBookService';
import { BookListType } from '../../util/types';
import StickyHeadTable from '../atoms/StickyHeadTable';

const RentalPage: React.FC = () => {
  const [ bookList, setBookList ] = useState<BookListType[]>([]);

  useEffect(() => {
    const data = fetchBook();
    setBookList(data);
  },[]);

  return (
    <>
      <h2>書籍リスト</h2>
      <StickyHeadTable data={bookList}/>
      <Link to="/">TOPに戻る</Link>
    </>
  )
}

export default RentalPage;
