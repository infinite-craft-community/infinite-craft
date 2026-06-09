import { defineApiRoute } from "#lib/api-route";
import type { ApiRoute } from "#lib/api-route";
import type { ServerError, StringEmoji } from "#types/shared";

interface CraftData {
  result: string;
  emoji: StringEmoji;
  isNew: boolean;
}

interface CraftResultNoData {
  result: "Nothing";
  emoji: "";
  isNew: false;
}

type CraftOptions = {
  first: string;
  second: string;
};

export const craft: ApiRoute<
  CraftData | CraftResultNoData | ServerError,
  CraftOptions
> = defineApiRoute<CraftData | CraftResultNoData | ServerError, CraftOptions>({
  path: "/pair",
  method: "GET",
});
