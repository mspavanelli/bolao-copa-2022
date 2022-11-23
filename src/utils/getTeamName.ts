import { getName } from "country-list";

export function getTeamName(countryCode: string) {
  switch (countryCode) {
    case "GB-ENG":
      return "England";
    case "GB-WLS":
      return "Wales";
    default:
      return getName(countryCode);
  }
}
