export interface IAbsence { 
    id: number;
    leaveProfileId: number;
    startDate: Date;
    startHalfDay: string;
    endDate: Date;
    endHalfDay: string;
    approval: string;
    approverId: number;
    approver: string;
}
