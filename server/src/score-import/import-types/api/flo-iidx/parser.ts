import { KtLogger } from "../../../../common/types";
import { ParseKaiIIDX } from "../../common/api-kai/iidx/parser";
import { KaiAuthDocument } from "kamaitachi-common";

export function ParseFloIIDX(authDoc: KaiAuthDocument, logger: KtLogger) {
    return ParseKaiIIDX("FLO", authDoc, logger);
}
