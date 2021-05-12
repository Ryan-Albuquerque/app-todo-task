import React from 'react'

import Header from '../../components/Header';
import FormTask from '../../components/FormTask';
import Footer from '../../components/Footer';


function EditTask(props) {
    return (
        <>
            <Header />
            <FormTask props={props}/>
            <Footer />
        </>
    )
}

export default EditTask;
