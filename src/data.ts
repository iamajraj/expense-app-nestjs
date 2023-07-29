interface Data {
  report: {
    id: string;
    source: string;
    amount: number;
    created_at: Date;
    updated_at: Date;
    type: ReportType;
  }[];
}

export enum ReportType {
  INCOME = 'income',
  EXPENSE = 'expense',
}

export const data: Data = {
  report: [
    {
      id: '361b669d-e0e4-43b2-a121-bd995154d901',
      source: 'Salary',
      amount: 750,
      created_at: new Date(),
      updated_at: new Date(),
      type: ReportType.INCOME,
    },
    {
      id: '252f0e60-d119-433e-b8bf-b245805e0faf',
      source: 'Grocery',
      amount: 150,
      created_at: new Date(),
      updated_at: new Date(),
      type: ReportType.EXPENSE,
    },
    {
      id: '3e5aa046-1002-4c0f-85af-254e58097e07',
      source: 'Food',
      amount: 300,
      created_at: new Date(),
      updated_at: new Date(),
      type: ReportType.EXPENSE,
    },
  ],
};
