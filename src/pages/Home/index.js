import {React} from 'react';

import Header from '../../components/general/Header';
import ListTask from  '../../components/ListTask';
import Footer from '../../components/general/Footer';

function Home () {
    return(
        <>
            <Header/>
            <ListTask/>
            <Footer/>
        </>
    )
}

export default Home;