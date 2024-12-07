export interface ChecklistMetaValue {
    icon: string;
    id: string;
    is_cohort_checklist: boolean;
    is_payment_journey_checklist: boolean;
    is_product_checklist: boolean;
    meta_key: string;
    meta_value: string;
}

export interface TimerMetaValue {
    background_color: string;
    background_img: string;
    checklist_text_color: string;
    end_at: string; // ISO date string
    id: string;
    start_at: string; // ISO date string
    template: string;
    text: string;
}

export interface MetaItem {
    key: string;
    values: ChecklistMetaValue[] | TimerMetaValue[];
}
