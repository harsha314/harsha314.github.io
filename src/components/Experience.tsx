// import { Box, Container, Typography, Paper } from "@mui/material";
// import {
//   Timeline,
//   TimelineItem,
//   TimelineContent,
//   TimelineSeparator,
//   TimelineDot,
//   TimelineConnector,
// } from "@mui/lab/Timeline";
// import WorkIcon from "@mui/icons-material/Work";

// interface ExperienceItem {
//   title: string;
//   company: string;
//   period: string;
//   description: string[];
// }

// const experiences: ExperienceItem[] = [
//   {
//     title: "Software Engineer",
//     company: "Company Name",
//     period: "2023 - Present",
//     description: [
//       "Developed and maintained full-stack web applications using React and Node.js",
//       "Implemented responsive designs and improved application performance",
//       "Collaborated with cross-functional teams to deliver high-quality solutions",
//     ],
//   },
//   {
//     title: "Software Developer Intern",
//     company: "Previous Company",
//     period: "2022 - 2023",
//     description: [
//       "Assisted in developing new features for the main product",
//       "Worked with senior developers to improve code quality",
//       "Participated in code reviews and team meetings",
//     ],
//   },
//   // Add more experiences as needed
// ];

// const Experience = () => {
//   return (
//     <Box sx={{ py: 8, bgcolor: "background.default" }}>
//       <Container>
//         <Typography
//           variant="h2"
//           component="h2"
//           gutterBottom
//           color="text.primary"
//         >
//           Experience
//         </Typography>

//         <Timeline position="alternate">
//           {experiences.map((exp, index) => (
//             <TimelineItem key={index}>
//               <TimelineSeparator>
//                 <TimelineDot color="primary">
//                   <WorkIcon />
//                 </TimelineDot>
//                 {index < experiences.length - 1 && <TimelineConnector />}
//               </TimelineSeparator>
//               <TimelineContent>
//                 <Paper elevation={1} sx={{ p: 3, bgcolor: "background.paper" }}>
//                   <Typography variant="h6" component="h3" color="text.primary">
//                     {exp.title}
//                   </Typography>
//                   <Typography
//                     variant="subtitle1"
//                     color="primary.main"
//                     gutterBottom
//                   >
//                     {exp.company}
//                   </Typography>
//                   <Typography
//                     variant="caption"
//                     color="text.secondary"
//                     display="block"
//                     gutterBottom
//                   >
//                     {exp.period}
//                   </Typography>
//                   <Box component="ul" sx={{ m: 0, pl: 2 }}>
//                     {exp.description.map((desc, i) => (
//                       <Typography
//                         key={i}
//                         component="li"
//                         variant="body2"
//                         color="text.secondary"
//                         sx={{ mb: 0.5 }}
//                       >
//                         {desc}
//                       </Typography>
//                     ))}
//                   </Box>
//                 </Paper>
//               </TimelineContent>
//             </TimelineItem>
//           ))}
//         </Timeline>
//       </Container>
//     </Box>
//   );
// };

// export default Experience;
