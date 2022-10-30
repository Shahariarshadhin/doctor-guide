import React from 'react';
import PatientFeedback from '../../PatientFeedback/PatientFeedback';
import TodaysSchedule from '../../TodaysSchedule/TodaysSchedule';
import Achivement from '../Achivement/Achivement';
import Appointment from '../Appointment/Appointment';
import KidSick from '../KidSick/KidSick';
import MedicalCare from '../MedicalCare/MedicalCare';
import MedicalExpert from '../MedicalExpert/MedicalExpert';
import Subscrive from '../Subcribe/Subscrive';
import UpcomingEvent from '../UpcomingEvents/UpcomingEvent';

const Home = () => {
    return (
        <div>
            <Appointment></Appointment>
            <KidSick></KidSick>
            <TodaysSchedule></TodaysSchedule>
            <MedicalCare></MedicalCare>
            <Achivement></Achivement>
            <MedicalExpert></MedicalExpert>
            <PatientFeedback></PatientFeedback>
            <UpcomingEvent></UpcomingEvent>
            <Subscrive></Subscrive>

        </div>
    );
};

export default Home;