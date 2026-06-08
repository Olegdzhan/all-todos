export const createFormFieldsIds = <E extends object>(
  formName: string,
  formFieldsEnum: E,
): { [P in keyof E]: string } => (
  Reflect.ownKeys(formFieldsEnum).reduce(
    (acc: { [P in keyof E]: string }, cur: string | symbol ): { [P in keyof E]: string } => {
      acc[cur as keyof E] = `${formName}-${formFieldsEnum[cur as keyof E]}`;
      return acc;
    },
    {} as { [P in keyof E]: string },
  )
);
