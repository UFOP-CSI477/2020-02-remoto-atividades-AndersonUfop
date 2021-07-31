interface IDateProvider {
  dateNow(): Date;
  convertToUTC(date: Date): string;
  compareInDays(start_date: Date, end_date: Date): number;
  compareInYears(start_date: Date, end_date: Date): number;
  compareInMonths(start_date: Date, end_date: Date): number;
  compareIfBefore(start_date: Date, end_date: Date): boolean;
}

export { IDateProvider };
