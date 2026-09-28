import React, {
  useState,
  useContext,
  useRef,
  useEffect,
  useMemo,
} from "react";

import "./App.css";

import {
  Box,
  Typography,
  Divider,
  Fab,
  Menu,
  MenuItem,
  Pagination,
  Popover,
  Rating,
  Skeleton,
  SpeedDial,
  SpeedDialIcon,
  SpeedDialAction,
  Button,
  TextField,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";


// =====================================================
// 1. CONTEXT
// =====================================================

const StudentContext = React.createContext();

function StudentProvider({ children }) {
  const [studentName, setStudentName] = useState("Shravani");

  return (
    <StudentContext.Provider
      value={{ studentName, setStudentName }}
    >
      {children}
    </StudentContext.Provider>
  );
}


// =====================================================
// MAIN APPLICATION
// =====================================================

function StudentApp() {

  // ===================================================
  // 2. useState
  // ===================================================

  const [tasks, setTasks] = useState([
    "Complete MERN Assignment",
    "Study DBMS",
    "Practice React",
  ]);

  const [rating, setRating] = useState(4);

  const [page, setPage] = useState(1);

  const [loading, setLoading] = useState(true);


  // ===================================================
  // 3. useContext
  // ===================================================

  const { studentName } = useContext(StudentContext);


  // ===================================================
  // 4. useRef
  // ===================================================

  const taskInputRef = useRef(null);


  // ===================================================
  // 5. useEffect
  // ===================================================

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);

  }, []);


  // ===================================================
  // 6. PERFORMANCE - useMemo
  // ===================================================

  const totalTasks = useMemo(() => {
    return tasks.length;
  }, [tasks]);


  // ===================================================
  // MENU
  // ===================================================

  const [menuAnchor, setMenuAnchor] = useState(null);

  const openMenu = Boolean(menuAnchor);

  const handleMenuClick = (event) => {
    setMenuAnchor(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchor(null);
  };


  // ===================================================
  // POPOVER
  // ===================================================

  const [popoverAnchor, setPopoverAnchor] = useState(null);

  const handlePopoverOpen = (event) => {
    setPopoverAnchor(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setPopoverAnchor(null);
  };


  // ===================================================
  // ADD TASK
  // ===================================================

  const addTask = () => {

    setTasks([
      ...tasks,
      "New Student Task",
    ]);

    taskInputRef.current.focus();
  };


  // ===================================================
  // PAGINATION
  // ===================================================

  const handlePageChange = (event, value) => {
    setPage(value);
  };


  // ===================================================
  // SPEED DIAL
  // ===================================================

  const speedDialActions = [
    {
      icon: <EditIcon />,
      name: "Edit",
    },
    {
      icon: <DeleteIcon />,
      name: "Delete",
    },
    {
      icon: <ShareIcon />,
      name: "Share",
    },
  ];


  return (
    <Box
      sx={{
        maxWidth: 900,
        margin: "auto",
        padding: 3,
      }}
    >

      {/* ================================================= */}
      {/* STUDENT HEADER */}
      {/* ================================================= */}

      <Typography variant="h4">
        Student Study Planner
      </Typography>

      <Typography
        variant="h6"
        sx={{ mt: 1 }}
      >
        Welcome, {studentName}!
      </Typography>


      {/* ================================================= */}
      {/* DIVIDER */}
      {/* ================================================= */}

      <Divider sx={{ my: 3 }} />


      {/* ================================================= */}
      {/* SKELETON */}
      {/* ================================================= */}

      <Typography variant="h6">
        Study Overview
      </Typography>

      {loading ? (

        <Box sx={{ mt: 2 }}>

          <Skeleton
            variant="text"
            width={300}
            height={40}
          />

          <Skeleton
            variant="rectangular"
            width="100%"
            height={80}
          />

        </Box>

      ) : (

        <Card sx={{ mt: 2 }}>
          <CardContent>

            <Typography variant="h6">
              Study Progress
            </Typography>

            <Typography>
              You have {totalTasks} tasks to complete.
            </Typography>

          </CardContent>
        </Card>

      )}


      {/* ================================================= */}
      {/* RATING */}
      {/* ================================================= */}

      <Typography
        variant="h6"
        sx={{ mt: 4 }}
      >
        Rate Your Study Session
      </Typography>

      <Rating
        value={rating}
        onChange={(event, newValue) => {
          setRating(newValue);
        }}
      />

      <Typography>
        Rating: {rating} / 5
      </Typography>


      {/* ================================================= */}
      {/* MENU */}
      {/* ================================================= */}

      <Typography
        variant="h6"
        sx={{ mt: 4 }}
      >
        Student Options
      </Typography>

      <Button
        variant="outlined"
        onClick={handleMenuClick}
        endIcon={<MoreVertIcon />}
      >
        Options
      </Button>

      <Menu
        anchorEl={menuAnchor}
        open={openMenu}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>
          View Profile
        </MenuItem>

        <MenuItem onClick={handleMenuClose}>
          My Courses
        </MenuItem>

        <MenuItem onClick={handleMenuClose}>
          Settings
        </MenuItem>
      </Menu>


      {/* ================================================= */}
      {/* POPOVER */}
      {/* ================================================= */}

      <Box sx={{ mt: 3 }}>

        <Button
          variant="contained"
          onClick={handlePopoverOpen}
        >
          Study Information
        </Button>

        <Popover
          open={Boolean(popoverAnchor)}
          anchorEl={popoverAnchor}
          onClose={handlePopoverClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >

          <Box sx={{ p: 3 }}>

            <Typography variant="h6">
              Study Tip
            </Typography>

            <Typography>
              Take regular breaks while studying.
            </Typography>

          </Box>

        </Popover>

      </Box>


      {/* ================================================= */}
      {/* TASK LIST */}
      {/* ================================================= */}

      <Typography
        variant="h6"
        sx={{ mt: 4 }}
      >
        My Tasks
      </Typography>

      <List>

        {tasks.map((task, index) => (

          <ListItem key={index} divider>

            <ListItemText
              primary={task}
              secondary={`Task ${index + 1}`}
            />

          </ListItem>

        ))}

      </List>


      {/* ================================================= */}
      {/* INPUT + useRef */}
      {/* ================================================= */}

      <TextField
        inputRef={taskInputRef}
        label="Student Task"
        placeholder="Enter a task"
        fullWidth
        sx={{ mt: 2 }}
      />


     {/* ================================================= */}
{/* FLOATING ACTION BUTTON */}
{/* ================================================= */}

<Box sx={{ mt: 3 }}>

  <Typography variant="h6">
    Floating Action Button
  </Typography>

  <Fab
    color="primary"
    onClick={addTask}
    sx={{ mr: 2 }}
  >
    <AddIcon />
  </Fab>

  <Fab
    color="secondary"
    aria-label="share"
    onClick={() => alert("Share button clicked!")}
  >
    <ShareIcon />
  </Fab>

</Box> 


      {/* ================================================= */}
      {/* PAGINATION */}
      {/* ================================================= */}

      <Typography
        variant="h6"
        sx={{ mt: 4 }}
      >
        Study Pages
      </Typography>

      <Pagination
        count={5}
        page={page}
        onChange={handlePageChange}
        color="primary"
      />

      <Typography sx={{ mt: 1 }}>
        Current Page: {page}
      </Typography>


      {/* ================================================= */}
      {/* SPEED DIAL */}
      {/* ================================================= */}

      <Typography
        variant="h6"
        sx={{ mt: 4 }}
      >
        Quick Actions
      </Typography>

      <SpeedDial
        ariaLabel="Student Quick Actions"
        icon={<SpeedDialIcon />}
      >

        {speedDialActions.map((action) => (

          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />

        ))}

      </SpeedDial>


      {/* ================================================= */}
      {/* RESOURCE CREATION / LOADING */}
      {/* ================================================= */}

      <Typography
        variant="h6"
        sx={{ mt: 4 }}
      >
        Learning Resource
      </Typography>

      <Button
        variant="contained"
        onClick={() =>
          alert("Learning resource created successfully!")
        }
      >
        Create Resource
      </Button>

      <Divider sx={{ my: 4 }} />

      <Typography
        variant="body2"
        color="text.secondary"
      >
        Student Study Planner © 2026
      </Typography>

    </Box>
  );
}


// =====================================================
// CONTEXT PROVIDER
// =====================================================

function App() {
  return (
    <StudentProvider>
      <StudentApp />
    </StudentProvider>
  );
}

export default App;