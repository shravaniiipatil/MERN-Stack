import React, { useState } from "react";

import {
  Container,
  Typography,
  Slider,
  Switch,
  Avatar,
  Badge,
  CircularProgress,
  Drawer,
  Button, //snackbar, icons, list components, table, horizontal slider, on off button, tabs, tootip, accordian, alert, autocomplete, breadcrumbs, buttongroup, chip
  Box,
  Tabs,
  Tab,
  Card,
  CardContent,
} from "@mui/material";

function App() {
  // Drawer state
  const [openDrawer, setOpenDrawer] = useState(false);

  // Tabs state
  const [tabValue, setTabValue] = useState(0);

  // Dark mode state
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: darkMode ? "#222" : "#f5f5f5",
        color: darkMode ? "white" : "black",
        padding: 2,
      }}
    >
      <Container maxWidth="md">

        {/* STUDENT HEADER */}
        <Card sx={{ marginBottom: 3 }}>
          <CardContent>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
              }}
            >

              {/* Avatar + Badge */}
              <Badge badgeContent={3} color="error">
                <Avatar
                  sx={{
                    width: 60,
                    height: 60,
                  }}
                >
                  S
                </Avatar>
              </Badge>

              <Box>
                <Typography variant="h4">
                  Student Dashboard
                </Typography>

                <Typography variant="body1">
                  Welcome, Shravani!
                </Typography>

                <Typography variant="body2">
                  Computer Science Engineering
                </Typography>
              </Box>

            </Box>
          </CardContent>
        </Card>


        {/* 1. SLIDER */}
        <Typography variant="h5" sx={{ marginTop: 3 }}>
          1. Study Progress
        </Typography>

        <Typography variant="body2">
          Set your study progress
        </Typography>

        <Slider
          defaultValue={70}
          valueLabelDisplay="auto"
          sx={{ width: 300 }}
        />


        {/* 2. SWITCH */}
        <Typography variant="h5" sx={{ marginTop: 3 }}>
          2. Dark Mode
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography>
            Enable Dark Mode
          </Typography>

          <Switch
            checked={darkMode}
            onChange={(event) =>
              setDarkMode(event.target.checked)
            }
          />
        </Box>


        {/* 3. AVATAR */}
        <Typography variant="h5" sx={{ marginTop: 3 }}>
          3. Student Avatar
        </Typography>

        <Avatar
          sx={{
            width: 70,
            height: 70,
          }}
        >
          S
        </Avatar>


        {/* 4. BADGE */}
        <Typography variant="h5" sx={{ marginTop: 3 }}>
          4. Notifications
        </Typography>

        <Badge
          badgeContent={4}
          color="primary"
        >
          <Avatar>
            S
          </Avatar>
        </Badge>


        {/* 5. CIRCULAR PROGRESS */}
        <Typography variant="h5" sx={{ marginTop: 3 }}>
          5. Course Progress
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <CircularProgress
            variant="determinate"
            value={75}
            size={80}
          />

          <Typography variant="h6">
            75% Completed
          </Typography>
        </Box>


        {/* 6. DRAWER */}
        <Typography variant="h5" sx={{ marginTop: 3 }}>
          6. Student Menu
        </Typography>

        <Button
          variant="contained"
          onClick={() => setOpenDrawer(true)}
        >
          Open Student Menu
        </Button>


        <Drawer
          anchor="left"
          open={openDrawer}
          onClose={() => setOpenDrawer(false)}
        >
          <Box
            sx={{
              width: 250,
              padding: 3,
            }}
          >

            <Typography variant="h5">
              Student Menu
            </Typography>

            <Typography sx={{ marginTop: 3 }}>
              🏠 Dashboard
            </Typography>

            <Typography sx={{ marginTop: 2 }}>
              📚 My Courses
            </Typography>

            <Typography sx={{ marginTop: 2 }}>
              📝 Assignments
            </Typography>

            <Typography sx={{ marginTop: 2 }}>
              📊 Results
            </Typography>

            <Typography sx={{ marginTop: 2 }}>
              👤 Profile
            </Typography>

            <Button
              variant="contained"
              sx={{ marginTop: 3 }}
              onClick={() => setOpenDrawer(false)}
            >
              Close
            </Button>

          </Box>
        </Drawer>


        {/* 7. TABS */}
        <Typography variant="h5" sx={{ marginTop: 3 }}>
          7. Student Information
        </Typography>

        <Tabs
          value={tabValue}
          onChange={(event, newValue) => {
            setTabValue(newValue);
          }}
        >
          <Tab label="Courses" />
          <Tab label="Assignments" />
          <Tab label="Profile" />
        </Tabs>


        {/* TAB CONTENT */}

        {tabValue === 0 && (
          <Card sx={{ marginTop: 2 }}>
            <CardContent>
              <Typography variant="h6">
                My Courses
              </Typography>

              <Typography>
                • MERN Stack
              </Typography>

              <Typography>
                • Data Structures
              </Typography>

              <Typography>
                • Machine Learning
              </Typography>
            </CardContent>
          </Card>
        )}


        {tabValue === 1 && (
          <Card sx={{ marginTop: 2 }}>
            <CardContent>
              <Typography variant="h6">
                Assignments
              </Typography>

              <Typography>
                • React Material UI Assignment
              </Typography>

              <Typography>
                • NoSQL Assignment
              </Typography>

              <Typography>
                • GenAI Assignment
              </Typography>
            </CardContent>
          </Card>
        )}


        {tabValue === 2 && (
          <Card sx={{ marginTop: 2 }}>
            <CardContent>
              <Typography variant="h6">
                Student Profile
              </Typography>

              <Typography>
                Name: Shravani
              </Typography>

              <Typography>
                Branch: Computer Science Engineering
              </Typography>

              <Typography>
                Year: BTech
              </Typography>

              <Typography>
                College: DYPCET
              </Typography>
            </CardContent>
          </Card>
        )}

      </Container>
    </Box>
  );
}

export default App;