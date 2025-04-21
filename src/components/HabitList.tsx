import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import useHabitStore from "../store/store";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DeleteIcon from "@mui/icons-material/Delete"

const HabitList = () => {
  const { habits, removeHabit, toggleHabit } = useHabitStore();

  const today = new Date().toDateString().split("")[0];
  console.log(today);

  return (
    <Box className="flex flex-col gap-2 mt-4">
      {habits.map((habit) => (
        <Paper key={habit.id} elevation={2} className="p-2">
          <Grid container alignItems="center">
            <Grid size={{ xs: 12, sm: 6 }}>
              <Typography variant="h6">{habit.name}</Typography>
              <Typography variant="body2" color="text.secondary">
                {habit.frequency}
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Box className="flex gap-2 justify-end">
                <Button 
                    variant="outlined"
                    color={habit.completedDates.includes(today) ? "success" : "primary"}
                    startIcon={<CheckCircleIcon/>}
                    onClick={()=> toggleHabit(habit.id, today)}
                >
                  {habit.completedDates.includes(today)
                    ? "Completed"
                    : "Mark Complete"}
                </Button>
                <Button variant="outlined" color="error" startIcon={<DeleteIcon/>} onClick={()=>removeHabit(habit.id)}>
                  Remove
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      ))}
    </Box>
  );
};

export default HabitList;
