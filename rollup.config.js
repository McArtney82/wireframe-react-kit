import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import dts from 'rollup-plugin-dts';

export default [
    {
        input: 'src/index.ts',
        output: [
            {
                file: './dist/cjs/index.js',
                format: 'cjs',
                sourcemap: true,
            },
            {
                file: './dist/esm/index.js',
                format: 'esm',
                sourcemap: true,
            },
        ],
        plugins: [
            peerDepsExternal(),
            resolve(),
            commonjs(),
            typescript({
                tsconfig: './tsconfig.json',
                declaration: false, // Ensure no `.d.ts` files are emitted here
            }),
        ],
        external: ['react', 'react-dom'],
    },
    {
        input: 'src/index.ts', // Use TypeScript entry to generate declarations
        output: [{ file: './dist/index.d.ts', format: 'es' }],
        plugins: [dts()], // Bundle `.d.ts` files
    },
];
