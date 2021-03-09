export interface ConsultantDTO {
  token: string;
  user: {
    id: number;
    lastName: string;
    firstName: string;
    isConsultant: boolean;
    colorChart: {
      season: string;
      tone: string;
    },
    primaryStyle: string;
  }
}
