
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CourseInfo, DemoClassEngagement, FAQ, Features, Instructors, Pointers, Testimonials } from '../../utils/courseDetailsType';

interface DetailsState {
    checkList: {
        color: string,
        icon: string,
        id: string,
        list_page_visibility: string,
        text: string
    }[],
    section: {
        demoClassEngagement: DemoClassEngagement,
        instructors: Instructors,
        features: Features,
        pointers: Pointers,
        testimonials: Testimonials,
        courseInfo: CourseInfo,
        faq: FAQ
    }
}

const initialState: DetailsState = {
    checkList: [],
    section: {
        demoClassEngagement: {
            type: '',
            name: '',
            description: '',
            bg_color: '',
            order_idx: 0,
            values: []
        },
        instructors: {
            type: '',
            name: '',
            description: '',
            bg_color: '',
            order_idx: 0,
            values: []
        },
        features: {
            type: '',
            name: '',
            description: '',
            bg_color: '',
            order_idx: 0,
            values: []
        },
        pointers: {
            type: '',
            name: '',
            description: '',
            bg_color: '',
            order_idx: 0,
            values: []
        },
        testimonials: {
            type: '',
            name: '',
            description: '',
            bg_color: '',
            order_idx: 0,
            values: []
        },
        courseInfo: {
            type: '',
            name: '',
            description: '',
            bg_color: '',
            order_idx: 0,
            values: []
        },
        faq: {
            type: '',
            name: '',
            description: '',
            bg_color: '',
            order_idx: 0,
            values: []
        }
    }
};

export const detailsSlice = createSlice({
    name: 'details',
    initialState,
    reducers: {
        setCourseDetails(state, action: PayloadAction<any>) {
            state.section.demoClassEngagement = action.payload.sections[0]
            state.section.testimonials = action.payload.sections[8]
            state.section.instructors = action.payload.sections[3]
            state.section.features = action.payload.sections[4]
            state.section.pointers = action.payload.sections[5]
            state.section.courseInfo = action.payload.sections[10]
            state.section.faq = action.payload.sections[14]
            state.checkList = action.payload.checklist
        },
    },

});

export const { setCourseDetails } = detailsSlice.actions;

export default detailsSlice.reducer;