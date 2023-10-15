import { useEffect, useState } from 'react'
import {fetchFaqs} from '../../api/api'
import styles from './FaqAccordion.module.css'

import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FaqAccordion = () => {

    const [faqs, setFaqs] = useState([])

    useEffect(()=>{
        generateFaqs()
    },[])

    const generateFaqs = async() => {
        try {
            const faqsData = await fetchFaqs()
            // console.log({faqsData})
            setFaqs(faqsData)
        } catch (error) {
            console.error(error)
        }
    }
  return (
    <div className={styles.wrapper}>
        <h2 className={styles.text}>FAQs</h2>
        <div className={styles.accordionContainer}>
        {
            faqs.map((faq, idx)=>(
                <Accordion className={styles.accordionWrapper} key={idx+1}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={`panel${idx+1}a-content`}
                    id={`panel${idx+1}a-content`}
                    className={styles.accordionSummary}
                    >
                        <Typography>{faq.question}</Typography>
                    </AccordionSummary>
                    <AccordionDetails className={styles.accordionDetails}>
                        <Typography>{faq.answer}</Typography>
                    </AccordionDetails>
                </Accordion>
            ))
        }
        </div>
    </div>
  )
}

export default FaqAccordion