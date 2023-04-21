import { createSlice } from '@reduxjs/toolkit';
// import axios from 'axios';

const initialState = {
  mission: [
    {
      id: 1,
      name: 'Mars 2020',
      description: 'Mars 2020 is a robotic space probe mission to Mars launched by NASA as part of the Mars Exploration Program. The mission is the third in a series of Mars rovers, the first two being Spirit and Opportunity, both of which landed in 2004.',
      images: [
        'https://live.staticflickr.com/65535/49906286243_28a4b342c7_b.jpg',
        'https://live.staticflickr.com/65535/49906286033_3b2e22d175_b.jpg',
        'https://live.staticflickr.com/65535/49906285898_5507e9decb_b.jpg',
        'https://live.staticflickr.com/65535/49906285728_78f62f66d1_b.jpg',
      ],
      wikipedia: 'https://en.wikipedia.org/wiki/Dragon_SpaceX',
      active: true,
    },
    {
      id: 2,
      name: 'Mars 2022',
      description: 'Mars 2022 is a robotic space probe mission to Mars launched by NASA as part of the Mars Exploration Program. The mission is the third in a series of Mars rovers, the first two being Spirit and Opportunity, both of which landed in 2004.',
      images: [
        'https://live.staticflickr.com/65535/49906286243_28a4b342c7_b.jpg',
        'https://live.staticflickr.com/65535/49906286033_3b2e22d175_b.jpg',
        'https://live.staticflickr.com/65535/49906285898_5507e9decb_b.jpg',
        'https://live.staticflickr.com/65535/49906285728_78f62f66d1_b.jpg',
      ],
      wikipedia: 'https://en.wikipedia.org/wiki/Dragon_SpaceX',
      active: false,
    },
    {
      id: 3,
      name: 'Mars 2024',
      description: 'Mars 2024 is a robotic space probe mission to Mars launched by NASA as part of the Mars Exploration Program. The mission is the third in a series of Mars rovers, the first two being Spirit and Opportunity, both of which landed in 2004.',
      images: [
        'https://live.staticflickr.com/65535/49906286243_28a4b342c7_b.jpg',
        'https://live.staticflickr.com/65535/49906286033_3b2e22d175_b.jpg',
        'https://live.staticflickr.com/65535/49906285898_5507e9decb_b.jpg',
        'https://live.staticflickr.com/65535/49906285728_78f62f66d1_b.jpg',
      ],
      wikipedia: 'https://en.wikipedia.org/wiki/Dragon_SpaceX',
      active: true,
    },
  ],
};

const missionSlice = createSlice({
  name: 'mission',
  initialState,
  reducers: {
    reserveMission: (state, action) => {
      const { id } = action.payload;
      const newState = state.mission.map((item) => {
        if (item.id !== id) {
          return item;
        }
        return { ...item, reserved: !item.reserved };
      });
      return {
        ...state,
        mission: [...newState],
      };
    },
  },
});

export const { reserveMission } = missionSlice.actions;

export default missionSlice.reducer;
