export interface Quest {
    _id: string;
    rewards: any[];
    steps: QuestStep[];
    affectedQuests: any[];
    lockOutConditions: any[];
}

export interface QuestStep {
    text: string;
}