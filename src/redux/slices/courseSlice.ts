
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MetaItem } from '../../utils/type';

interface CourseState {
    payment_end_at: Date | null;
    payment_start_at: Date | null;
    price: number | null;
    discount_amount: number | null;
    final_price: number | null;
    meta: MetaItem[];
}

const initialState: CourseState = {
    payment_end_at: null,
    payment_start_at: null,
    price: 0,
    discount_amount: 0,
    final_price: 0,
    meta: [
        {
            key: "checklist",
            values: []
        },
        {
            key: "timer",
            values: []
        }
    ]
};

export const courseSlice = createSlice({
    name: 'course',
    initialState,
    reducers: {
        setCourseVariant(state, action: PayloadAction<any>) {
            state.payment_end_at = action.payload.plan.payment_end_at;
            state.payment_start_at = action.payload.plan.payment_start_at;
            state.price = action.payload.price
            state.discount_amount = action.payload.discount_amount
            state.final_price = action.payload.final_price
            state.meta = action.payload.meta
        },
    },

});

export const { setCourseVariant, } = courseSlice.actions;

export default courseSlice.reducer;