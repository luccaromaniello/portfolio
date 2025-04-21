import Text from "@/components/cases/typography/Text";

export const formatCaseDescription = (description?: string) => {
  return description ? <Text text={description} /> : "";
};
