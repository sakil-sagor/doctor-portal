import React from 'react';
import AppoinmentHeader from './AppoinmentHeader/AppoinmentHeader';
import Schedule from './Schedule/Schedule';

const Appoinment = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <div>
            <AppoinmentHeader date={date} setDate={setDate}></AppoinmentHeader>
            <Schedule date={date}></Schedule>


        </div>
    );
};

export default Appoinment;