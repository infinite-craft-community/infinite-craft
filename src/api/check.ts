import { defineApiRoute } from "#lib/api-route";
import type { ApiRoute } from "#lib/api-route";
import type { StringEmoji } from "#types/shared";

interface VerifyValidData {
  result: true;
  emoji: StringEmoji;
}

interface VerifyInvalidData {
  valid: false;
  emoji: "";
}

type VerifyRecipeOptions = {
  first: string;
  second: string;
  result: string;
};

export const verifyRecipe: ApiRoute<
  VerifyValidData | VerifyInvalidData,
  VerifyRecipeOptions
> = defineApiRoute<VerifyValidData | VerifyInvalidData, VerifyRecipeOptions>({
  path: "/check",
  method: "GET",
});
