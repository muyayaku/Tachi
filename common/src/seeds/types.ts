import { allSupportedGames } from "../config/config";
import type {
	Game,
	ChartDocument,
	SongDocument,
	BMSCourseDocument,
	FolderDocument,
	GoalDocument,
	QuestlineDocument,
	QuestDocument,
	TableDocument,
	GPTStrings,
} from "../types";

// lazy, but kinda cool macros.
// note that TS won't let you do this multiple times within an object
// so, we have to join them ourselves. Ah well, not that bad.
type ChartDBSeeds = {
	[G in Game as `charts-${G}.json`]: Array<ChartDocument<GPTStrings[G]>>;
};

type SongDBSeeds = {
	[G in Game as `songs-${G}.json`]: Array<SongDocument<G>>;
};

interface OtherDBSeeds {
	"bms-course-lookup.json": Array<BMSCourseDocument>;
	"folders.json": Array<FolderDocument>;
	"goals.json": Array<GoalDocument>;
	"questlines.json": Array<QuestlineDocument>;
	"quests.json": Array<QuestDocument>;
	"tables.json": Array<TableDocument>;
}

export type AllDatabaseSeeds = ChartDBSeeds & OtherDBSeeds & SongDBSeeds;

// Nifty trick to enforce that we always specify all database seeds :)
const CURRENT_DATABASE_SEEDS: Record<keyof OtherDBSeeds, true> = {
	"bms-course-lookup.json": true,
	"folders.json": true,
	"goals.json": true,
	"questlines.json": true,
	"quests.json": true,
	"tables.json": true,
};

const moreOnes: Array<string> = [];

for (const game of allSupportedGames) {
	moreOnes.push(`songs-${game}`, `charts-${game}`);
}

export const DatabaseSeedNames = [...Object.keys(CURRENT_DATABASE_SEEDS), ...moreOnes] as Array<
	keyof AllDatabaseSeeds
>;
