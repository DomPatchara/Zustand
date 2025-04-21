import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export interface Habit {
  id: string;
  name: string;
  frequency: "daily" | "weekly";
  completedDates: string[];
  createdAt: string;
}

interface HabitState {
  habits: Habit[];
  addHabit: (name: string, frequency: "daily" | "weekly") => void;
  removeHabit: (id: string) => void;
  toggleHabit: (id: string, date: string) => void;
}

const useHabitStore = create<HabitState>()(
  devtools(
    persist(    // persist : มากจาก zustand middleware ทำให้สามารถคงที่ state ไว้ถึงแม้เราจะ refresh page
      (set) => {
        // devtools --> extendsion redux toolkit ทำให้ดู state ง่ายขึ้น
        return {
          habits: [],
          addHabit: (name, frequency) =>
            set((state) => {
              return {
                habits: [
                  ...state.habits, // habits เดิมก่อนหน้านี้ทั้งหมดที่ add list ไว้
                  {
                    id: Date.now().toString(),
                    name,
                    frequency,
                    completedDates: [],
                    createdAt: new Date().toISOString(),
                  },
                ],
              };
            }),
          removeHabit: (id) =>
            set((state) => ({
              habits: state.habits.filter((habit) => habit.id !== id),
            })),
          toggleHabit: (id, date) =>
            set((state) => ({
              habits: state.habits.map((habit) =>
                habit.id === id
                  ? {
                      ...habit,
                      completedDates: habit.completedDates.includes(date)
                        ? habit.completedDates.filter((d) => d !== date)
                        : [...habit.completedDates, date],
                    }
                  : habit
              ),
            })),
        };
      },
      {
        name: "habit-storage", // name of the item in storage (localStorage)
      }
    )
  )
);

export default useHabitStore;
