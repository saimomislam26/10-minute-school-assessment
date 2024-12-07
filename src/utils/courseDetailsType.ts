export interface CheckList {
    color: string;
    icon: string;
    id: string;
    list_page_visibility: boolean;
    text: string;
}


export interface DemoClassEngagement {
    type: string;
    name: string;
    description: string;
    bg_color: string;
    order_idx: number;
    values: DemoClassValue[];
}

export interface DemoClassValue {
    background: {
        image: string;
        primary_color: string;
        secondary_color: string;
    };
    cta: {
        clicked_url: string;
        color: string;
        text: string;
    };
    description: string;
    description_color: string;
    id: string;
    thumbnail: string;
    title: string;
    title_color: string;
    top_left_icon_img: string;
}

export interface Instructor {
    description: string;
    has_instructor_page: boolean;
    image: string;
    name: string;
    short_description: string;
    slug: string;
}

export interface Instructors {
    type: string;
    name: string;
    description: string;
    bg_color: string;
    order_idx: number;
    values: Instructor[];
}


export interface Feature {
    icon: string;
    id: string;
    subtitle: string;
    title: string;
}

export interface Features {
    type: string;
    name: string;
    description: string;
    bg_color: string;
    order_idx: number;
    values: Feature[];
}

export interface Pointer {
    color: string;
    icon: string;
    id: string;
    text: string;
}

export interface Pointers {
    type: string;
    name: string;
    description: string;
    bg_color: string;
    order_idx: number;
    values: Pointer[];
}

export interface Testimonial {
    description: string;
    id: string;
    name: string;
    profile_image: string;
    testimonial: string;
    thumb: string;
    video_type: string;
    video_url: string;
}

export interface Testimonials {
    type: string;
    name: string;
    description: string;
    bg_color: string;
    order_idx: number;
    values: Testimonial[];
}


export interface CourseValue {
    description: string;
    icon: string;
    id: string;
    title: string;
}

// Interface for the main course information
export interface CourseInfo {
    type: string;
    name: string;
    description: string;
    bg_color: string;
    order_idx: number;
    values: CourseValue[];
}


export type FAQ = {
    type: string;
    name: string;
    description: string;
    bg_color: string;
    order_idx: number;
    values: FAQValue[];
};

export type FAQValue = {
    answer: string;
    id: string;
    question: string;
};




