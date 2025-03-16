import { SuitStatus } from "./suit-status";

export interface Suit {
    id: string;
    serialNumber: string;
    status: SuitStatus;
    oxygenLevel: number;
    batteryLevel: number;
    accuracy: {
        min: number;
        max: number;
    };
    lastMaintenanceDate: Date;
    nextMaintenanceDate: Date;
}