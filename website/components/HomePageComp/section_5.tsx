import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const faqData = [
    {
        value: "item-1",
        question: "Is it accessible?",
        answer: "Yes. It adheres to the WAI-ARIA design pattern. so if you want to fix any time soon."
    },
    {
        value: "item-2",
        question: "Is it styled?",
        answer: "Yes. It comes with default styles that matches the other components' aesthetic."
    },
    {
        value: "item-3",
        question: "Is it animated?",
        answer: "Yes. It's animated by default, but you can disable it if you prefer."
    }
];

const Section5 = () => {
    return (
        <div className='p-5'>
            <div className='my-4'>
                <h2>FAQ's</h2>
            </div>
            <div>
                <Accordion type="single" collapsible className="w-full flex flex-col gap-4">
                    {faqData.map((item) => (
                        <AccordionItem key={item.value} value={item.value} className='bg-gradient-to-r from-[var(--Gradient-1)] to-[var(--Gradient-2)] rounded-lg px-4'>
                            <AccordionTrigger>
                                <h3>{item.question}</h3>
                            </AccordionTrigger>
                            <AccordionContent>
                                <p>{item.answer}</p>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>
    )
}

export default Section5