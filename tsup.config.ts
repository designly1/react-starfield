import { Options } from 'tsup';
export const tsup: Options = {
	target: 'esnext',
	clean: true,
	dts: true,
	entry: ['index.ts'],
	keepNames: true,
	minify: true,
	sourcemap: true,
	format: ['cjs'],
	banner: {
		js: `"use client"`,
	},
};
