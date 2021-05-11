import {React} from 'react';

import Header from '../../components/Header';
import ListTask from  '../../components/ListTask';
import Footer from '../../components/Footer';

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