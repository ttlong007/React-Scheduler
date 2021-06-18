
import './App.css';
import Paper from '@material-ui/core/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  WeekView,
  Toolbar,
  DateNavigator,
  Appointments,
  TodayButton
} from '@devexpress/dx-react-scheduler-material-ui';

export const appointments = [
  {
    title: 'Website Re-Design Plan',
    startDate: new Date(2021, 6, 18, 9, 35),
    endDate: new Date(2021, 6, 18, 11, 30),
    id: 0,
    location: 'Room 1',
  }
];


function App() {
  return (
    <div className="App">
      <h2>React Scheduler Demo</h2>
      <Paper>
        <Scheduler
          data={appointments}
          locale="en"
          height={660}
        >
          <ViewState
            defaultCurrentDate={new Date()}
          />
          <WeekView
            startDayHour={9}
            endDayHour={19}
          />
          <Toolbar />
          <TodayButton />
          <DateNavigator />
          <Appointments />

        </Scheduler>
      </Paper>
    </div>
  );
}

export default App;
