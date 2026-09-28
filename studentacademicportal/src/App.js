import React, { useState } from "react";

import {
  Alert,
  Autocomplete,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Breadcrumbs,
  Button,
  ButtonGroup,
  Chip,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Snackbar,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Tooltip,
  Typography,
  Box,
} from "@mui/material";

// Icons
import HomeIcon from "@mui/icons-material/Home";
import SchoolIcon from "@mui/icons-material/School";
import AssignmentIcon from "@mui/icons-material/Assignment";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import "./App.css";

function App() {
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const courses = [
    "MERN Stack",
    "Data Structures",
    "Machine Learning",
    "DBMS",
    "Operating Systems",
  ];

  return (
    <Box className="portal-container">

      {/* Main Heading */}
      <Typography variant="h4" className="portal-title" gutterBottom>
        Student Academic Portal
      </Typography>

      <Typography variant="body1" sx={{ mb: 3 }}>
        Manage your courses, assignments and academic activities.
      </Typography>


      {/* 1. BREADCRUMBS */}
      <Typography variant="h6" className="section-title">
        1. Breadcrumbs
      </Typography>

      <Breadcrumbs className="breadcrumbs">
        <Typography>Home</Typography>
        <Typography>Student</Typography>
        <Typography>Dashboard</Typography>
      </Breadcrumbs>


      {/* 2. ICONS */}
      <Typography variant="h6" className="section-title">
        2. Icons
      </Typography>

      <Box className="icon-container">

        <IconButton>
          <HomeIcon />
        </IconButton>

        <IconButton>
          <SchoolIcon />
        </IconButton>

        <IconButton>
          <AssignmentIcon />
        </IconButton>

        <IconButton>
          <NotificationsIcon />
        </IconButton>

      </Box>


      {/* 3. LIST */}
      <Typography variant="h6" className="section-title">
        3. List
      </Typography>

      <List className="student-list">

        <ListItem>
          <ListItemIcon>
            <SchoolIcon />
          </ListItemIcon>

          <ListItemText
            primary="MERN Stack"
            secondary="Web Development"
          />
        </ListItem>

        <ListItem>
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>

          <ListItemText
            primary="Data Structures"
            secondary="Programming"
          />
        </ListItem>

        <ListItem>
          <ListItemIcon>
            <SchoolIcon />
          </ListItemIcon>

          <ListItemText
            primary="Machine Learning"
            secondary="Artificial Intelligence"
          />
        </ListItem>

      </List>


      {/* 4. TABLE */}
      <Typography variant="h6" className="section-title">
        4. Student Marks
      </Typography>

      <Table className="student-table">

        <TableHead>
          <TableRow>
            <TableCell>Subject</TableCell>
            <TableCell>Marks</TableCell>
            <TableCell>Grade</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>

          <TableRow>
            <TableCell>MERN Stack</TableCell>
            <TableCell>85</TableCell>
            <TableCell>A</TableCell>
          </TableRow>

          <TableRow>
            <TableCell>DBMS</TableCell>
            <TableCell>90</TableCell>
            <TableCell>A+</TableCell>
          </TableRow>

          <TableRow>
            <TableCell>Machine Learning</TableCell>
            <TableCell>88</TableCell>
            <TableCell>A</TableCell>
          </TableRow>

        </TableBody>

      </Table>


      {/* 5. TOOLTIP */}
      <Typography variant="h6" className="section-title">
        5. Tooltip
      </Typography>

      <Tooltip title="View your notifications">
        <IconButton className="tooltip-icon">
          <NotificationsIcon />
        </IconButton>
      </Tooltip>


      {/* 6. ACCORDION */}
      <Typography variant="h6" className="section-title">
        6. Accordion
      </Typography>

      <Accordion className="accordion">

        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>
            What is MERN Stack?
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography>
            MERN Stack consists of MongoDB, Express.js,
            React.js and Node.js.
          </Typography>
        </AccordionDetails>

      </Accordion>


      {/* 7. ALERT */}
      <Typography variant="h6" className="section-title">
        7. Alert
      </Typography>

      <Alert severity="success" className="student-alert">
        Assignment submitted successfully!
      </Alert>


      {/* 8. AUTOCOMPLETE */}
      <Typography variant="h6" className="section-title">
        8. Autocomplete
      </Typography>

      <Autocomplete
        className="course-autocomplete"
        options={courses}
        sx={{ mt: 1, mb: 3 }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Select Course"
          />
        )}
      />


      {/* 9. BUTTON GROUP */}
      <Typography variant="h6" className="section-title">
        9. Button Group
      </Typography>

      <ButtonGroup
        className="button-group"
        variant="contained"
      >
        <Button>View</Button>
        <Button>Edit</Button>
        <Button>Delete</Button>
      </ButtonGroup>


      {/* 10. CHIP */}
      <Typography variant="h6" className="section-title">
        10. Chip
      </Typography>

      <Box className="chip-container">

        <Chip
          label="CSE"
          color="primary"
        />

        <Chip
          label="Final Year"
          color="success"
        />

        <Chip
          label="Student"
          variant="outlined"
        />

      </Box>


      {/* 11. SNACKBAR */}
      <Typography variant="h6" className="section-title">
        11. Snackbar
      </Typography>

      <Button
        className="snackbar-button"
        variant="contained"
        onClick={() => setOpenSnackbar(true)}
      >
        Show Notification
      </Button>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar(false)}
        message="Welcome to Student Academic Portal!"
      />

    </Box>
  );
}

export default App;

divider, floating action button, menu, pagination, popover, rating, skeleton, speed dial, hooks- state, context, ref, effect, performance, resource