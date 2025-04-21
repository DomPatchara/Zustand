import "./App.css"
import { Box, Container, Typography } from "@mui/material"
import HabitForm from "./components/HabitForm"
import HabitList from "./components/HabitList"


const App = () => {

  return (
    <Container>
      <Box>
        <Typography variant="h2" component="h1" gutterBottom align="center">
          Habit Tracker
        </Typography>
        {/* Form */}
        <HabitForm/>
        {/* List */}
        <HabitList/>
        {/* Stats */}
      </Box>
    </Container>
  )
}

export default App