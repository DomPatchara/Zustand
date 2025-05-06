# Zustand 
Create Habit tracker by using Zustand ( Global State Management )

## Why we should use Zustand more than Redux Toolkit ?
- ขนาด bundle size เล็กกว่า Redux Toolkit มากถึง 20 เท่า
- ไม่ต้องใช้ reducer, action และ slice 
- ไม่ต้องใช้ Provider
- มี persist middleware สำหรับเก็บข้อมูลใน localStorage ด้วย

## [0.] Set Up
```
npm install zustand
```

## [1.] Create Store
- **devtools** คือ Redux dev tool ช่วยให้เราเข้าไปดู State ใน Extension Chrome ได้ง่ายขึ้น
- **persist** คือ การเก็บข้อมูลใน localStorage ( Refresh page แล้วข้อมูลยังอยู่ )
```javascript
import { create } from "zustand"
import { devtools, persist } from "zustand/middleware"; // <----- Optional ใส่หลัง create(devtool(persist(set) => ....

const useHabitStore = create((set) => ({
  count: 0,
  habits: [],
  addHabit: () => set((state)=> ({ habits: [...state.habits, newHabit] })),
  increment: () => set((state) => ({ count: state.count + 1 })),
}));

export default useHabitStore;
```

## [2.] Use data from Store in Components
```javascript
import useHabitStore from "../store/store"

const { habits, addHabbit } = useHabitStore();

```
