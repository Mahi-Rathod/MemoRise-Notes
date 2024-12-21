import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/home/Home.jsx";
import ArchivedNotes from "./pages/archivedNotes/ArchivedNotes.jsx";
import ImportantNotes from "./pages/importantNotes/ImporantNotes.jsx";
import Bin from "./pages/bin/Bin.jsx"
import Layout from './layout/Layout.jsx';
import { useDispatch } from 'react-redux';
import { fetchNotes } from './redux/slices/notesSlice.js';


function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = () => {
      dispatch(fetchNotes());
    }

    fetchData();
  }, [dispatch]);

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/archived-notes" element={<ArchivedNotes />} />
        <Route path="/important-notes" element={<ImportantNotes />} />
        <Route path="/bin" element={<Bin />} />
      </Route>
    </Routes>
  )
}

export default App
