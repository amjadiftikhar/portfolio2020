import React from 'react';
import './language.styles.css';
import LanguageCard from './LanguageCard';

const languageData = [
    {
        language: 'English',
        level: 'Full Professional Proficiency'
    },
    {
        language: 'Danish',
        level: 'Professional Working Proficiency'
    }, 
    {
        language: 'Urdu',
        level: 'Native or Bilingual Proficiency'
    }        
]

const Languages = () => {

    return (
        <div className='languageSection'>
            <h3 className='languageTitle'>Languages</h3>
            <div className='languageCotainer'>
                {
                    languageData.map((l, index) => {
                        return(
                            <LanguageCard
                                key={index}
                                languageName={l.language}
                                languageLevel={l.level}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Languages;
