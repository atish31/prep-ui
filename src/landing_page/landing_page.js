import {useState} from 'react';

export const LandingPage = () => {
    const [name, setName] = useState('My Course');

    const changeCourseTitle = () => {
        setName('My prep Course');
    }
    return (
        <p>
           My course name is:  { name }

           <button onClick={changeCourseTitle}>Change course title</button>

        </p>
    )
}