export interface ConsultantDTO {
  token: string;
  user: {
    id: number;
    lastName: string;
    firstName: string;
    isConsultant: boolean;
    clients: number[];
    colorChart: {
      season: string;
      tone: string;
    },
    primaryStyle: string;
  }
}
