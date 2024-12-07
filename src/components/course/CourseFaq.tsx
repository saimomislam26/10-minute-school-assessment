import { Accordion, AccordionSummary, AccordionDetails, Typography, List, ListItem } from '@mui/material';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const CourseFaq = () => {
    return (
        <div className="w-full" id="faq">
            <div className="pt-4 md:mx-16 mx-10">
                <h2 className="text-xl font-semibold md:text-2xl">
                    Frequently Ask Questions
                </h2>
            </div>
            <div className="border text-white md:w-[50%] md:mx-16 mx-10 bg-cover flex gap-4 mb-8 overflow-hidden rounded-xl md:mb-12 sm:mt-10">
                <div className="container mx-auto">
                    {/* Accordion 1 */}
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant="h6">
                                Is it possible to achieve a good score by taking an online IELTS course?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography variant="body1">
                                Yes, absolutely possible! In the IELTS Live Batch:
                            </Typography>
                            <List sx={{ listStyleType: 'none', paddingLeft: 0 }}>
                                <ListItem>- You'll learn Listening, Reading, Writing, and Speaking comprehensively through 36 live classes with hands-on practice.</ListItem>
                                <ListItem>- You'll get the chance to take 2 complete mock tests at the end of the classes to assess yourself one last time.</ListItem>
                                <ListItem>- There’s a 1-on-1 consultancy opportunity with the instructor to provide expert solutions to your problems.</ListItem>
                                <ListItem>- You'll have access to a "Facebook Support Group" where expert teachers will assist you with any course-related issues.</ListItem>
                            </List>
                            <Typography variant="body1">
                                With our guidance and your dedicated effort, achieving a good score is certainly possible!
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    {/* Accordion 2 */}
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant="h6">Can I speak directly with the instructor?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography variant="body1">
                                Yes, you can! In the IELTS Live Batch, you’ll have the opportunity for 1-on-1 consultancy with the instructor, where you can directly discuss and resolve your problems with an expert IELTS instructor.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    {/* Accordion 3 */}
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant="h6">Is there an arrangement for Speaking Practice?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography variant="body1">
                                Yes, there is! After the Speaking segment classes, there will be Speaking Practice Sessions through Zoom with the instructor, where you can practice speaking.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    {/* Accordion 4 */}
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant="h6">
                                Is the IELTS Live Batch designed for Academic or General IELTS preparation?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography variant="body1">
                                Whether you’re preparing for Academic or General IELTS, this course provides all the necessary guidelines tailored to your needs.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    {/* Accordion 5 */}
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography variant="h6">
                                What are the benefits of preparing for IELTS in the Live Batch without enrolling in offline or external courses?
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography variant="body1">
                                - Gain comprehensive insights into all IELTS modules through interactive live classes.<br />
                                - Practice effectively with mock tests and expert feedback.<br />
                                - Flexible learning environment with access to materials anytime.<br />
                                - 1-on-1 consultancy with instructors to address personalized concerns.<br />
                                - Save time and resources while ensuring optimal preparation for your target band score.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </div>
        </div>
    );
};

export default CourseFaq;
