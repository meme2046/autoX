import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import terser from '@rollup/plugin-terser';

export default {
    input: 'src/main.ts',
    output: {
        dir: "dist",
        format: 'es',
        entryFileNames: "[name].mjs"
    },
    plugins: [
        typescript({
            outDir: "dist"
        }),
        resolve(),
        commonjs(),
        json(),
        terser(),
    ]
}