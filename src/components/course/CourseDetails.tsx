import React from 'react'
import { Accordion, AccordionSummary, AccordionDetails, Typography, List, ListItem } from '@mui/material';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const CourseDetails = () => {
    return (
        <div className="w-full">
            <div className="pt-4 md:mx-16 mx-10">
                <h2 className="text-xl font-semibold md:text-2xl">
                    Course Details
                </h2>
            </div>
            <div className="border text-white md:w-[50%] md:mx-16 mx-10 bg-cover flex gap-4 mb-8 overflow-hidden rounded-xl md:mb-12 sm:mt-10">
                <div className="container mx-auto">
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant="h6">Who is this course for?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <List sx={{ listStyleType: 'none', paddingLeft: 0 }}>
                                <ListItem sx={{ paddingLeft: 0, marginBottom: '8px' }}>
                                    <Typography variant="body1">- University students from various departments interested in studying abroad.</Typography>
                                </ListItem>
                                <ListItem sx={{ paddingLeft: 0, marginBottom: '8px' }}>
                                    <Typography variant="body1">- Learners aiming for Honors, Masters, or PhD programs overseas.</Typography>
                                </ListItem>
                                <ListItem sx={{ paddingLeft: 0, marginBottom: '8px' }}>
                                    <Typography variant="body1">- Individuals who are seeking scholarships for international study opportunities.</Typography>
                                </ListItem>
                                <ListItem sx={{ paddingLeft: 0, marginBottom: '8px' }}>
                                    <Typography variant="body1">- Government and non-government employees.</Typography>
                                </ListItem>
                                <ListItem sx={{ paddingLeft: 0, marginBottom: '8px' }}>
                                    <Typography variant="body1">- Learners who are looking to enhance their English fluency.</Typography>
                                </ListItem>
                                <ListItem sx={{ paddingLeft: 0, marginBottom: '8px' }}>
                                    <Typography variant="body1">- Candidates wanting to achieve higher IELTS band scores.</Typography>
                                </ListItem>
                            </List>
                        </AccordionDetails>
                    </Accordion>

                    {/* Second Accordion */}
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant="h6">IELTS Band Score Target: 6.0 - 8.0</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <List sx={{ listStyleType: 'none', paddingLeft: 0 }}>
                                <ListItem sx={{ paddingLeft: 0, marginBottom: '8px' }}>
                                    <Typography variant="body1">- Score well in questions from all modules: Listening, Reading, Writing, and Speaking.</Typography>
                                </ListItem>
                                <ListItem sx={{ paddingLeft: 0, marginBottom: '8px' }}>
                                    <Typography variant="body1">- Understand and solve 11 different types of Listening questions.</Typography>
                                </ListItem>
                                <ListItem sx={{ paddingLeft: 0, marginBottom: '8px' }}>
                                    <Typography variant="body1">- Navigate smoothly through 8 different Reading question types.</Typography>
                                </ListItem>
                                <ListItem sx={{ paddingLeft: 0, marginBottom: '8px' }}>
                                    <Typography variant="body1">- Solve 2 types of Writing tasks effectively.</Typography>
                                </ListItem>
                                <ListItem sx={{ paddingLeft: 0, marginBottom: '8px' }}>
                                    <Typography variant="body1">- Excel in all 3 parts of the Speaking module with smart answers.</Typography>
                                </ListItem>
                                <ListItem sx={{ paddingLeft: 0, marginBottom: '8px' }}>
                                    <Typography variant="body1">- Learn speed reading and time management techniques.</Typography>
                                </ListItem>
                                <ListItem sx={{ paddingLeft: 0, marginBottom: '8px' }}>
                                    <Typography variant="body1">- Improve English speaking skills with expert feedback.</Typography>
                                </ListItem>
                                <ListItem sx={{ paddingLeft: 0, marginBottom: '8px' }}>
                                    <Typography variant="body1">- Score higher in Writing with helpful strategies.</Typography>
                                </ListItem>
                                <ListItem sx={{ paddingLeft: 0, marginBottom: '8px' }}>
                                    <Typography variant="body1">- Understand the IELTS scoring system and question patterns for your target band.</Typography>
                                </ListItem>
                            </List>
                        </AccordionDetails>
                    </Accordion>

                    {/* Third Accordion */}
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant="h6">What you will be able to do after completion of the course</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography variant="body1">
                                - Gain deep insights into all IELTS modules with expert instructors.<br />
                                - Access comprehensive study materials and practice tests.<br />
                                - Get personalized feedback and tips for improvement.<br />
                                - Join a vibrant community of learners and get support 24/7.<br />
                                - Maximize your chances of achieving your target IELTS band score.

                            </Typography>

                        </AccordionDetails>
                    </Accordion>

                    {/* Fourth Accordion */}
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant="h6">Why should you do this course?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>


                            <Typography variant="body1">
                                The International English Language Testing System (IELTS) is a comprehensive language assessment test designed to evaluate proficiency across all four modules.
                                To achieve a high band score, candidates must fully grasp each module and confidently tackle any question type. Unfortunately, many IELTS candidates rely solely on memorizing grammar rules and vocabulary,
                                neglecting essential techniques and practice tests. Consequently, they need help identifying weaknesses and gauging their progress, hindering them from reaching their desired band score.
                            </Typography>
                            <br />
                            <Typography variant="body1">
                                IELTS LIVE Batch by 10 Minute School is the ultimate solution to achieving your target band score. This course offers a comprehensive curriculum with hands-on training in the Listening, Reading, Writing, and Speaking modules, ensuring thorough preparation.
                                With features such as a detailed 12-week Study Plan, 36 Interactive LIVE Classes led by expert instructors, 8 Reading and Listening Practice Tests, 2 Complete Mock Tests, an Exclusive IELTS Preparation Book,
                                and access to a dedicated 24/7 Facebook Community Support Group, this LIVE course provides everything you need to succeed.
                            </Typography>
                            <br />
                            <Typography variant="body1">
                                Join Bangladesh's leading IELTS preparation course today and let our experienced instructors guide you to your desired band score. Whether aiming for Band 6.0 or Band 8.0, enroll in the IELTS LIVE Batch now to secure your spot.
                                <br />
                                <strong>N.B. Limited Seats Are Available</strong>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </div>
        </div>
    )
}

export default CourseDetails