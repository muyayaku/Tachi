import { TachiConfig } from "lib/config";
import React from "react";
import { toAbsoluteUrl } from "_metronic/_helpers";

export default function SiteWordmark() {
	return (
		<div className="text-center mb-10 mb-lg-10">
			<img
				src={toAbsoluteUrl("/media/logos/logo-wordmark.png")}
				alt={TachiConfig.name}
				width="256px"
			/>
		</div>
	);
}
